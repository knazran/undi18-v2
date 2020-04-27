import React from "react";
import contactless from "../images/contactless.png";

const Features1 = () => {
  const feature_list = [
    {
      key: 1,
      title: "Hygienic",
      subtitle: `No more pen-and-paper. No more shared devices. Avoid touching
      contaminated surfaces.`,
    },
    {
      key: 2,
      title: "Efficient",
      subtitle: `Pre-register your guests and scan them in. Frictionless, effortless, and in no time at all. Receive notifications on your mobile app immediately when your guests arrive. `,
    },
    {
      key: 3,
      title: "No custom hardware required ",
      subtitle: `Seamlessly integrate our visitor management software on devices you already have! `,
    },
    {
      key: 4,
      title: "Declaration Forms ",
      subtitle: `Send NDAs or screening forms along with your invite so visitors can complete them before they arrive.`,
    },
  ];

  return (
    <div
      className="lg:flex"
      data-sal="slide-right"
      data-sal-duration="700"
      data-sal-easing="ease"
    >
      <div className="lg:w-1/2 pr-4">
        <img className="w-full" alt="Contactless Image" src={contactless}></img>
      </div>
      <div
        className="lg:w-1/2"
      >
        <div className="flex flex-col">
        <div className="bg-maize-700 h-1 w-24 rounded-full mt-4 lg:mt-0"></div>
          <h1 className="text-primary-500 font-semibold text-2xl lg:text-3xl tracking-wide mb-2 lg:mb-8">
            Contactless & Seamless Visitor Management System
          </h1>
          {feature_list.map((feature) => (
            <div key={feature.key} className="mb-2 lg:mb-4">
              <p className="text-lg lg:text-xl text-bold tracking-wide text-primary-500 mt-3">
                {feature.title}
              </p>
              <p className="text-sm lg:text-md text-gray-700">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features1;
