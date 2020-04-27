import React from "react";

const CTACard = () => {
  return (
    <div
      className="w-full"
      data-sal="slide-up"
      data-sal-duration="700"
      data-sal-easing="ease"
    >
      <div className="w-full lg:w-4/5 mx-auto flex flex-col rounded-lg bg-primary-500 shadow-lg p-4 lg:py-8">
        <h1 className="mx-auto text-white font-semibold text-xl lg:text-2xl tracking-wide">
          Experience Chime Today
        </h1>
        <p className="mx-auto font-light text-center text-white text-md mb-4">
          Sign up now for 2 months free, no credit card required!
        </p>
        <button
          type="submit"
          className="mx-auto w-full lg:w-1/4 text-white text-center py-2 px-4 rounded bg-maize-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default CTACard;
