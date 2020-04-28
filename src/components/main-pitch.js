import React from "react";
import { Link } from "gatsby";

const MainPitch = () => {
  return (
    <div
      className="lg:flex"
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-easing="ease"
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
          class="font-bold underline text-sm lg:text-md text-red-700 hover:text-red-800"
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
          className="m-0 ml-6  lg:mx-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
          src="https://picsum.photos/800/300"
        />
      </div>
    </div>
  );
};

export default MainPitch;
