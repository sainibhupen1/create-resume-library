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

    const res = await fetch(
      "https://create-resume-library.onrender.com/createresume",
      {
        method: "post",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await res.json();

    if (result) {
      toast.success(result.message);
      navigate("/resume");
    } else {
      toast.success(result.message);
    }
  };

  return (
    <div className="p-4 sm:p-8 lg:p-16 flex justify-center">
      <div className="border-2 shadow-lg border-red-100 rounded-md w-full lg:w-[70%] h-full">
        <form onSubmit={submitHandler}>
          <div className="flex justify-center items-center mt-6 mb-14">
            <h1 className="pt-2 pb-2 pl-6 pr-6 rounded-lg bg-[#ab91db] hover:bg-blue-900 font-bold text-[24px]">
              Users Information
            </h1>
          </div>

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            About Yourself
          </h2>

          {/* Input Fields */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              UserName :
            </span>
            <Input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              placeholder="Enter Your Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              MobileNumber :
            </span>
            <Input
              type="number"
              name="mobilenumber"
              value={input.mobilenumber}
              onChange={changeEventHandler}
              placeholder="Mobile Number"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Email :
            </span>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="saini@gmail.com"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              City :
            </span>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
              placeholder="Dausa/Jaipur"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              State :
            </span>
            <Input
              type="text"
              name="state"
              value={input.state}
              onChange={changeEventHandler}
              placeholder="Rajasthan/Delhi"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Section Divider */}
          <hr className="border-1 border-black mx-6 mt-4 mb-4" />

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            College Information
          </h2>

          {/* College Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              College Name :
            </span>
            <Input
              type="text"
              name="collegename"
              value={input.collegename}
              onChange={changeEventHandler}
              placeholder="Enter Your College Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              College City :
            </span>
            <Input
              type="text"
              name="colcity"
              value={input.colcity}
              onChange={changeEventHandler}
              placeholder="College City"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              College State :
            </span>
            <Input
              type="text"
              name="colstate"
              value={input.colstate}
              onChange={changeEventHandler}
              placeholder="College State"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              College CGPA :
            </span>
            <Input
              type="number"
              name="colcgpa"
              value={input.colcgpa}
              onChange={changeEventHandler}
              placeholder="CGPA"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Field of Study :
            </span>
            <Input
              type="text"
              name="colfield"
              value={input.colfield}
              onChange={changeEventHandler}
              placeholder="Field of Study"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Section Divider */}
          <hr className="border-1 border-black mx-6 mt-4 mb-4" />

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            12th School Information
          </h2>

          {/* 12th School Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              School Name :
            </span>
            <Input
              type="text"
              name="schoolname12"
              value={input.schoolname12}
              onChange={changeEventHandler}
              placeholder="Enter Your 12th School Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              City (12th) :
            </span>
            <Input
              type="text"
              name="city12"
              value={input.city12}
              onChange={changeEventHandler}
              placeholder="City"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              State (12th) :
            </span>
            <Input
              type="text"
              name="state12"
              value={input.state12}
              onChange={changeEventHandler}
              placeholder="State"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Board Name (12th) :
            </span>
            <Input
              type="text"
              name="boardname12"
              value={input.boardname12}
              onChange={changeEventHandler}
              placeholder="Board Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Percentage (12th) :
            </span>
            <Input
              type="number"
              name="percentage12"
              value={input.percentage12}
              onChange={changeEventHandler}
              placeholder="Percentage"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Section Divider */}
          <hr className="border-1 border-black mx-6 mt-4 mb-4" />

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            10th School Information
          </h2>

          {/* 10th School Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              School Name (10th) :
            </span>
            <Input
              type="text"
              name="schoolname10"
              value={input.schoolname10}
              onChange={changeEventHandler}
              placeholder="Enter Your 10th School Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              City (10th) :
            </span>
            <Input
              type="text"
              name="city10"
              value={input.city10}
              onChange={changeEventHandler}
              placeholder="City"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              State (10th) :
            </span>
            <Input
              type="text"
              name="state10"
              value={input.state10}
              onChange={changeEventHandler}
              placeholder="State"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Board Name (10th) :
            </span>
            <Input
              type="text"
              name="boardname10"
              value={input.boardname10}
              onChange={changeEventHandler}
              placeholder="Board Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Percentage (10th) :
            </span>
            <Input
              type="number"
              name="percentage10"
              value={input.percentage10}
              onChange={changeEventHandler}
              placeholder="Percentage"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Section Divider */}
          <hr className="border-1 border-black mx-6 mt-4 mb-4" />

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            Projects
          </h2>

          {/* Project 1 */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Project 1 Name :
            </span>
            <Input
              type="text"
              name="projectname1"
              value={input.projectname1}
              onChange={changeEventHandler}
              placeholder="Project 1 Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              GitHub Link (Project 1) :
            </span>
            <Input
              type="text"
              name="p1gitlink"
              value={input.p1gitlink}
              onChange={changeEventHandler}
              placeholder="GitHub Link"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Skills (Project 1) :
            </span>
            <Input
              type="text"
              name="p1skills"
              value={input.p1skills.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              About (Project 1) :
            </span>
            <Input
              type="text"
              name="p1about"
              value={input.p1about}
              onChange={changeEventHandler}
              placeholder="About the project"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Project 2 */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Project 2 Name :
            </span>
            <Input
              type="text"
              name="projectname2"
              value={input.projectname2}
              onChange={changeEventHandler}
              placeholder="Project 2 Name"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              GitHub Link (Project 2) :
            </span>
            <Input
              type="text"
              name="p2gitlink"
              value={input.p2gitlink}
              onChange={changeEventHandler}
              placeholder="GitHub Link"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Skills (Project 2) :
            </span>
            <Input
              type="text"
              name="p2skills"
              value={input.p2skills.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              About (Project 2) :
            </span>
            <Input
              type="text"
              name="p2about"
              value={input.p2about}
              onChange={changeEventHandler}
              placeholder="About the project"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Skills Section */}
          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            Skills
          </h2>

          {/* Frontend Skills */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Frontend Skills :
            </span>
            <Input
              type="text"
              name="frontend"
              value={input.frontend.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated frontend skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Backend Skills */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Backend Skills :
            </span>
            <Input
              type="text"
              name="backend"
              value={input.backend.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated backend skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Database Skills */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Database Skills :
            </span>
            <Input
              type="text"
              name="database"
              value={input.database.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated database skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Other Skills */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Other Skills :
            </span>
            <Input
              type="text"
              name="others"
              value={input.others.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated other skills"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Section Divider */}
          <hr className="border-1 border-black mx-6 mt-4 mb-4" />

          <h2 className="ml-4 sm:ml-8 underline mb-6 font-medium text-blue-500">
            Certifications
          </h2>

          {/* Company Certifications */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Company Certifications :
            </span>
            <Input
              type="text"
              name="companynamecet"
              value={input.companynamecet.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated company certifications"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Field Certifications */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Field Certifications :
            </span>
            <Input
              type="text"
              name="fieldcet"
              value={input.fieldcet.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated field certifications"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          {/* Language Certifications */}
          <div className="flex flex-col sm:flex-row justify-center items-center m-4">
            <span className="font-medium text-[18px] w-full sm:w-[25%]">
              Languages :
            </span>
            <Input
              type="text"
              name="language"
              value={input.language.join(",")}
              onChange={changeEventHandler}
              placeholder="Comma-separated languages"
              className="ml-4 w-full sm:w-[50%]"
            />
          </div>

          <div className="flex justify-center items-center mt-6 mb-4">
            <Button
              type="submit"
              className="py-2 px-6 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition-all"
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
