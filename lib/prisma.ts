import { PrismaClient } from '@prisma/client';

//creating a prisma client 
const prisma = new PrismaClient();

// Now you can use the prisma instance to interact with your database

export default prisma;