import React from "react";
// import saksama from "../../images/saksama.png";
import Layout from "../../components/layout";
import Campaigns from "../../components/campaigns";
import SEO from "../../components/seo";
import advocacy from "../../images/campaign-advocacy.png";

const CampaignsPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Undi18 Campaigns"
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
              className="w-20 h-1 rounded-lg self-start bg-red-800"
            ></div>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black">
              Drive Change. Work to build a better Malaysia.
            </h3>
            <p className="text-md mb-2 leading-relaxed font-light">
              Join us in our causes.
            </p>
          </div>
          {/* <div
            className="my-0 lg:my-6 w-1/2 flex-grow-0"
            data-sal="slide-left"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <img
              className="m-0 ml-6  lg:mr-4 rounded-lg object-center lg:object-fill h-0 lg:h-full"
              src={saksama}
            />
          </div> */}
        </div>
        <div
          className="w-full lg:mb-16"
          data-sal="slide-left"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <Campaigns />
        </div>
        <div className="w-full lg:mb-16">
          <div className="w-20 h-1 rounded-lg self-start bg-red-800"></div>
          <h3 className="text-xl lg:text-2xl tracking-wider py-2 mb-4 text-black">
            Undi18 Advocacy Approach
          </h3>
          <p className="text-md mb-2 leading-relaxed font-light">
            Undi18 built a powerful political movement that mobilized hundreds
            of thousands of Malaysian youth through social media. Online
            engagement with Undi18’s campaign material reached millions of
            impressions on Facebook and Twitter and more than a hundred thousand
            views on the campaign website in the four months ahead of
            parliament’s vote on the amendment.
          </p>
          <p className="text-md mb-8 leading-relaxed font-light">
            We worked with grassroots organizations throughout Malaysia to
            disseminate campaign material and we cultivated campaign champions
            to shape the national narrative. We utilized digital marketing
            techniques together with strategic canvassing as part of our
            campaign strategy.
          </p>
          <p className="text-md mb-2 leading-relaxed font-light">
            To achieve the constitutional amendment, we set out a 4-point
            approach for Undi18’s advocacy:
          </p>
          <div
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-easing="ease"
            className="w-full lg:w-3/5 mx-auto mb-8"
          >
            <img className="rounded-lg object-center " src={advocacy} />
          </div>
          <p className="text-md mb-16 leading-relaxed font-light">
            Through our latest digital campaigning projects and advocacy
            campaign, we aim to replicate the success of the Undi18 Advocacy
            Approach. Talk to us if you would like us to consult you on your
            campaign.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CampaignsPage;
