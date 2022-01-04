pragma solidity =0.5.16;

import "../RytellERC20.sol";

contract ERC20 is RytellERC20 {
    constructor(uint256 _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
