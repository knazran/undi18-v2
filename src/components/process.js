import React from "react";
import placeholder from "../images/dog-illustration.svg";

const Process = () => {

  const range_test = [
    {
      key:1,
      text:"Invite"
    },
    {
      key:2,
      text:"Register"
    },
    {
      key:3,
      text:"Scan"
    },
    {
      key:4,
      text:"Greet"
    },
  ];
  return (
    <div className="w-full"
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease">
      <h3 className="text-center text-primary-500 text-2xl lg:text-3xl">
        Breeze through check-ins, get straight to business
      </h3>
      <div className="flex flex-wrap mt-12">
        {range_test.map((process) =>(
          <div key={process.key} className="w-1/2 px-4 lg:w-1/4">
            <img className="p-3 mb-6" alt="Placeholder Image" src={placeholder}></img>
            <p className="text-center text-base text-black text-xl lg:text-2xl">{process.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
