// import the prisma client from the prisma.ts file
import prisma from "../../lib/prisma";
import type { Prisma, NFT } from "@prisma/client";
//create an Nft service module


type nftInput= Prisma.NFTCreateInput;;
//create a new nft function
export const createNFT = async (data: NFT) => {
    try {
        const nft =await prisma.nFT.create({
            data:{
                id: data.id,
                imageUrl: data.imageUrl,
                name: data.name,
                contractAddress: data.contractAddress,
                creatorId: data.creatorId,
                createdAt: data.createdAt,
                collectionId:data.collectionId,
                listedForSale: data.listedForSale,
                ownerId:data.ownerId,
                price:data.price,
                tokenId:data.tokenId,
                traits:!data.traits,
                description: data.description,

            },
        })
        return nft;
    } catch (error) {
        throw new Error("Error creating NFT");
    }
};


//an nft update function
export const updateNFT = async (id: string, data:NFT) => {
    try {
        const nft = await prisma.nFT.update({
            where: { id },
            data: {
                imageUrl: data.imageUrl,
                name: data.name,
                contractAddress: data.contractAddress,
                creatorId: data.creatorId,
                createdAt: data.createdAt,
                collectionId:data.collectionId,
                listedForSale: data.listedForSale,
                ownerId:data.ownerId,
                price:data.price,
                tokenId:data.tokenId,
                traits:!data.traits,
                description: data.description,
            },
        });
        return nft;
    } catch (error) {
        throw new Error("Error updating NFT");
    }
};


//create a read nft function
export const getNFT = async (id: string) => {
    try {
        const nft = await prisma.nFT.findUnique({
            where: { id },
        });
        return nft;
    } catch (error) {
        throw new Error("Error fetching NFT");
    }
};

//create a function to delete an nft
export const deleteNFT = async (id: string) => {
    try {
        const nft = await prisma.nFT.delete({
            where: { id },
        });
        return nft;
    } catch (error) {
        throw new Error("Error deleting NFT");
    }
};


