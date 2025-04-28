import { createModularAccountV2Client } from "@account-kit/smart-contracts";
import { LocalAccountSigner } from "@aa-sdk/core";
import { sepolia, alchemy } from "@account-kit/infra";
import { generatePrivateKey } from "viem/accounts";
import dotenv from 'dotenv';
import type { Hex } from "viem";
// Load environment variables
dotenv.config();
const api=process.env.API_KEY as string;
const key= process.env.PRIVATE_KEY as Hex;
 const accountClient=async()=>{
    const accountClient = await createModularAccountV2Client({
        mode: "default", // optional param to specify the MAv2 variant (either "default" or "7702")
        chain: sepolia,
        transport: alchemy({ apiKey: api }), // Get your API key at https://dashboard.alchemy.com/apps or http("RPC_URL") for non-alchemy infra
        signer: LocalAccountSigner.privateKeyToAccountSigner(key),
    });

    return accountClient;
}

export default accountClient;
