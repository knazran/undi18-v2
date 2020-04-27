import React from "react";
import contactless from "../images/contactless.png";

const AttentionCard = () => {
  return (
    <div
      className="w-full"
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-easing="ease"
    >
      <div className="lg:flex rounded-lg bg-gray-300 shadow-lg">
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left flex flex-col p-4 lg:p-8">
            <div className="font-semibold text-2xl lg:text-3xl tracking-wide">
              <span className="text-primary-500 ">Reclaim </span>
              <span className="text-maize-700 ">your </span>
              <span className="text-primary-500 ">space </span>
            </div>
            <div className="font-semibold text-2xl lg:text-3xl tracking-wide mb-4 lg:mb-6">
              <span className="text-maize-700 ">Eliminate </span>
              <span className="text-primary-500 ">COVID-19 </span>
            </div>

            <p className="text-md text-gray-700 mb-4">
              Malaysia‘s fight against COVID-19 is going strong. But it is far
              from over.
            </p>
            <p className="text-md text-gray-700 mb-4">
              As we prepare to return to our offices and the “new normal”, we
              need to minimize every risk.
            </p>
            <p className="text-md text-gray-700">
              Let Chime Visitors help you eliminate breakouts on your premises.
            </p>
          </div>
        </div>
        <div className="w-0 lg:w-1/2 p-2 lg:p-8">
          <img
            className="w-full rounded-md"
            alt="Contactless Image"
            src={contactless}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AttentionCard;
