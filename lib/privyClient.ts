import {PrivyClient} from '@privy-io/server-auth';
import dotenv from "dotenv";

dotenv.config();

// Load environment variables
const apiKey = process.env.API_KEY as string;
const privateKey = process.env.PRIVATE_KEY as string;
const authorizationPrivateKey = process.env.AUTHORIZATION_PRIVATE_KEY as string;
 const privy = new PrivyClient(apiKey,privateKey, {
  walletApi: {
    authorizationPrivateKey: authorizationPrivateKey
  }
  
});
export default privy;