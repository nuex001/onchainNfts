// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract TESTNFT is ERC721URIStorage {
    address private immutable i_owner;
    using Strings for uint256;
    uint256 public _tokenId;

    constructor() ERC721("TESTNFT", "TNT") {
        i_owner = msg.sender;
    }

    function getTokenURL(uint256 tokenId) public pure returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name":"TESTNFT #',
            tokenId.toString(),
            '",',
            '"description":"NFT ONCHAIN CONTRACT JUST FOR FUN",',
            '"image":"https://ipfs.io/ipfs/QmRYVWdEQoWYhU2rp5QEXUujZCE4kyvTFU9EEeFSwW77uX"',
            "}"
        );

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    function mint() public {
        _tokenId++;
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, getTokenURL(_tokenId));
    }

    function getCurrentTokenId() public view returns (uint256) {
        return _tokenId;
    }
}
