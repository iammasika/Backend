import {handleMessage,sendMessage} from "../controller/lib/telegram"
import {errorHandler} from "../controller/lib/helper"
import type { Request, Response, Application, NextFunction } from 'express';
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function handler (req: Request, method:any){
    try{
        if(method==="GET"){
            return "GET request received";
        }
        const {body}=req;
        // biome-ignore lint/complexity/useOptionalChain: <explanation>
        if(body && body.message){
            const messageObj=body.message;
         
            await handleMessage(messageObj);
            return "Success";
    }

    return "Unknown request";
}
  
    catch(ex){
        errorHandler(ex,"handler","telegram");
    }
}
