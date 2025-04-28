import express, { type Request, type Response, Application, type NextFunction, Router, response } from 'express';

import { registerSchema, RegisterInput } from  "../schema/user";
import e from 'express';
import prisma from '../../lib/prisma';
import { createUser } from '../Services/userService';


const register = Router();

// api endpoint for user registration
register.post('/api/register', async (req: Request, res: Response) => {
    // validate the request body against the schema
    
   

    
   // const newUser = registerSchema.parse(result);
    
  
    // send success response
   
   res.json({
        status: 'success',
        message: 'User registered successfully',
        data: req.body,

        });

    })
        
export default register;