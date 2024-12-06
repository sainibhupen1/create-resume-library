import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "./ui/toast";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async () => {
    // console.log(name, email, password);

    let result = await fetch(
      "https://create-resume-library.onrender.com/login",
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();

    localStorage.setItem("learninglogin", JSON.stringify(result));

    if (result.success) {
      toast.success(result.message);
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className=" flex bg-gray-100 items-center justify-center w-max-7xl h-screen">
      <form className="w-1/3  shadow-lg border border-red-100 rounded-md flex flex-col gap-5 p-8">
        <div>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email@gmail.com"
            className="border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <div>
          <Input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-green-700 focus-visible:ring-transparent my-2 "
          />
        </div>

        <Button
          type="button"
          onClick={submitHandler}
          className="bg-blue-700 hover:bg-blue-950"
        >
          Log In
        </Button>
        <span className="text-center">
          Dosen't have an acount?{" "}
          <Link to="/signup" className="text-blue-700">
            SignUp
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
