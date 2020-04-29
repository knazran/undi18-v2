import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import journey from "../images/journey.png";
import journey2 from "../images/journey-2.png";
import tharma from "../images/tharma.png";
import qyira from "../images/qyira.png";
import aeiou from "../images/AEIOYouth.png";
import mainpitchimg from "../images/mainpitchimg.jpg";

function AboutPage() {
  const story = [
    {
      key: 1,
      text: `Undi18 is a Malaysian youth movement that successfully advocated for the amendment of Article 119(1) 
      of the Federal Constitution to reduce the minimum voting age in Malaysia from 21 to 18 years old.`,
    },
    {
      key: 2,
      text: `We started off as a student movement in 2016, under the umbrella of the Malaysian Students’ Global Alliance. This gave us access to numerous Malaysian student/youth organizations across the world and throughout Malaysia. 
      We officially launched with a memorandum to Datuk Seri Najib Tun Razak in April 2017.`,
    },
    {
      key: 3,
      text: `Throughout the years, we have organized numerous town halls, forums and public engagements to raise awareness on youth democratic representation and lowering the voting age. We have also engaged with politicians from multiple sides of the political divide, 
      where we presented our case for the lowering of the voting age in Malaysia. We believe that youth empowerment transcends political lines.`,
    },
    {
      key: 4,
      text: `In July 2019, with the support of YB Syed Saddiq Syed Abdul Rahman (the former Minister of Youth and Sports), we managed to advocate for a historic Constitutional Amendment to lower the voting age in Malaysia. 
      It was the first time in history where a Constitutional Amendment received 100% of votes in the Upper and Lower Houses of Parliament.`,
    },
    {
      key: 5,
      text: `Undi18 (Persatuan Pengundi Muda) is a registered National Organization under the Malaysian Registry of Societies with a registration 
      number of PPM-008-14-27092018. We are a social enterprise focusing on voter education and youth public policy engagement.`,
    },
  ];

  const team_members = [
    {
      key: 1,
      name: "Tharma Pillai",
      title: "Advocacy Director",
      image: tharma,
    },
    {
      key: 2,
      name: "Qyira Yusri",
      title: "Education Director",
      image: qyira,
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="">
        <div
          className="lg:flex mb-4"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <div className="lg:my-6 w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2">
              From a Student Movement to a Constitutional Amendment
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              Undi18 aims to bridge the gap between politicians, policymakers,
              and youth. We help Malaysians read and understand policies beyond
              politics.
            </p>
          </div>
          <div className="my-0 lg:my-6 w-full lg:w-1/2 flex-grow-0">
            <img
              className="m-0 rounded-lg object-center lg:object-fill w-full"
              src={mainpitchimg}
            />
          </div>
        </div>
      </section>

      <section id="our_story">
        <div>
          <div className="lg:flex">
            <div className="my-4 mt-2 w-full">
              <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
              <h3 className="text-2xl font-semibold tracking-wider mb-4 lg:mb-6">
                Our Story
              </h3>
              {story.map((para) => (
                <div key={para.key} className="text-sm lg:text-md mb-2">
                  {para.text}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:flex lg:justify-center mb-12 ">
          <img className="mx-auto lg:mx-2 w-4/5 lg:w-1/3" alt="journey" src={journey}></img>
          <img className="mx-auto lg:mx-2  w-4/5 lg:w-1/3" alt="journey" src={journey2}></img>
          </div>
          
        </div>
      </section>

      <section id="our_story">
        <div className="lg:flex">
          <div className="my-4 mt-2 w-full">
            <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
            <h3 className="text-2xl font-semibold tracking-wider ">
              Our Pillars: AEIO Youth
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              Youth-Centric Advocacy, Education, Innovation and Outreach
            </p>
          </div>
        </div>
        <div className="mx-auto w-4/5 md:1/3 lg:w-1/4">
        <img className="mx-auto mb-12 w-full" alt="aeiou" src={aeiou}></img>
        </div>
        
      </section>

      <section id="team">
        <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
        <h3 className="text-2xl font-semibold tracking-wider mb-2">The Team</h3>
        <div className="lg:flex lg:justify-center mt-8 lg:mb-24">
          {team_members.map((team) => (
            <div key={team.key} className="mx-auto w-4/5 lg:mx-0 lg:w-1/3 lg:items-stretch">
              <div className="border rounded shadow-md mb-4 lg:mb-0 lg:mx-6" style={{ "height": "100%" }}>
                <div className="flex flex-col">
                  <div className="">
                    <img
                      className="mx-auto w-full m-0 rounded rounded-b-none object-fill"
                      style={{ "max-height": "420px" }}
                      src={team.image}
                      alt="Tharma"
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-xl font-semibold tracking-wider">
                      {team.name}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-gray-600 mb-4">
                      {team.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
