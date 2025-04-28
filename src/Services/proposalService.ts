import type { Prisma, Proposal } from "@prisma/client";
import prisma from "../../lib/prisma";


// import the prisma client from the prisma.ts file

// create a function to create a new proposal
type ProposalInput = Prisma.ProposalCreateInput;

//cteate a function to create a new proposal

export const createProposal = async (data: Proposal) => {
    try {
        const proposal = await prisma.proposal.create({
            data: data,
        });
        return proposal;
    } catch (error) {
        throw new Error("Error creating proposal");
    }
}

// create a function to update a proposal
type ProposalUpdate = Prisma.ProposalUpdateInput;

export const updateProposal = async (id: string, data: ProposalUpdate) => {
    try {
        const proposal = await prisma.proposal.update({
            where: {
                id,
            },
            data,
        });
        return proposal;
    } catch (error) {
        throw new Error("Error updating proposal");
    }
};

// create a function to get all proposals


export const getAllProposals = async () => {
    try {
        const proposals = await prisma.proposal.findMany();
        return proposals;
    } catch (error) {
        throw new Error("Error getting proposals");
    }
};

// delete a proposal using type


export const deleteProposal = async (id: string) => {
    try {
        const proposal = await prisma.proposal.delete({
            where: {
                id,
            },
        });
        return proposal;
    } catch (error) {
        throw new Error("Error deleting proposal");
    }
}