import React from "react";
import { Outlet } from "react-router-dom";
import book from "../../public/booklib.webp";
import resume from "../../public/resimg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const authlogin = localStorage.getItem("learninglogin");

  return (
    <div className="flex flex-col lg:flex-row p-10 bg-green-50 min-h-screen justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
      {/* Book Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
        <img src={book} alt="book" className="w-40 h-auto sm:w-52" />
        <Link
          // to="/addbooks"
          to={authlogin ? "/addbooks" : "/"}
          className="text-lg sm:text-xl font-bold text-blue-700 underline hover:text-blue-950"
        >
          Add Book
        </Link>
      </div>

      {/* Resume Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4">
        <img src={resume} alt="resume" className="w-36 h-auto sm:w-44" />
        <Link
          to={authlogin ? "/createresume" : "/"}
          className="text-lg sm:text-xl font-bold text-blue-700 underline hover:text-blue-950"
        >
          Create Resume
        </Link>
      </div>
    </div>
  );
};

export default Home;
