import {  createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'
import { eip7702Actions } from 'viem/experimental'
import dotenv from 'dotenv';
import type { Hex } from 'viem';
dotenv.config();


export const walletClient = createWalletClient({
  account: privateKeyToAccount(process.env.PRIVATE_KEY as Hex),
  chain: mainnet,
  transport: http(),
}).extend(eip7702Actions())