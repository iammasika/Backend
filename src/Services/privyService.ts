import { PrivyClient } from '@privy-io/server-auth';
import privy from '../../lib/privyClient'

//create a function to create a new wallet
export const createWallet = async (userId: string) => {
  try {
    const wallet = await privy.createWallets({
        userId,
        });
    return wallet;
  } catch (error) {
    console.error('Error creating wallet:', error);
    throw error;
  }
};


