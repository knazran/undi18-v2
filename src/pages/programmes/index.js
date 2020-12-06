import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../../components/layout";
import Programmes from "../../components/programmes";
import SEO from "../../components/seo";

const ProgramsPage = ({data}) => {
  const {programs} = data;
  console.log(programs)
  return (
    <Layout>
      <SEO
        keywords={[
          `undi18`, `campaigns`, `youth empowerment`, `senate18`, `111 initiative`, `undi sabah`, `undi sarawak`, `tenaga belia`,
          `undi saksama`, `myhutan`
      ]}
        title="Undi18 Programs"
      />
      <section>
        <div className="w-full lg:flex">
          {/* <div
            className="md:my-6 w-full lg:w-1/2"
            data-sal="slide-right"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            <div className="w-20 h-1 rounded-lg self-start bg-red-800"></div>
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black">
                What We Do: Nation Changing Through the Youth
            </h3>
            <p className="text-md mb-2 leading-relaxed font-light">
                Empowering, educating and engaging Malaysian youth. 
            </p>
          </div> */}
        </div>
        <div
          className="w-full lg:mb-16 container mx-auto px-4 lg:px-0"
        >
          <Programmes />
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;

export const pageQuery = graphql`
  query ProgramPageQuery {
    programs: markdownRemark(frontmatter: { templateKey: { eq: "campaigns-main" } }) {
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

ProgramsPage.propTypes = {
  data: PropTypes.object
}