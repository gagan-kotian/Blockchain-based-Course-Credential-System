import { useState } from "react";

import { useParams } from "react-router-dom";

const Buy = ({ state }) => {
  const { courseId } = useParams(); // Extract courseId from URL parameters
  const [name, setName] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState("");

  const addPerson = async (event) => {
    event.preventDefault();
    const { contract } = state;
    try {
      await contract.addPerson(courseId, name, parseInt(favoriteNumber)); // Pass courseId as id

      setName("");
      setFavoriteNumber("");
      console.log("Person added successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 w-1/2">
      <form
        onSubmit={addPerson}
        className="space-y-4 p-8 rounded-lg shadow-md"
        style={{ backgroundColor: "#F3F4F6" }} // Match background color here
      >
        <div>
          <label className="block text-gray-700">USN</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter  USN"
          />
        </div>
        <div>
          <label className="block text-gray-700">Total Credits</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:border-blue-500"
            value={favoriteNumber}
            onChange={(e) => setFavoriteNumber(e.target.value)}
            placeholder="Enter Total marks"
          />
        </div>

        <button
          type="submit"
          className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!state.contract}
        >
          Store
        </button>
      </form>
    </div>
  );
};

export default Buy;
