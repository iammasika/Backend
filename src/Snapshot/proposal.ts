import { Web3Provider } from '@ethersproject/providers';
import { client } from './client';
import type { Wallet } from '@ethersproject/wallet';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const web3 = new Web3Provider((window as any).ethereum);
(async () => {
    const [account] = await web3.listAccounts();
    // Your code here
})();

//function to create a proposal
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const createProposal = async (web3: Web3Provider | Wallet, account: string, proposal: any) => {
    
    const receipt = await client.proposal(web3, account, {
        space: 'yam.eth', // your space id
        type: 'single-choice', // define the voting system
        title: 'Test proposal using Snapshot.js',
        body: 'This is the content of the proposal',
        choices: ['Alice', 'Bob', 'Carol'],
        start: 1636984800, // change it according to your space settings
        end: 1637244000, // change it according to your space settings
        snapshot: 13620822, // Use a latest block
        plugins: JSON.stringify({}),
        labels: [],
        privacy: '', // Either '' or 'shutter'
        app: 'my-app' // provide the name of your project which is using this snapshot.js integration
        ,
        discussion: ''
    });
}


//function to vote on a proposal

const voteOnProposal = async (web3: Web3Provider | Wallet, account: string, proposalId: string, choice: number) => {
    const receipt = await client.vote(web3, account, {
        space: 'yam.eth',
        proposal: proposalId,
        type: 'single-choice',
        choice: choice,
        reason: 'Choice 1 make lot of sense',
        app: 'my-app'
    });
}


//function to cancel a proposal

const cancelProposal = async (web3: Web3Provider | Wallet, account: string, proposalId: string) => {
    const receipt = await client.cancelProposal(web3, account, {
        space: 'yam.eth',
        proposal: proposalId,
    });
}


