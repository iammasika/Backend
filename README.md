# AA SDK Demo 🔗

A blockchain development stack featuring Account Abstraction (ERC-4337), smart contracts, and backend integration. Built with Hardhat, Alchemy AA SDK, and Express.

![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Hardhat](https://img.shields.io/badge/Hardhat-2.22.19-yellow)
![Alchemy SDK](https://img.shields.io/badge/Alchemy_SDK-3.8.0-orange)
![Prisma](https://img.shields.io/badge/Prisma-6.6.0-2D3748)

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Smart Contracts](#smart-contracts)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- ⚡ Account Abstraction with Alchemy AA SDK
- 🔐 Smart contract development & testing (Hardhat)
- 📡 REST API backend (Express)
- 🗄️ Database integration (Prisma)
- 🌐 IPFS integration (Pinata)
- 🔑 Auth solutions (Privy.io)
- 📜 Governance (Snapshot.js)
- 🔄 Upgradeable contracts (OpenZeppelin)

---

## Prerequisites
- Node.js v18+
- npm v9+
- PostgreSQL (or other Prisma-supported database)
- Alchemy API Key
- Pinata API Keys
- Ethereum RPC URL

---

## Installation

1. Clone repository:
```bash
git clone https://github.com/your-org/aa-sdk-demo.git
cd aa-sdk-demo   
```

2.Install dependencies
npm install

Set up Prisma:
npx prisma generate
npx prisma migrate dev

4.Install T-REX package:
npm install git+https://github.com/TokenySolutions/T-REX.git


5.Configuration
Create .env file in root directory:

# Core
PORT=3000
NODE_ENV=development

# Blockchain
ALCHEMY_API_KEY=your_key
PRIVATE_KEY=your_wallet_key
CHAIN_ID=11155111  # Sepolia

# IPFS
PINATA_API_KEY=your_key
PINATA_SECRET_API_KEY=your_secret

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Privy
PRIVY_APP_ID=your_app_id
PRIVY_SECRET=your_secret



Development
Start development server:

bash
npm run dev
Build project:

bash
npm run build
Start production server:

bash
npm start
Run Hardhat tasks:

bash
npx hardhat [task]
Deployment
Smart Contracts
Compile contracts:

bash
npx hardhat compile
Deploy to network:

bash
npx hardhat run scripts/deploy.ts --network sepolia

Server
Deploy the Express server to your preferred cloud provider (AWS, Vercel, etc.)
