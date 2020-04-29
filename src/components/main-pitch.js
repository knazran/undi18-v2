import React from "react";
import { Link } from "gatsby";
import mainpitchimg from "../images/mainpitchimg.jpg";

const MainPitch = () => {
  return (
    <div
      className="lg:flex"
    >
      <div className="lg:w-1/2">
        <h3 className="text-2xl lg:text-4xl font-semibold tracking-wider py-2">
          Build the movement of champions for democracy. Starting from youths.
        </h3>
        <p className="text-sm lg:text-md mt-2 mb-6 leading-relaxed">
          Promoting a youth-centric agenda and democratic reforms. Undi18 aims
          to bridge the gap between politicians, policymakers, and youth. We
          help Malaysians read and understand policies beyond politics.
        </p>
        <Link
          className="font-bold underline text-sm lg:text-md text-red-700 hover:text-red-800"
          to="/about-us"
        >
          Read Our Story
        </Link>
        {/* <div className="flex flex-col">
          <h1 className="text-black font-semibold text-2xl lg:text-3xl tracking-wide mb-2 lg:mb-8">
          Build the movement of champions for democracy. Starting from youths.
          </h1>
          <p className="text-lg text-gray-700">
          Promoting a youth-centric agenda and democratic reforms. Undi18 aims to bridge the gap between politicians, policymakers, and youth. We help Malaysians read and understand policies beyond politics.
          </p>
        </div> */}
      </div>
      <div className="lg:w-1/2 pl-4">
        <img
          className="m-0 rounded-lg object-center w-0 lg:w-full"
          src={mainpitchimg}
        />
      </div>
    </div>
  );
};

export default MainPitch;
