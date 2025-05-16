// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract WarpPoints {
    mapping(address => uint256) public xp;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function claimXP(uint256 amount) public {
        xp[msg.sender] += amount;
    }

    function getXP(address user) public view returns (uint256) {
        return xp[user];
    }
}
