import React from "react";
import forchange from "../images/CAMPAIGNSFORCHANGE.png";
import sfd from "../images/SEEDSFORDEMOCRACY.png";
import genundi from "../images/GENERASIUNDI18.png";

const Programmes = () => {
  const programmes = [
    {
      key: 1,
      header: "EDUCATION",
      image: sfd,
      title: "Seeds For Democracy",
      subtitle: `Our flagship education program to develop competences of Malaysian youths on active citizenship, voter education and participation in political, economic and social life through experiential learning and simulations.`,
    },
    {
      key: 2,
      header: "ADVOCACY",
      image: genundi,
      title: "Generasi Undi18",
      subtitle: `Undi18’s voter education initiatives which seeks to develop a generation of educated, critical and engaged young voters.`,
    },
    {
      key: 3,
      header: "AWARENESS",
      image: forchange,
      title: "YouthEx",
      subtitle: `Youth Exchange or YouthEx is a series of programs to bring policy discussions closer to the youth. We aim to bridge the gap between policymakers and the youth.`,
    },
  ];

  return (
    <div className="lg:flex">
      <div className="my-2 lg:my-4 w-full">
        <div data-sal="slide-up" data-sal-duration="700" data-sal-easing="ease">
          <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wider">
            What We Do: Impacting Through the Youths
          </h3>
          <p className="text-md lg:text-lg leading-relaxed font-light text-gray-600 mb-8">
            Through the pillars of Education, Advocacy, and Awareness
          </p>
        </div>
        <div className="lg:flex justify-start ">
          {programmes.map((program) => (
            // What we do card
            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease"
              key={program.key}
              className="mb-10 lg:mb-0 w-full lg:w-1/3"
            >
              <div className="lg:mr-10">
                <p className="text-red-800 text-sm lg:text-md mb-2 lg:mb-4 font-semibold tracking-wide">
                  {program.heading}
                </p>
                <img
                  className="object-scale-down rounded"
                  src={program.image}
                />
                <h3 className="text-md lg:text-lg mt-4 font-semibold ">
                  {program.title}
                </h3>
                <p className="text-sm lg:text-md mt-1 lg:mt-2 leading-relaxed font-light text-gray-600 mb-4 lg:mb-8">
                  {program.subtitle}
                </p>
                <a
                  className="align-right font-bold text-sm text-red-800 hover:text-red-900"
                  href="#"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;
