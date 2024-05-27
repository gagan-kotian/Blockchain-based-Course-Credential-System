import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/home/${courseId}`);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Course Page</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleCourseClick(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Blockchain
        </button>
        <button
          onClick={() => handleCourseClick(2)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Devops
        </button>
        <button
          onClick={() => handleCourseClick(3)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Web Development
        </button>
      </div>
    </div>
  );
};

export { Courses };
