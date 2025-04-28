import {  createWalletClient, http, publicActions, toBytes } from "viem";
import { getContract } from 'viem'
import type { Hex} from "viem";
import {  sepolia} from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import MyToken from "../../artifacts/contracts/ERC1155.sol/MyToken.json";
import dotenv from "dotenv";
import { PinataSDK } from "pinata";


dotenv.config();

const { abi,bytecode } = MyToken;



const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "example-gateway.mypinata.cloud",
});



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


  // deployCollection function
  const deployCollection = async () => {
    const hash = await client.deployContract({
      abi,
      bytecode: `0x${bytecode}`,
      args: [],
    });

    const receipt = await client.getTransactionReceipt({ hash });
    console.log(receipt);
  }


  // initialize the collection contract address defaultAdmin, address pauser, address minter, address upgrader
  const initializeCollection = async (defaultAdmin : Hex, pauser: Hex, minter: Hex, upgrader: Hex) => {
    const tx = await client.writeContract({
      ...contract,
      functionName: "initialize",
      args: [defaultAdmin, pauser, minter, upgrader],
    });

    const receipt = await client.getTransactionReceipt({ hash: tx });
    console.log(receipt);
  }

  // mintCollection function
  const mintCollection = async ( to: Hex, tokenId: number, amount: number ,data: JSON) => {

   //Uploading  ipfs data
    const upload = await pinata.upload.public.json(data);
    console.log(upload); // collection info
    const tx = await client.writeContract({
      ...contract,
      functionName: "mint",
      args: [to, tokenId, amount, toBytes(upload.cid)],
    });

    const receipt = await client.getTransactionReceipt({ hash: tx });
    console.log(receipt);
  }

  const mintBatch = async (to: Hex, ids : [], amounts: [], data: JSON) => {
    const upload = await pinata.upload.public.json(data);
    console.log(upload.cid); // collection info
    const tx = await client.writeContract({
      ...contract,
      functionName: "mintBatch",
      args:[to, ids,amounts,toBytes(upload.cid)],
    });

    const receipt = await client.getTransactionReceipt({ hash: tx });
    console.log(receipt);
  }
