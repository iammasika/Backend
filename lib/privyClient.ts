import {PrivyClient} from '@privy-io/server-auth';
import dotenv from "dotenv";

dotenv.config();

 const privy = new PrivyClient('cm9ptz8aw003fl10ntm31980p', '5ptU3iaxhnCvnmhx5x2oun1d4gxYQoJZjkzjt8GBbjxpoCcQPZJ8JK7kkrmex3wymtzpnDMueHyeKX5TVBJEziBh', {
  walletApi: {
    authorizationPrivateKey: 'insert-your-authorization-private-key-from-the-dashboard'
  }
  
});
export default privy;