// import the prisma client from the prisma.ts file

import type { Prisma , UserReward} from "@prisma/client";
import prisma from "../../lib/prisma";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";



type userRewardInput = Prisma.UserRewardCreateInput;


//create a function to create a new User reward
export const createUserReward = async (data: UserReward) => {
    try {
        const userReward = await prisma.userReward.create({
            data: data,
        });
        return userReward;
    } catch (error) {
        throw new Error("Error creating user reward");
    }
};

//create a function to get all user rewards
export const getAllUserRewards = async () => {
    try {
        const userRewards = await prisma.userReward.findMany();
        return userRewards;
    } catch (error) {
        throw new Error("Error getting user rewards");
    }
};

//create a function to get a user reward by id
export const getUserRewardById = async (id: string) => {
    try {
        const userReward = await prisma.userReward.findUnique({
            where: {
                id,
            },
        });
        return userReward;
    } catch (error) {
        throw new Error("Error getting user reward");
    }
};

//create a function to update a user reward
export const updateUserReward = async (id: string, data: UserReward) => {
    try {
        const userReward = await prisma.userReward.update({
            where: {
                id,
            },
            data,
        });
        return userReward;
    } catch (error) {
        throw new Error("Error updating user reward");
    }
};

//create a function to delete a user reward

export const deleteUserReward = async (id: string) => {
    try {
        const userReward = await prisma.userReward.delete({
            where: {
                id,
            },
        });
        return userReward;
    } catch (error) {
        throw new Error("Error deleting user reward");
    }
};
//create a function to get all user rewards by user id
export const getAllUserRewardsByUserId = async (userId: string) => {
    try {
        const userRewards = await prisma.userReward.findMany({
            where: {
                userId,
            },
        });
        return userRewards;
    } catch (error) {
        throw new Error("Error getting user rewards");
    }
};
