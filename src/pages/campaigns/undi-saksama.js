import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import saksama from "../../images/saksama.png";

const UndiSaksamaPage = () => {
  const campaignInfo = {
    title: "Undi Saksama",
    campaignColor: "#032de5",
    mainpitch: [
      `Undi Saksama is a non-partisan electoral reform campaign led by
      Malaysian youth.`,
      `Founded upon the democratic principle of ‘one man, one vote, one
      value’, we aim to establish ourselves as Malaysia’s leading
      authority on the issues of malapportionment, gerrymandering, and
      alternative voting systems.`,
    ],
    background: [
      `The fight for equal democratic representation emerged from the outstanding work of electoral reform groups before us. 
      Undi Saksama wants to push this fight forward by taking on a youth-centric approach. 
      We believe that there is a need for younger voices in matters relating to electoral reform. `,
      `To encourage young voices in the movement for electoral reform, we seek to create democratic spaces where young Malaysian voices are welcomed. 
      The integration of youth voices in the national discussion surrounding electoral reform is in line with Undi 18’s agenda of promoting youth-centric democratic reforms.`,
    ],
  };
  return (
    <Layout>
      <SEO
        keywords={[
          `undi 18`,
          `malaysia`,
          `youth`,
          `seeds for democracy`,
          `voter education`,
          `youth`,
          `pemuda negara`,
          `digital campaign`,
          `youth empowerment`,
          `electoral reform`,
          `CSO`,
          `political education`,
        ]}
        title="Contact"
      />
      <section>
        <div className="w-full lg:flex">
          <div
            className="lg:my-6 w-full lg:w-1/2"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div
              className="w-20 h-1 rounded-lg self-start"
              style={{ backgroundColor: campaignInfo.campaignColor }}
            ></div>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black">
              {campaignInfo.title}
            </h3>
            {campaignInfo.mainpitch.map((pitch, idx) => (
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
        <div className="w-full mt-8 mb-16">
          <div
            className="w-20 h-1 rounded-lg self-start"
            style={{ backgroundColor: campaignInfo.campaignColor }}
          ></div>
          <h3 className="text-xl lg:text-2xl tracking-wider py-2 mb-4 text-black">
            Background
          </h3>
          {campaignInfo.background.map((text, idx) => (
            <p key={idx} className="text-md mb-2 leading-relaxed font-light">
              {text}
            </p>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default UndiSaksamaPage;
