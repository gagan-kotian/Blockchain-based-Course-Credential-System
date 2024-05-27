import { useState } from "react";
import BigNumber from "bignumber.js";
import { useParams } from "react-router-dom";

const Memos = ({ state }) => {
  const [name, setName] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState("");
  const { contract } = state;
  const { courseId } = useParams();
  console.log(courseId); // Extract courseId from URL parameters

  const retrieveFavoriteNumber = async (id) => {
    // Modify function to accept id parameter
    try {
      if (contract) {
        console.log("Hi");
        const favoriteNumberBigNumber = new BigNumber(
          await contract.retrieve(name, id) // Pass id to contract's retrieve function
        ); // Create BigNumber object
        const favoriteNumber = favoriteNumberBigNumber.toNumber();
        console.log("Favorite number from contract:", favoriteNumber);
        setFavoriteNumber(favoriteNumber);
      }
    } catch (error) {
      console.error("Error fetching favorite number:", error);
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await retrieveFavoriteNumber(courseId);
  };

  return (
    <div className="container mx-auto mt-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Marks
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            className="block w-full mr-2 px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={handleChange}
            placeholder="Enter USN"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!contract || !name}
          >
            Retrieve
          </button>
        </div>
      </form>
      {favoriteNumber !== "" && (
        <div className="text-center text-gray-800">
          <p>
            Credits of <strong>{name}</strong>: {favoriteNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default Memos;
