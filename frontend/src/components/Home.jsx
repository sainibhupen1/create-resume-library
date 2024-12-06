import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-20 bg-green-50 h-screen flex justify-center items-center">
      <div>
        <h1 className=" text-[50px] font-bold text-blue-600">
          {" "}
          Hello My Dear Friend's{" "}
        </h1>
        <br />
        <span className="text-[30px] font-bold text-orange-600">
          WelCome 🙏 To My Learning Website ❤️
        </span>
      </div>
    </div>
  );
};

export default Home;
