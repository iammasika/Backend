// import the prisma client from the prisma.ts file
import prisma from "../../lib/prisma";
import type { Prisma ,User } from "@prisma/client";

type user= User;
//create a function to create a new user
export const createUser = async (data:user) => {
    try {
        const user = await prisma.user.create({
            data: {
                id: data.id,
                username: data.username,
                email: data.email,
                role: data.role,
                avatarUrl: data.avatarUrl,
                favoriteGenres: data.favoriteGenres,
                bio: data.bio,
                createdAt: data.createdAt
            }
        });
        return user;
    } catch (error) {
        throw new Error("Error creating user");
    }
};

//create a read user function
export const getUser = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        return user;
    } catch (error) {
        throw new Error("Error fetching user");
    }
};

//create a function to update a user
export const updateUser = async (id: string, data:user) => {
    try {
        const user = await prisma.user.update({
            where: { id },
            data,
        });
        return user;
    } catch (error) {
        throw new Error("Error updating user");
    }
};
