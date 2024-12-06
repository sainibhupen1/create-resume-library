import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateResume = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    mobilenumber: "",
    email: "",
    city: "",
    state: "",
    aboutme: "",
    collegename: "",
    colcity: "",
    colstate: "",
    colcgpa: "",
    colfield: "",
    colfieldbranch: "",
    colyear: "",
    schoolname12: "",
    city12: "",
    state12: "",
    boardname12: "",
    percentage12: "",
    schoolname10: "",
    city10: "",
    state10: "",
    boardname10: "",
    percentage10: "",
    projectname1: "",
    p1gitlink: "",
    p1skills: [],
    p1about: "",
    projectname2: "",
    p2gitlink: "",
    p2skills: [],
    p2about: "",
    frontend: [],
    backend: [],
    database: [],
    others: [],
    companynamecet: [],
    fieldcet: [],
    language: [],
  });

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "mobilenumber",
      "colcgpa",
      "colyear",
      "percentage12",
      "percentage10",
    ];
    const multiValueFields = [
      "p1skills",
      "p2skills",
      "backend",
      "frontend",
      "database",
      "others",
      "companynamecet",
      "fieldcet",
      "language",
    ];

    setInput((prevInput) => ({
      ...prevInput,
      [name]: numericFields.includes(name)
        ? value === ""
          ? ""
          : parseFloat(value) || 0
        : multiValueFields.includes(name)
        ? value.split(",")
        : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/createresume", {
      method: "post",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (result) {
      toast.success(result.message);
      navigate("/resume");
    } else {
      toast.success(result.message);
    }
  };

  return (
    <div className="p-20 flex justify-center">
      <div className="border-2 shadow-lg  border-red-100 rounded-md w-[70%] h-full">
        <form>
          <div className="flex justify-center items-center mt-6 mb-14 ">
            <h1 className="pt-2 pb-2 pl-16 pr-16   rounded-lg  bg-[#ab91db] hover:bg-blue-900 font-bold text-[24px]">
              Users Information
            </h1>
          </div>
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            About Yourself
          </h2>
          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%] ">
              UserName :
            </span>
            <Input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              placeholder="Enter Your Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%] ">
              MobileNumber :
            </span>
            <Input
              type="number"
              name="mobilenumber"
              value={input.mobilenumber}
              onChange={changeEventHandler}
              placeholder="Mobile Number"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Email :</span>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="saini@gmail.com"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">City :</span>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
              placeholder="Dausa/jaipur"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">State :</span>
            <Input
              type="text"
              name="state"
              value={input.state}
              onChange={changeEventHandler}
              placeholder="Rajasthan/Delhi"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            About Yourself
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              About-Yourself :
            </span>
            <Input
              type="text"
              name="aboutme"
              value={input.aboutme}
              onChange={changeEventHandler}
              placeholder="50-100/words"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            College-Information
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              CollegeName :
            </span>
            <Input
              type="text"
              name="collegename"
              value={input.collegename}
              onChange={changeEventHandler}
              placeholder="Enter Your College Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              College-City :
            </span>
            <Input
              type="text"
              name="colcity"
              value={input.colcity}
              onChange={changeEventHandler}
              placeholder="Dausa/jaipur"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              College-State :
            </span>
            <Input
              type="text"
              name="colstate"
              value={input.colstate}
              onChange={changeEventHandler}
              placeholder="Rajasthan/delhi"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              College-CGPA :
            </span>
            <Input
              type="number"
              name="colcgpa"
              value={input.colcgpa}
              onChange={changeEventHandler}
              placeholder="0.0"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Branch :</span>
            <Input
              type="text"
              name="colfield"
              value={input.colfield}
              onChange={changeEventHandler}
              placeholder="BCA/MCA/B.Tech/MBA"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Spelization :
            </span>
            <Input
              type="text"
              name="colfieldbranch"
              value={input.colfieldbranch}
              onChange={changeEventHandler}
              placeholder="General/etc."
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Passing-Year :
            </span>
            <Input
              type="number"
              name="colyear"
              value={input.colyear}
              onChange={changeEventHandler}
              placeholder="2021-2024"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            School Information-12
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-Name-12 :
            </span>
            <Input
              type="text"
              name="schoolname12"
              value={input.schoolname12}
              onChange={changeEventHandler}
              placeholder=" School-Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-City :
            </span>
            <Input
              type="text"
              name="city12"
              value={input.city12}
              onChange={changeEventHandler}
              placeholder="Dausa/jaipur"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-State :
            </span>
            <Input
              type="text"
              name="state12"
              value={input.state12}
              onChange={changeEventHandler}
              placeholder="Jaipur/delhi"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Board-Name :
            </span>
            <Input
              type="text"
              name="boardname12"
              value={input.boardname12}
              onChange={changeEventHandler}
              placeholder="RBSE/CBSE"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Percentage :
            </span>
            <Input
              type="number"
              name="percentage12"
              value={input.percentage12}
              onChange={changeEventHandler}
              placeholder="0.0"
              className="ml-4 w-[50%]"
            />
          </div>

          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            School Information-10
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-Name-10 :
            </span>
            <Input
              type="text"
              name="schoolname10"
              value={input.schoolname10}
              onChange={changeEventHandler}
              placeholder="School-Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-City :
            </span>
            <Input
              type="text"
              name="city10"
              value={input.city10}
              onChange={changeEventHandler}
              placeholder="Dausa/jaipur"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              School-State :
            </span>
            <Input
              type="text"
              name="state10"
              value={input.state10}
              onChange={changeEventHandler}
              placeholder="Rajasthan/delhi"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Board-Name :
            </span>
            <Input
              type="text"
              name="boardname10"
              value={input.boardname10}
              onChange={changeEventHandler}
              placeholder="RBSE/CBSE"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Percentage :
            </span>
            <Input
              type="number"
              name="percentage10"
              value={input.percentage10}
              onChange={changeEventHandler}
              placeholder="0.0"
              className="ml-4 w-[50%]"
            />
          </div>

          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            Project Information-1
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Project-Name1 :
            </span>
            <Input
              type="text"
              name="projectname1"
              value={input.projectname1}
              onChange={changeEventHandler}
              placeholder="Project-Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Github-Link-P1 :
            </span>
            <Input
              type="text"
              name="p1gitlink"
              value={input.p1gitlink}
              onChange={changeEventHandler}
              placeholder="http://com."
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Skills-P1 :
            </span>
            <Input
              type="text"
              name="p1skills"
              value={input.p1skills}
              onChange={changeEventHandler}
              placeholder="HTML,CSS,JS"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">About-P1 :</span>
            <Input
              type="text"
              name="p1about"
              value={input.p1about}
              onChange={changeEventHandler}
              placeholder="10-50/words"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            Project Information-2
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Project-Name2 :
            </span>
            <Input
              type="text"
              name="projectname2"
              value={input.projectname2}
              onChange={changeEventHandler}
              placeholder="project-Name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Github-Link-P2 :
            </span>
            <Input
              type="text"
              name="p2gitlink"
              value={input.p2gitlink}
              onChange={changeEventHandler}
              placeholder="http://com."
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Skills-P2 :
            </span>
            <Input
              type="text"
              name="p2skills"
              value={input.p2skills}
              onChange={changeEventHandler}
              placeholder="HTML,CSS,JS"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">About-P2 :</span>
            <Input
              type="text"
              name="p2about"
              value={input.p2about}
              onChange={changeEventHandler}
              placeholder="10-50/words"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            Your Skills Information
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Frontend :</span>
            <Input
              type="text"
              name="frontend"
              value={input.frontend}
              onChange={changeEventHandler}
              placeholder="HTML,CSS,JS"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Backend :</span>
            <Input
              type="text"
              name="backend"
              value={input.backend}
              onChange={changeEventHandler}
              placeholder="NODE js/EXPRESS.js"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Database :</span>
            <Input
              type="text"
              name="database"
              value={input.database}
              onChange={changeEventHandler}
              placeholder="MongoDB/NoSql"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Others :</span>
            <Input
              type="text"
              name="others"
              value={input.others}
              onChange={changeEventHandler}
              placeholder="GIT/GITHUB"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            Your Complete Certificate Information
          </h2>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              Company-Name-Cti :
            </span>
            <Input
              type="text"
              name="companynamecet"
              value={input.companynamecet}
              onChange={changeEventHandler}
              placeholder="company-name"
              className="ml-4 w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">
              CTI-Field :
            </span>
            <Input
              type="text"
              name="fieldcet"
              value={input.fieldcet}
              onChange={changeEventHandler}
              placeholder="Field of certificate"
              className="ml-4 w-[50%]"
            />
          </div>
          <hr className="border-1 border-black ml-10 mr-10 mt-4 mb-4" />
          <h2 className="ml-20 underline mb-6 font-medium text-blue-500 ">
            Language
          </h2>
          <div className="flex justify-center items-center m-4">
            <span className="font-medium text-[18px]  w-[25%]">Language :</span>
            <Input
              type="text"
              name="language"
              value={input.language}
              onChange={changeEventHandler}
              // onChange={(e) =>
              //   setInput({ ...input, cuisines: e.target.value.split(",") })
              // }
              placeholder="Hindi,English"
              className="ml-4 w-[50%]"
            />
          </div>
          <div className="flex justify-center items-center mt-16 mb-6 ">
            <Button
              onClick={submitHandler}
              className="w-[50%] bg-blue-600 hover:bg-blue-900 font-bold"
            >
              Create Resume
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateResume;