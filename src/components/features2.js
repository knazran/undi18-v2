import React from "react";
import data from "../images/data.png";

const Features2 = () => {
  const feature_list = [
    {
      key: 1,
      title: "Visitor Log",
      subtitle: `Data synchronized across all devices - know who’s on your premises at all times. `,
    },
    {
      key: 2,
      title: "Protect your data",
      subtitle: `No more exposed information at the lobby desk. We safeguard your data with privacy policies and GDPR compliant technology.`,
    },
    {
      key: 3,
      title: "Data-driven insights",
      subtitle: `Staffing concerns? Maintenance disruptions? Make informed decisions with analyses of available data. `,
    },
    {
      key: 4,
      title: "Eliminate data entry errors",
      subtitle: `To err is human. Chime Visitors minimizes that and verify visitors for you - accurately.`,
    },
  ];

  return (
    <div
      className="lg:flex lg:flex-wrap"
      data-sal="slide-left"
      data-sal-duration="700"
      data-sal-easing="ease"
    >
      <div className="lg:w-1/2">
        <div className="flex flex-col">
          {/* Hero Title */}
          <div className="bg-maize-700 h-1 w-24 rounded-full"></div>
          <h1 className="text-primary-500 font-semibold text-2xl lg:text-3xl tracking-wide mb-2 lg:mb-8">
            Data-driven Security
          </h1>
          {/* Hero Subtitle */}
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
      <div className="lg:w-1/2 pr-4">
        <img className="w-full" alt="Contactless Image" src={data}></img>
      </div>

      {/* <div className="flex justify-center w-full mt-4 lg:mt-0">
      <a
          className="w-2/3 lg:w-1/3 lg:mx-auto rounded-md shadow-lg p-4 border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white text-center  font-semibold"
          href="/features"
        >
          See All Features
        </a>
      </div> */}
        
    </div>
  );
};

export default Features2;
