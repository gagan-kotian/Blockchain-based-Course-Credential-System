import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import abi from "./contract/SimpleStorage.json";
import { Courses } from "./components/Courses";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xcB6a5D6D6f4aF686d146431a0b153C6a81271942";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <Router>
      <div className="bg-purple-900 min-h-screen flex flex-col items-center justify-center text-white">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Course Credential App
          </h1>
          <Routes>
            <Route path="/" exact element={<Courses />} />
            <Route path="/home/:courseId" element={<Home state={state} />} />
            <Route path="/memos/:courseId" element={<Memos state={state} />} />
            <Route path="/buy/:courseId" element={<Buy state={state} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = ({ state }) => {
  const { courseId } = useParams();

  const navigate = useNavigate();

  const navigateToMemos = () => {
    navigate(`/memos/${courseId}`);
  };

  const navigateToBuy = () => {
    navigate(`/buy/${courseId}`);
  };

  return (
    <div className="flex justify-center space-x-4 mt-10">
      <button
        onClick={navigateToMemos}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-xl"
      >
        Student
      </button>
      <button
        onClick={navigateToBuy}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded text-xl"
      >
        Institute
      </button>
    </div>
  );
};

export default App;
