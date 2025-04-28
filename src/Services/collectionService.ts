// import the prisma client from the prisma.ts file
import prisma from "../../lib/prisma";
import type { Prisma, Collection } from "@prisma/client";

type collectionInput= Prisma.CollectionCreateInput;
//create a function to create a new collection
export const createCollection = async (data: Collection) => {
    try {
        const collection = await prisma.collection.create({
            data: {
                id: data.id,
                name: data.name,
                description: data.description,
               createdAt: data.createdAt,
            },
        });
        return collection;
    } catch (error) {
        throw new Error("Error creating collection");
    }
};

//create a function to get all collections using id
export const getAllCollections = async () => {
    try {
        const collections = await prisma.collection.findMany();
        return collections;
    } catch (error) {
        throw new Error("Error getting collections");
    }
};
//create a function to get a collection by id
export const getCollectionById = async (id: string) => {
    try {
        const collection = await prisma.collection.findUnique({
            where: {
                id,
            },
        });
        return collection;
    } catch (error) {
        throw new Error("Error getting collection");
    }
};

//function to update collection
export const updateCollection = async (id: string, data: {
    name?: string;
    description?: string;
    imageUrl?: string;
}) => {
    try {
        const collection = await prisma.collection.update({
            where: {
                id,
            },
            data,
        });
        return collection;
    } catch (error) {
        throw new Error("Error updating collection");
    }
};


//function to delete collection 
export const removeCollection = async (id: string) => {
    try {
        const collection = await prisma.collection.delete({
            where: {
                id,
            },
        });
        return collection;
    } catch (error) {
        throw new Error("Error removing collection");
    }
};