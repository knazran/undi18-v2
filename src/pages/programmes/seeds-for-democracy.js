import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import saksama from "../../images/saksama.png";

const SFDPage = () => {
  const programmeInfo = {
    title: "Seeds For Democracy",
    mainpitch: [
      `Our flagship education program to develop competences of Malaysian youths on active citizenship, voter education and participation in political, 
      economic and social life through experiential learning and simulations`,
      `The first Seeds For Democracy programme was held on 14 - 17 March 2020 in Putra World Trade Centre (PWTC), Kuala Lumpur 
      and was participated by 150 selected Malaysian youth leaders from across Malaysia `,
      `Organized in collaboration with the Malaysian Reform Initiative (MARI) and United States Agency for International Development.`,
    ],
    intro: [
      `Encourage active participation of young people in socio-political democratic life on the
      local and national level in order to strengthen young people's voices in Malaysia by using
      different tools for empowerment;`,
      `Raise awareness about the learner-centered approach in developing non-formal
      educational activities for young people on the topic of citizenship education;
      `,
      `Foster mutual understanding, solidarity, intercultural learning and intercultural
      dialogue between young people coming from different cultural backgrounds, and to
      provide the opportunity for young people to develop multiplying initiatives to be
      implemented in their communities;`,
      `Share experiences and good practices of citizenship education from the local level
      among different target groups;`,
      `Decentralize activism and citizenship education by empowering and training young
      Malaysians to organize programs in their own local communities`,
    ],
    workshop : [
        {
            key: "workshop-1",
            title: "Fishbowl Activity",
            subtitle: `An exploration into the different identities that we hold as individuals. Are identities fixed? Can they change? 
            What are my different identities? These are questions that participants will be able to answer at the end of the activity. `,
            details: [],
            images: []
        },
        {
            key: "workshop-2",
            title: "Fishbowl",
            subtitle: "asdsad",
            details: [],
            images: []
        }
    ]
  };
  return (
    <Layout>
      <SEO
        keywords={[`undi 18`, `malaysia`, `youth`, `seeds for democracy`]}
        title="Seeds For Democracy"
      />
      <section id="intro">
        <div className="w-full lg:flex">
          <div
            className="lg:my-6 w-full lg:w-1/2"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div className="w-20 h-1 rounded-lg self-start bg-red-800"></div>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black">
              {programmeInfo.title}
            </h3>
            {programmeInfo.mainpitch.map((pitch, idx) => (
              <p key={idx} className="text-md mb-2 leading-relaxed font-light">
                {pitch}
              </p>
            ))}
          </div>
          <div
            className="my-6 w-full lg:w-1/2 flex-grow-0"
            data-sal="slide-left"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <img
              className="mx-auto rounded-lg object-center lg:object-right w-full lg:w-2/3"
              src={saksama}
            />
          </div>
        </div>
      </section>
      <section id="objective">
        <div className="w-full mt-8 mb-16">
          <div className="w-20 h-1 rounded-lg self-start bg-red-800 mb-2"></div>
          <div className="py-2">
            <h3 className="text-xl lg:text-2xl tracking-wider mb-4 text-black">
              What is Seeds For Democracy?
            </h3>
            <p className="text-md leading-relaxed font-light">
              An intensive 4-day democracy-building camp with the objective to:
            </p>
          </div>

          <ol className="lg:mx-4 list-decimal">
            {programmeInfo.intro.map((text, idx) => (
              <li key={idx} className="text-md mb-2 leading-relaxed font-light">
                {text}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="workshop">
        <div className="w-full mt-8 mb-16">
          <div className="w-20 h-1 rounded-lg self-start bg-red-800 mb-2"></div>
          <div className="py-2 mb-4">
            <h3 className="text-xl lg:text-2xl tracking-wider mb-4 text-black">
              Workshop Modules
            </h3>
            <p className="text-md leading-relaxed font-light">
              The modules for the first Seeds for Democracy programme on 14 - 17 March 2020
            </p>
          </div>

          <div className="lg:flex">
            {programmeInfo.workshop.map((workshop) => (
              <div key={workshop.key} className="w-full mb-6 lg:mb-0 lg:w-1/2">
              <div
                className="flex justify-between flex-wrap mx-4 lg:mx-2 border rounded-lg shadow-md"
                style={{ height: "100%" }}
              >
                <div className="p-0 m-0 ">
                  <div className="w-full self-start">
                    <h3 className="text-md lg:text-lg font-semibold text-black tracking-wider mt-4 px-4">
                      {workshop.title}
                    </h3>
                    <p className="text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4">
                      {workshop.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SFDPage;
