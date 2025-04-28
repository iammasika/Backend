import {  createWalletClient, http, publicActions } from "viem";
import  type { Hex} from "viem";
import { arbitrumSepolia , sepolia} from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

import  TheBeing  from "../../artifacts/contracts/NFT.sol/TheBeing.json";
import dotenv from "dotenv";
import { getContract } from 'viem'
dotenv.config();

const { abi, bytecode } = TheBeing;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` );


  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

// 1. Create contract instance
const contract = getContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi,
  
  // 1b. Or public and/or wallet clients
  client: { public: client , wallet: client }
})

  // deployNft function
  const deployNFT = async () => {
    
  const hash = await client.deployContract({
    abi,
    bytecode: `0x${bytecode}`,
  });

  const receipt = await client.getTransactionReceipt({ hash });
  console.log(receipt);

  };

  
  // initialize the nft contract address defaultAdmin, address pauser, address minter, address upgrader
  const initializeNFT = async (defaultAdmin:Hex, pauser: Hex, minter:Hex, upgrader: Hex) => {
    
    const tx = await client.writeContract({
      ...contract,
      functionName: "initialize",
      args: [defaultAdmin, pauser, minter, upgrader],
    });

    const receipt = await client.getTransactionReceipt({ hash: tx });
    console.log(receipt);
  }


  // mintNFT function
  const mintNFT = async ( to: Hex, tokenId: number) => {

    const tx = await client.writeContract({
      ...contract,
      functionName: "safeMint",
      args: [to, tokenId],
    });

    const receipt = await client.getTransactionReceipt({ hash: tx });
    console.log(receipt);
  };



