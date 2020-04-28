import React from "react";
import saksama from "../images/saksama.png";
import initiative from "../images/111initiative.jpeg";
import myhutan from "../images/myhutan.jpeg";

import { Link } from "gatsby";

const Campaigns = () => {
  const campaignItems = [
    {
      key: 1,
      title: "Undi Saksama",
      subtitle: `A youth campaign to advocate for equal democratic representation for every Malaysian voter. Based on the principle of “Satu Rakyat, Satu Undi, Satu Nilai”, 
      we aim to address gerrymandering, malapportionment and alternative voting systems and bring these conversations to the average citizen.`,
      image: saksama,
      url: "/campaigns/undi-saksama",
    },
    {
      key: 2,
      title: "The 111 Initiative",
      subtitle: `A youth campaign to build towards 50% women’s representation in Parliament and politics. 
      We aim to build a new narrative of women in politics and get more women in positions of power.`,
      image: initiative,
      url: "/campaigns/undi-saksama",
    },
    {
      key: 3,
      title: "MyHutan",
      subtitle: `A youth campaign to institutionalize financing for forest conservation in the Federal Constitution. 
      We aim to build a coalition of young Malaysians that are passionate about forest conservation and climate change.`,
      image: myhutan,
      url: "/campaigns/undi-saksama",
    },
  ];

  return (
    <div className="lg:flex lg:flex-wrap">
      <div className="my-2 lg:my-4 w-full ">
        <div className="lg:flex lg:items-stretch justify-start ">
          {campaignItems.map((item) => (
            <div
              key={item.key}
              className="w-full mb-6 lg:mb-0 lg:w-1/3"
            >
              <div
                className="flex justify-between flex-wrap mx-4 lg:mx-6 border rounded-lg shadow-md"
                style={{ height: "100%" }}
              >
                <div className="p-0 m-0 ">
                  <img alt="campaign-img" src={item.image}></img>
                </div>
                <div className="w-full self-start">
                  <h3 className="text-md lg:text-lg font-semibold text-black tracking-wider mt-4 px-4">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-600 px-4 mb-4">
                    {item.subtitle}
                  </p>
                </div>

                {/* <div className="self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 hover:bg-red-900 rounded-md"> */}
                <Link
                  className="self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 hover:bg-red-900 rounded-md text-center font-semibold text-sm lg:text-md text-white"
                  to={item.url}
                >
                  Check us out!
                </Link>
                {/* <a
                    className="text-center font-semibold text-sm lg:text-md text-white"
                    href="#"
                  >
                    Check us out!
                  </a> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
