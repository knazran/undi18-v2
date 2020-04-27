import React, { useState } from "react";

const PricingCards = () => {
  const [isAnnual, toggleAnnual] = useState(true);

  return (
    <div className="w-full">
      <div data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
        <h3 className="text-center text-primary-500 text-2xl lg:text-3xl mb-6">
          Plans and Pricing
        </h3>
        {/* Header and Toggle */}
        <div className="flex justify-center mb-12">
          <button className="w-1/8 mx-2" onClick={() => toggleAnnual(true)}>
            <p
              className={`${
                isAnnual
                  ? `text-white bg-primary-500`
                  : `text-primary-500 bg-white`
              } text-md py-2 px-8 border border-primary-500 rounded-md`}
            >
              Annually
            </p>
          </button>
          <button className="w-1/8 mx-2" onClick={() => toggleAnnual(false)}>
            <p
              className={`${
                isAnnual
                  ? `text-primary-500 bg-white`
                  : `text-white bg-primary-500`
              } text-md py-2 px-8 border border-primary-500 rounded-md`}
            >
              Monthly
            </p>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="lg:flex items-stretch" >
        {/* Basic */}
        <div className="w-full mb-4 lg:w-1/3 lg:mx-2 rounded border border-gray-300 shadow-md " data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
          <div className="flex flex-col px-4 py-4 justify-center text-center">
            <h3 className="text-primary-500 text-lg mb-4">Basic</h3>
            <h3 className="text-gray-800 font-semibold text-3xl tracking-widest leading-none">
              Free
            </h3>
            <p className="font-light text-sm text-white mb-4">
              {" "}
              per month, billed annually
            </p>
            <div className="mx-auto bg-maize-700 h-1 w-1/2 rounded-full mb-4"></div>

            {/* Description */}
            <div>
              <p className="text-sm lg:text-md font-semibold text-primary-500 mb-8">
                Basic visitor management for small businesses
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Pre-registration
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                QR Sign-in Pass
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Unlimited Employees
              </p>
            </div>
          </div>
        </div>
        {/* Standard */}
        <div className="w-full mb-4 lg:w-1/3 lg:mx-2 rounded border-4 border-primary-700 shadow-lg " data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
          <div className="flex flex-col px-4 py-4 justify-center text-center">
            <h3 className="text-primary-500 text-lg mb-4">Standard</h3>
            {isAnnual ? (
              <div>
                <h3 className="text-gray-800 font-semibold text-3xl tracking-widest leading-none">
                  RM 199
                </h3>
                <p className="font-light text-sm text-gray-600 mb-4">
                  per month, billed annually
                </p>
                {/* <p className="font-light text-sm text-green-500 mb-4">
                  Save 20% per month!
                </p> */}
              </div>
            ) : (
              <div>
                <h3 className="text-gray-800 font-semibold text-3xl tracking-widest leading-none">
                  RM 250
                </h3>
                <p className="font-light text-sm text-gray-600 mb-4">
                  per month
                </p>
              </div>
            )}

            <div className="mx-auto bg-maize-700 h-1 w-1/2 rounded-full mb-4"></div>
            {/* Description */}
            <div className="mb-4">
              <p className="text-sm lg:text-md font-semibold text-primary-500 mb-8">
                Visitor management solution for dynamic companies that want
                flexibility without sacrificing security
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Pre-registration
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                QR Sign-in Pass
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Unlimited Employees
              </p>
            </div>
            <div className="mb-0">
              <p className="text-sm lg:text-md font-semibold text-black ">
                On-The-Go
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Chime Mobile App
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Arrival Alerts
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mb-4 lg:w-1/3 lg:mx-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
          <div className="rounded border border-gray-300 shadow-md flex flex-col px-4 py-4 justify-center text-center">
            <h3 className="text-primary-500 text-lg mb-4">Premium</h3>
            {isAnnual ? (
              <div>
                <h3 className="text-gray-800 font-semibold text-3xl tracking-widest leading-none">
                  RM 299
                </h3>
                <p className="font-light text-sm text-gray-600 mb-4">
                  per month, billed annually
                </p>
                {/* <p className="font-light text-sm text-green-500 mb-4">
                  Save 15% per month!
                </p> */}
              </div>
            ) : (
              <div>
                <h3 className="text-gray-800 font-semibold text-3xl tracking-widest leading-none">
                  RM 350
                </h3>
                <p className="font-light text-sm text-gray-600 mb-4">
                  per month
                </p>
              </div>
            )}
            <div className="mx-auto bg-maize-700 h-1 w-1/2 rounded-full mb-4"></div>
            {/* Description */}
            <div className="mb-4">
              <p className="text-sm lg:text-md font-semibold text-primary-500 mb-8">
                For companies looking to maximize workplace efficiency and
                security using data
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Pre-registration
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                QR Sign-in Pass
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Unlimited Employees
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm lg:text-md font-semibold text-black ">
                On-The-Go
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Chime Mobile App
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Arrival Alerts
              </p>
            </div>
            <div className="mb-0">
              <p className="text-sm lg:text-md font-semibold text-black ">
                Data-Driven
              </p>
              <p className="text-sm lg:text-md text-gray-700 ">
                Analytics Dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
