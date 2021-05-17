import React from "react";
import { graphql } from "gatsby"
import Img from 'gatsby-image';
import PropTypes from 'prop-types'

import Layout from "../components/layout";
import SEO from "../components/seo";

function PSEAPage({data}) {
  const { psea } = data;
  console.log(psea.frontmatter.psea)

  return (
    <Layout>
      <SEO
        keywords={[`Protection from Sexual Exploitation and Abuse`]}
        title="Protection from Sexual Exploitation and Abuse"
      />
      <div className='container mx-auto px-4 lg:px-8'>
      <section className="">
        <div
          className="lg:flex mb-4"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <div className="lg:my-6 w-full lg:w-2/3">
            <h3 className="text-3xl lg:text-4xl font-semibold py-2">
              {psea.frontmatter.title}
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              {psea.frontmatter.subtitle}
            </p>
            <a href={psea.frontmatter.link} target="_blank" rel="noopener noreferrer" className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light text-blue-500 hover:text-blue-600 hover:underline">
            Our PSEA policy can be found here
            </a>
          </div>
        </div>
      </section>

      <section id='psea-images'>
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center my-8 lg:mb-12">
            {psea.frontmatter.psea.map((psea_image) => (
                <div key={psea_image.name} className='lg:w-2/3'>
                    <Img
                        fluid={
                        psea_image.image.childImageSharp.fluid
                        }
                        alt={psea_image.name}
                    />
                </div>
                
            ))}  
        </div>
      </section>
      </div>
      </Layout>
  );
}

export default PSEAPage;

export const pageQuery = graphql`
  query PSEAPageQuery {
    psea: markdownRemark(frontmatter: { templateKey: { eq: "psea" } }) {
      frontmatter {
        title
        subtitle
        link
        psea {
            image {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
    }
  }
`

PSEAPage.propTypes = {
  data: PropTypes.object
}