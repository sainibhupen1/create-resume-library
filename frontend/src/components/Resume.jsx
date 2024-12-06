import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [resume, setResume] = useState();
  const navigate = useNavigate();

  const handleDownload = () => {
    // सबसे पहले उस हिस्से को कैप्चर करें जिसे आप डाउनलोड करना चाहते हैं
    const element = document.getElementById("capture");

    html2canvas(element).then((canvas) => {
      // PDF डाउनलोड करने के लिए
      const pdf = new jsPDF();

      // Canvas को PDF में जोड़ें
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 12, 12, 185, 250); // Adjust the width and height as needed

      // PDF को डाउनलोड करें
      pdf.save("downloaded-file.pdf");
    });
  };

  const resumehandler = async () => {
    const res = await fetch("http://localhost:8000/resume");
    const result = await res.json();
    if (result) {
      setResume(result);
    }
  };

  useEffect(() => {
    resumehandler();
  }, []);

  return (
    <div className="flex p-20 justify-center items-center flex-col">
      <div
        id="capture"
        className="flex flex-col border border-blue-950 w-[70%]"
      >
        <div className="flex flex-col mb-2 mt-2">
          <h1 className=" ml-80 font-bold text-[20px]">{resume?.username}</h1>
          <div className="flex ml-40 items-center">
            <p className="font-medium mr-2"> +91 {resume?.mobilenumber} |</p>
            <p className="text-blue-600 font-medium underline mr-2">
              {resume?.email}
            </p>
            <p className="font-medium">| {resume?.city} &nbsp;|&nbsp;</p>
            <p className="font-medium">{resume?.state} </p>
          </div>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">About Me</h1>
          <hr className="border-1 border-black" />
          <p className="mt-2">{resume?.aboutme}</p>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">EDUCATION</h1>
          <hr className="border-1 border-black" />
          <div className="mt-2">
            <p className="ml-4 mr-2 flex items-center">
              <span className="mb-2 font-bold">.</span>
              <span className="ml-4 mr-2 font-medium">
                {resume?.collegename}{" "}
              </span>
              <span className="mr-2 font-medium">{resume?.colcity} </span>
              <span className="font-medium">{resume?.colstate} </span>
            </p>
            <p className="ml-8 mr-2 flex items-center">
              <span className="ml-4 mr-2 text-[14px]">
                CGPA&nbsp;:&nbsp;{resume?.colcgpa}
              </span>
              <span className="mr-2 text-[14px]">
                {resume?.colfield} ({resume?.colfieldbranch} ),
              </span>
              <span className="text-[14px]">{resume?.colyear} </span>
            </p>
          </div>

          <div className="mt-2">
            <p className="ml-4 mr-2 flex items-center">
              <span className="mb-2 font-bold">.</span>
              <span className="ml-4 mr-2 font-medium">
                {resume?.schoolname12}{" "}
              </span>
              <span className="mr-2 font-medium">{resume?.city12} </span>
              <span className="mr-2 font-medium">{resume?.state12} </span>
              <span className="font-medium">
                (12<sup>th</sup>&nbsp;{resume?.boardname12} )
              </span>
            </p>
            <p className="ml-8 mr-2 flex items-center">
              <span className="ml-4 mr-2 text-[14px]">
                Percentage&nbsp;:&nbsp;{resume?.percentage12} %
              </span>
            </p>
          </div>

          <div className="mt-2">
            <p className="ml-4 mr-2 flex items-center">
              <span className="mb-2 font-bold">.</span>
              <span className="ml-4 mr-2 font-medium">
                {resume?.schoolname10}{" "}
              </span>
              <span className="mr-2 font-medium">{resume?.city10} </span>
              <span className="mr-2 font-medium">{resume?.state10} </span>
              <span className=" font-medium">
                (10<sup>th</sup>&nbsp;{resume?.boardname10} )
              </span>
            </p>
            <p className="ml-8 mr-2 flex items-center">
              <span className="ml-4 mr-2 text-[14px]">
                Percentage&nbsp;:&nbsp;{resume?.percentage10} %
              </span>
            </p>
          </div>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">PROJECTS </h1>
          <hr className="border-1 border-black" />
          <div className="mt-2">
            <p className="ml-4 mr-2 flex items-center">
              <span className="mb-2 font-bold">.</span>
              <span className="ml-4 mr-2 font-medium">
                {resume?.projectname1}{" "}
              </span>
              <span className="mr-2 font-medium text-blue-500 underline">
                ({resume?.p1gitlink} )
              </span>
              {/* <span className="font-medium">(Skills )</span> */}
            </p>
            <p className="ml-8 mr-2 flex items-center">
              <span className="ml-4 mr-2 text-[14px]">
                {" "}
                {resume?.p1about}
                {resume?.p1skills?.map((item, index) => {
                  return (
                    <span key={index} className="ml-2">
                      ({item})
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
          <div className="mt-2">
            <p className="ml-4 mr-2 flex items-center">
              <span className="mb-2 font-bold">.</span>
              <span className="ml-4 mr-2 font-medium">
                {resume?.projectname2}{" "}
              </span>
              <span className="mr-2 font-medium text-blue-500 underline">
                ({resume?.p2gitlink} )
              </span>
              {/* <span className="font-medium">(Skills)</span> */}
            </p>
            <p className="ml-8 mr-2 flex items-center">
              <span className="ml-4 mr-2 text-[14px]">
                {" "}
                {resume?.p2about}
                {resume?.p2skills?.map((item, index) => {
                  return (
                    <span key={index} className="ml-2">
                      ({item})
                    </span>
                  );
                })}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">TECHNICAL SKILLS </h1>
          <hr className="border-1 border-black" />
          <div className="mt-2 ml-4">
            <p>
              <span className="font-medium">FrontEnd</span> :
              {resume?.frontend?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 mr-2">
                    {item},
                  </span>
                );
              })}
            </p>
            <p>
              <span className="font-medium">Backend</span> :
              {resume?.backend?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 mr-2">
                    {item},
                  </span>
                );
              })}
            </p>
            <p>
              <span className="font-medium">Database</span> :
              {resume?.database?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 mr-2">
                    {item},
                  </span>
                );
              })}
            </p>
            <p>
              <span className="font-medium">Other</span> :
              {resume?.others?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 mr-2">
                    {item} ,
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">CERTIFICATIONS </h1>
          <hr className="border-1 border-black" />

          <div className="mt-2 ml-2">
            {resume?.companynamecet?.map((item, index) => {
              return (
                <p key={index} className="flex items-center mb-1 font-medium">
                  <span className="mr-2">{index + 1}.</span>
                  <span className="mr-1">{item}</span>{" "}
                  <span className="mr-1">{resume?.fieldcet?.[index]}</span>
                  <span>Of Certificate .</span>
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-2 ml-2 mr-2 mb-2">
          <h1 className="mb-2 font-bold text-[20px]">LANGUAGES </h1>
          <hr className="border-1 border-black" />
          <div className="mt-2 ml-2 font-medium">
            {resume?.language?.map((item, index) => {
              return (
                <p key={index}>
                  <span className="mr-2">{index + 1}.</span>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[60%]">
        <button
          onClick={handleDownload}
          className="mt-6 mb-10 border border-black p-2 rounded-md bg-blue-500 font-bold"
        >
          Download Your CV
        </button>
        <button
          onClick={() => navigate("/editresume")}
          className="mt-6 mb-10 border border-black p-2 rounded-md bg-gray-400 font-bold"
        >
          Edit Your CV
        </button>
      </div>
    </div>
  );
};

export default Resume;