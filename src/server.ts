// src/server.ts
// biome-ignore lint/style/useImportType: <explanation>
import express, { Request, Response, Application, NextFunction } from 'express';
import {handler} from "./controller"
import dotenv from 'dotenv';


// Load environment variables
dotenv.config();

// Configuration
const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development'
};


// Initialize Express app
const app: Application = express();
app.use(express.json());

app.post("*", async (req: Request, res: Response, next: NextFunction) => {
  console.log("Request Body:", req.body);
 res.send(await handler(req, "POST")); // Send the response from the handler
});

app.get("/", async (req: Request, res: Response) => {
  res.send(await handler(req, "GET")); // Send the response from the handler
});

app.listen(config.port, (err)  => {
  if(err) console.log(err);
  console.log(`Server is running on port ${config.port} in ${config.env} mode`);
});