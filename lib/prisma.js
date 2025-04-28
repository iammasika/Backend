"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
//creating a prisma client 
var prisma = new client_1.PrismaClient();
// Now you can use the prisma instance to interact with your database
exports.default = prisma;
