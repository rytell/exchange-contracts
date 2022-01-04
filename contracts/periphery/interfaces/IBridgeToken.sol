pragma solidity >=0.5.0;

import "../../core/interfaces/IRytellERC20.sol";

interface IBridgeToken is IRytellERC20 {
    function swap(address token, uint256 amount) external;

    function swapSupply(address token) external view returns (uint256);
}
