import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../../components/layout";
import Campaigns from "../../components/campaigns";
import SEO from "../../components/seo";

const CampaignsPage = ({data}) => {
  const {campaignMain} = data;
  console.log(campaignMain)
  return (
    <Layout>
      <SEO
        keywords={[
          `undi18`, `campaigns`, `youth empowerment`, `senate18`, `111 initiative`, `undi sabah`, `undi sarawak`, `tenaga belia`,
          `undi saksama`, `myhutan`
      ]}
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
        >
          <Campaigns />
        </div>
        <div className="w-full lg:mb-16">
          <div className="w-20 h-1 rounded-lg self-start bg-red-800"></div>
          <h3 className="text-xl lg:text-2xl tracking-wider py-2 mb-4 text-black">
          {campaignMain.frontmatter.advocacyApproach.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: campaignMain.html }}></div>
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