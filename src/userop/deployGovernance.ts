import {  createWalletClient, http, publicActions } from "viem";
import  { Hex} from "viem";
import { arbitrumSepolia , sepolia} from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";
import TBGovernor from "../../artifacts/contracts/Governor.sol/TBGovernor.json";
import dotenv from "dotenv";

dotenv.config();

const { abi,bytecode } = TBGovernor

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` );

(async () => {
  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const hash = await client.deployContract({
    abi,
    bytecode: `0x${bytecode}`,
  });

  const receipt = await client.getTransactionReceipt({ hash });
  console.log(receipt);
})();
