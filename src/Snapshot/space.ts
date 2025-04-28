import {client} from "./client";
import { Web3Provider } from '@ethersproject/providers';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const web3 = new Web3Provider((window as any).ethereum);
(async () => {
    const [account] = await web3.listAccounts();
    // Your code here
})();



//function to create or edit a space
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const createSpace = async (web3: Web3Provider | Wallet, account: string, space: any) => {
    const receipt = await client.space(web3, account, {
        "space":"pistachiodao.eth",
        "settings": `{
          "name":"pistachiodao.eth",
          "avatar":"", // IPFS address of space avatar
          "about":"",
          "network":"1",
          "symbol":"XYZ",
          "website": "",
          "twitter": "",
          "github": "",
          "coingecko": "",
          "domain":"", // custom domain address
          "skin":"", // custom skin when custom domain is set
          "guidelines":"", // guidelines for proposal creation
          "template":"", // template for new proposals
          "private": false, // visibility in the space list
          "moderators":[], //  list of space Moderators
          "members": [], // list of Authors
          "admins":[],
          "categories":[
            "social",
            "media"
          ],
          "plugins":{
            "hal":{}
          },
          "parent":"", // main space ID
          "children":[], // list of sub-spaces
          "voting": {
            "delay":0, // voting delay in seconds
            "hideAbstain":false,
            "period":0, // voting duration in seconds
            "quorum":0,
            "type":"", // define the default voting system
            "privacy":"" // pass "shutter" for shielded voting
          },
          "strategies":[{
            "name":"ticket",
            "network":"1",
            "params":{"symbol":"TICKET"}
          }], // provide up to 8 strategies with their configuration
          "validation":{
            "name":"basic",
            "params":{}
          }, // provide one proposal validation strategy
          "filters":{
            "onlyMembers": false // enable Authors only to create proposals
          }, 
          "voteValidation":{
            "name":"any",
            "params":{}
          }, // provide one voting validation strategy
          "treasuries":[] // provide the organization's treasury account(s)
          }`
      });
}

//Join a space

const joinSpace = async (web3: Web3Provider | Wallet, account: string, spaceId: string) => {
    const receipt = await client.follow(web3, account, {
        "space":"pistachiodao.eth"
      })
}


