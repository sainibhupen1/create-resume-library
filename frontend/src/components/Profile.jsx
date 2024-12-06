import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState();

  const userapi = () => {
    const user = localStorage.getItem("learninglogin");
    const res = JSON.parse(user);
    setUser(res);
  };

  useEffect(() => {
    userapi();
  }, []);

  return (
    <div className="p-20 bg-green-50 h-screen flex justify-center items-center ">
      <div className="flex pt-4 pl-4 pb-4 pr-8 flex-col border-2 shadow-lg  border-blue-200 rounded-md">
        <h1 className="font-bold text-[25px] pb-5 text-red-700">
          User Information
        </h1>
        <div className="flex pb-3">
          <span className="font-bold text-[20px]">Name : </span>
          <p className="pl-2 pt-1 font-bold text-green-800">
            {user ? user.users.name : "Username"}
          </p>
        </div>

        <div className="flex">
          <span className="font-bold text-[20px]">Email : </span>
          <p className="pl-2 pt-1 font-bold text-green-800">
            {user ? user.users.email : "Email"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
