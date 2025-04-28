// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/contracts/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/contracts/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

/**
 * @title Quadratic Voting Contract
 * @dev Implements a quadratic voting system where users can vote on options using an ERC20 token.
 * Each user has a budget of tokens to spend, and the cost of voting increases quadratically.
 */
contract QuadraticVoting {
    ERC721Upgradeable public voterNFT;
    ERC20Upgradeable public votingToken;

    uint256[] public tokenIds; // List of token IDs for the NFT holders


    // Track votes per voter and option (scaled by 1e18 for decimals)
    mapping(uint256 => mapping(uint256 => uint256)) public votes; // [voterTokenId][optionId] => votes
    mapping(uint256 => uint256) public spentBudget; // [voterTokenId] => tokens spent

    // Voting options (e.g., 0 = Option A, 1 = Option B)
    uint256 public constant BUDGET_PER_VOTER = 100 * 1e18; // 100 tokens with 18 decimals
    uint256 public constant VOTE_SCALE = 1e18; // For fractional votes (1e18 = 1 vote)

    constructor(address _voterNFT, address _votingToken) {
        voterNFT = IERC721Upgradeable(_voterNFT);
        votingToken = IERC20Upgradeable(_votingToken);
    }

    // Submit fractional votes (e.g., 1.5 votes = 1.5e18)
    function vote(uint256 voterTokenId, uint256 optionId, uint256 voteAmount) external {
        require(voterNFT.ownerOf(voterTokenId) == msg.sender, "Not NFT owner");
        
        // Calculate cost: (votes)^2 (scaled by 1e18)
        uint256 cost = (voteAmount * voteAmount) / VOTE_SCALE;

        // Check remaining budget
        require(spentBudget[voterTokenId] + cost <= BUDGET_PER_VOTER, "Exceeds budget");
         
        // Check if the user has enough tokens
        require(votingToken.balanceOf(msg.sender) >= cost, "Insufficient tokens");
        require(votingToken.allowance(msg.sender, address(this)) >= cost, "Allowance too low");
        // Check if the user has already voted for this option
        
        require(votes[voterTokenId][optionId] + voteAmount <= BUDGET_PER_VOTER, "Exceeds option budget");
         if (votes[voterTokenId][optionId] == 0) {
        tokenIds.push(voterTokenId);
    }
        // Update votes and budget
        votes[voterTokenId][optionId] += voteAmount;
        spentBudget[voterTokenId] += cost;

        // Transfer tokens (if using ERC-20)
        votingToken.transferFrom(msg.sender, address(this), cost);
    }

    // Tally votes for an option (sum all votes)
    function getTotalVotes(uint256 optionId) public view returns (uint256) {
        uint256 total;
        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 voterTokenId = tokenIds[i];
            total += votes[voterTokenId][optionId]; // Sum votes for the option
        }
        return total / VOTE_SCALE; // Return unscaled result
    }

    // Get the total votes for a specific voter
    function getVotesByVoter(uint256 voterTokenId, uint256 optionId) public view returns (uint256) {
        return votes[voterTokenId][optionId] / VOTE_SCALE; // Return unscaled result
    }
    // Get the total spent budget for a specific voter
    function getSpentBudget(uint256 voterTokenId) public view returns (uint256) {
        return spentBudget[voterTokenId] / VOTE_SCALE; // Return unscaled result
    }
}