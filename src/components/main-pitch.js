import React from "react";
import { Link } from "gatsby";
import mainpitchimg from "../images/main_pitch_greyscale.jpg";

const MainPitch = () => {
  return (
    <div>
      <div
      className="py-8 lg:py-32 bg-contain md:bg-cover block md:hidden"
      >
        <div className="container mx-auto px-4 py-0 lg:px-0">
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
              className=""
              to="/about-us"
            >
              <button
                type='button'
                className='w-auto text-white text-center py-2 px-8 rounded bg-red-800 hover:bg-red-900'>
                Read Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
      className="md:flex py-8 lg:py-32 bg-contain md:bg-cover hidden"
      style={{ backgroundImage: `url(${mainpitchimg})` , backgroundSize: "cover"}}
      >
        <div className="container mx-auto px-4 py-0 lg:px-0">
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
              className=""
              to="/about-us"
            >
              <button
                type='button'
                className='w-auto text-white text-center py-2 px-8 rounded bg-red-800 hover:bg-red-900'>
                Read Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MainPitch;
