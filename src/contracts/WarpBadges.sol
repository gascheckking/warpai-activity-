// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WarpBadges is ERC721URIStorage, Ownable {
    uint256 public tokenId;

    constructor() ERC721("WarpBadges", "WARP") {}

    function mintBadge(address to, string memory uri) public onlyOwner {
        tokenId++;
        _mint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}
