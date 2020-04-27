import React from "react";
import hero from "../images/cat-and-human-illustration.svg";
// import { Image, Link } from "gatsby";

const Hero = () => {
  return (
    <div
      className="lg:flex"
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-delay="100"
      data-sal-easing="ease"
    >
      <div className="lg:w-1/2">
        <div className="flex flex-col xl:mt-12">
          {/* Hero Title */}
          <h1 className="text-primary-500 font-semibold text-4xl lg:text-5xl tracking-widest ">
            Revitalize
          </h1>
          <div className="text-primary-500 font-semibold text-4xl lg:text-5xl tracking-widest ">
            <span className="text-maize-700">Your</span>{" "}
            <span className="text-primary-500">Reception</span>
          </div>
          {/* Hero Subtitle */}
          <p className="text-lg text-gray-700 mt-3">
            Modernize your workspace with our contactless Visitor Management
            System.
          </p>
          <p className="text-lg text-gray-700">
            Safeguard your premises with just one scan.
          </p>

          {/* CTA */}
          <form>
            <div className="lg:flex mt-4 lg:mt-8">
              <div className="w-full lg:w-3/5 ">
                <input
                  className="w-full border border-primary-400 rounded py-2 px-4 text-md text-primary-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="lg:px-6 w-full mt-4 lg:mt-0 lg:w-2/5 ">
                <button
                  type="submit"
                  className="w-full text-white text-center py-2 px-4 rounded bg-primary-500 hover:bg-primary-700"
                >
                  Get Chime
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 lg:w-1/2">
        <img alt="Hero Image" src={hero}></img>
      </div>
    </div>
  );
};

export default Hero;
