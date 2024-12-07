import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async () => {
    let result = await fetch(
      "https://create-resume-library.onrender.com/register",
      {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem("learningsignup", JSON.stringify(result));
    if (result.success) {
      toast.success(result.message);
      navigate("/login");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-20 xl:p-24 flex bg-gray-100 items-center justify-center w-full h-screen">
      <form className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg border border-red-100 rounded-md flex flex-col gap-5 p-8">
        <div>
          <Input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="border-green-700 focus-visible:ring-transparent my-2"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@gmail.com"
            className="border-green-700 focus-visible:ring-transparent my-2"
          />
        </div>

        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-green-700 focus-visible:ring-transparent my-2"
          />
        </div>

        <Button
          type="button"
          onClick={submitHandler}
          className="bg-blue-700 hover:bg-blue-950 text-white"
        >
          Sign Up
        </Button>

        <span className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
