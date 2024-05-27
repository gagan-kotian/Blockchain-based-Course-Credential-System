pragma solidity ^0.8.7;

contract SimpleStorage {
  struct People {
    string id;
    uint256 favoriteNumber;
    string name;
  }

  People[] public people;

  mapping(string => mapping(string => uint256)) public favoriteNumberByNameAndId;

  function retrieve(string memory _name, string memory _id) public view returns (uint256){
    return favoriteNumberByNameAndId[_name][_id];
  }

  function addPerson(string memory _id, string memory _name, uint256 _favoriteNumber) public {
    people.push(People(_id, _favoriteNumber, _name));
    favoriteNumberByNameAndId[_name][_id] = _favoriteNumber;
  }
}
