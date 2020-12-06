import React from "react";
import { Link } from "gatsby";
import mainpitchimg from "../images/main_pitch_greyscale.jpg";

const MainPitch = () => {
  return (
    <div
      className="lg:flex py-8 lg:py-32 bg-contain md:bg-cover"
      style={{ backgroundImage: `url(${mainpitchimg})` , backgroundSize: "cover"}}
    >
      <div className="container mx-auto px-4 py-0 md:px-0">
        <div className='w-full md:w-1/2'>
          <h3 className="text-3xl lg:text-5xl font-semibold tracking-wider py-2 text-red-800">
            Build the movement of champions for democracy. Starting from youths.
          </h3>
          <p className="text-md lg:text-xl mt-2 mb-6 leading-relaxed text-gray-800">
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
        </div>
        
        {/* <div className="flex flex-col">
          <h1 className="text-black font-semibold text-2xl lg:text-3xl tracking-wide mb-2 lg:mb-8">
          Build the movement of champions for democracy. Starting from youths.
          </h1>
          <p className="text-lg text-gray-700">
          Promoting a youth-centric agenda and democratic reforms. Undi18 aims to bridge the gap between politicians, policymakers, and youth. We help Malaysians read and understand policies beyond politics.
          </p>
        </div> */}
      </div>
      {/* <div className="lg:w-1/2 pl-4">
        <img
          className="m-0 rounded-lg object-center w-0 lg:w-full"
          src={mainpitchimg}
        />
      </div> */}
    </div>
  );
};

export default MainPitch;
