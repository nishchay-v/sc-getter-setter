pragma solidity 0.8.4;

contract SimpleStorage {
    uint x;

    function get() public view returns (uint) {
        return x;
    }
    function set(uint y) public{
        x = y;
    }
}