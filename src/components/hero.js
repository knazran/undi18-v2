import React from "react";
import hero from "../images/111initiative.jpeg";
// import { Image, Link } from "gatsby";

const Hero = () => {
  return (
    <div
      className="lg:flex pb-4 lg:pb-12 border-b-2 border-red-800"
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className="lg:w-3/5">
        <div className="flex flex-col xl:mt-12">
          {/* Hero Title */}
          <h1 className="text-red-800 font-bold text-4xl tracking-widest ">
            Impacted 8 Million Youths and counting
          </h1>
          {/* Hero Subtitle */}
          <p className="text-lg text-gray-700 mt-3">
            Pemerkasaan demokrasi bermula dengan anak muda.
          </p>
          <p className="text-lg text-gray-700">
            We are a non-partisan platform that’s building a movement of
            champions for democracy.
          </p>

          {/* CTA */}
          <div className="lg:flex mt-4 lg:mt-12">
            <div className="w-full lg:w-1/2 ">
              <button
                type="button"
                className="w-full text-white text-center py-2 px-4 rounded bg-red-800 hover:bg-red-900"
              >
                Join Generasi Undi18
              </button>
            </div>
            <div className="lg:px-4 w-full mt-4 lg:mt-0 lg:w-1/2 ">
              <button
                type="button"
                className="w-full text-white text-center py-2 px-4 rounded bg-red-800 hover:bg-red-900"
              >
                See Our Programs
              </button>
            </div>
            {/* <div className="lg:px-6 w-full mt-4 lg:mt-0 lg:w-1/3 ">
              <button
                type="button"
                className="w-full text-white text-center py-2 px-4 rounded bg-red-700 hover:bg-red-800"
              >
                Follow Our Campaigns
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-8 lg:w-2/5">
        <img className="rounded-md" alt="Hero Image" src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
