"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountClient = void 0;
var smart_contracts_1 = require("@account-kit/smart-contracts");
var core_1 = require("@aa-sdk/core");
var infra_1 = require("@account-kit/infra");
var accounts_1 = require("viem/accounts");
exports.accountClient = await (0, smart_contracts_1.createModularAccountV2Client)({
    mode: "default", // optional param to specify the MAv2 variant (either "default" or "7702")
    chain: infra_1.sepolia,
    transport: (0, infra_1.alchemy)({ apiKey: "y9LZX5eLjx0bnwf7Z9t6X38DmUUD8zHz" }), // Get your API key at https://dashboard.alchemy.com/apps or http("RPC_URL") for non-alchemy infra
    signer: core_1.LocalAccountSigner.privateKeyToAccountSigner((0, accounts_1.generatePrivateKey)()),
});
console.log(exports.accountClient);
