import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
// import saksama from "../../images/saksama.png";
import Layout from "../../components/layout";
import Campaigns from "../../components/campaigns";
import SEO from "../../components/seo";
// import advocacy from "../../images/campaign-advocacy.png";

const CampaignsPage = ({data}) => {
  const {campaignMain} = data;
  console.log(campaignMain)
  // const advocacyItems = [
  //   {
  //     key:1,
  //     title: "Kickstart",
  //     subtitle: "Assembling a winning coalition"
  //   },
  //   {
  //     key:2,
  //     title: "Communication",
  //     subtitle: "Building social media momentum"
  //   },
  //   {
  //     key:3,
  //     title: "Engagement",
  //     subtitle: "Engaging rakyat to win over public opinion"
  //   },
  //   {
  //     key:4,
  //     title: "Lobbying",
  //     subtitle: "Playing the game of leverage"
  //   },
  // ]
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Undi18 Campaigns"
      />
      <section>
        <div className="w-full lg:flex">
          <div
            className="md:my-6 w-full lg:w-1/2"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div className="w-20 h-1 rounded-lg self-start bg-red-800"></div>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black">
              {campaignMain.frontmatter.title}
            </h3>
            <p className="text-md mb-2 leading-relaxed font-light">
            {campaignMain.frontmatter.subtitle}
            </p>
          </div>
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
          {campaignMain.frontmatter.advocacyApproach.title}
          </h3>
          {/* {} */}
          <div dangerouslySetInnerHTML={{ __html: campaignMain.html }}></div>
          {/* <p className="text-md mb-2 leading-relaxed font-light">
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
          </p> */}
          {/* <div
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-easing="ease"
            className="w-0 md:w-full lg:w-3/5 mx-auto mb-8"
          >
            <img className="rounded-lg object-center " src={advocacy} />
          </div>
          <div
            className="w-full px-4 block md:hidden mb-8"
          >
            <ol className="list-decimal">
              {advocacyItems.map((item) => (
                <li
                  key={item.key}
                  className="text-md mb-2 leading-relaxed font-light"
                >
                  <strong>{item.title}</strong> : {item.subtitle}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-md mb-16 leading-relaxed font-light">
            Through our latest digital campaigning projects and advocacy
            campaign, we aim to replicate the success of the Undi18 Advocacy
            Approach. Talk to us if you would like us to consult you on your
            campaign.
          </p> */}
        </div>
      </section>
    </Layout>
  );
};

export default CampaignsPage;

export const pageQuery = graphql`
  query CampaignPageQuery {
    campaignMain: markdownRemark(frontmatter: { templateKey: { eq: "campaigns-main" } }) {
      frontmatter {
        title
        subtitle
        advocacyApproach {
          title
        }
      }
      html
    }
  }
`

CampaignsPage.propTypes = {
  data: PropTypes.object
}