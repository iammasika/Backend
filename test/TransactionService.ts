// import the prisma client from the prisma.ts file
import type { Prisma, Transaction } from "@prisma/client";
import prisma from "../lib/prisma";

//create a function to create a new transaction

type TransactionInput = Prisma.TransactionCreateInput;


//create a function to create a new transaction
export const createTransaction = async (data: Transaction) => {
    // Create a new transaction
    try {
        const transaction = await prisma.transaction.create({
            data: data
        });
        return transaction;
    } catch (error) {
        throw new Error("Error creating transaction");
    }
}

//create a function to get all transactions
export const getAllTransactions = async () => {
    try {
        const transactions = await prisma.transaction.findMany();
        return transactions;
    } catch (error) {
        throw new Error("Error getting transactions");
    }
}

//create a function to get a transaction by id
export const getTransactionById = async (id: string) => {
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id,
            },
        });
        return transaction;
    } catch (error) {
        throw new Error("Error getting transaction");
    }
};

//create a function to update a transaction
export const updateTransaction = async (id: string, data: TransactionInput) => {
    try {
        const transaction = await prisma.transaction.update({
            where: {
                id,
            },
            data,
        });
        return transaction;
    } catch (error) {
        throw new Error("Error updating transaction");
    }
};

//create a function to delete a transaction
export const deleteTransaction = async (id: string) => {
    try {
        const transaction = await prisma.transaction.delete({
            where: {
                id,
            },
        });
        return transaction;
    } catch (error) {
        throw new Error("Error deleting transaction");
    }
};
