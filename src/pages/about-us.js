import React from "react";
import { graphql } from "gatsby"
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';
import PropTypes from 'prop-types'

import Layout from "../components/layout";
import SEO from "../components/seo";
import journey from "../images/journey.png";
import journey2 from "../images/journey-2.png";
import aeiou from "../images/AEIOYouth.png";

function AboutPage({data}) {
  const { aboutUs } = data;

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <div className='container mx-auto px-4 lg:px-8'>
      <section className="">
        <div
          className="lg:flex mb-4"
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
        >
          <div className="lg:my-6 w-full lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-semibold tracking-wider py-2">
              {aboutUs.frontmatter.title}
            </h3>
            <p className="text-md mt-2 mb-3 lg:mb-6 leading-relaxed font-light">
              {aboutUs.frontmatter.title}
            </p>
          </div>
          <div className="my-0 lg:my-6 w-full lg:w-1/2 flex-grow-0">
            <Img
              className="rounded-lg"
              fluid={
                aboutUs.frontmatter.featuredImage.childImageSharp.fluid
              }
              alt="About-Us"
            />
          </div>
        </div>
      </section>

      <section id="our_story">
        <div>
          <div className="lg:flex">
            <div className="my-4 mt-2 w-full">
              <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
              <div dangerouslySetInnerHTML={{ __html: aboutUs.html }}></div>
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
        <div className="lg:flex lg:flex-wrap lg:justify-center mt-8 lg:mb-12">
          {aboutUs.frontmatter.team.map((staff) => (
            <div key={staff.name} className="mx-auto w-4/5 lg:mx-0 mb-4 lg:w-1/3 lg:items-stretch">
              <div className="border rounded shadow-md lg:mx-6" style={{ "height": "100%" }}>
                <div className="flex flex-col">
                  <div className="overflow-hidden" style={{ "height": "325px" }}>
                    <Img
                      fluid={
                        staff.picture.childImageSharp.fluid
                      }
                      alt={staff.name}
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-xl font-semibold tracking-wider">
                      {staff.name}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-gray-600">
                      {staff.title}
                    </p>
                    <p className="text-sm leading-relaxed font-light text-blue-400 mb-1">
                      {staff.email}
                    </p>
                    <IconContext.Provider value={{size:"1.8rem" ,className: "text-blue-800 hover:text-blue-900 mx-auto" }}>
                      <a target="_blank" rel="noopener noreferrer" href={staff.linkedin}>
                          <FaLinkedin />
                        </a>
                    </IconContext.Provider>
                    {/* <p className="text-sm leading-relaxed font-light text-blue-400">
                      {staff.linkedin}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <div className="w-full lg:w-2/3 mx-auto p-4 my-4 border-4 border-red-800 rounded-md text-center font-semibold mb-12">
          <p className='text-center font-bold text-xl mb-4'>Work With Us</p>
          <p className='text-center text-md text-gray-800 mb-8'>We are on the look out for amazing driven people to work with us in this journey</p>
          <button className="bg-red-800 hover:bg-red-900 text-sm lg:text-md text-white w-1/3 rounded-md py-2">Join The Team</button>
          {/* bg-red-800 hover:bg-red-900  text-sm lg:text-md text-white */}
        </div>
      </section>
    
      </div>
      </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutUsPageQuery {
    aboutUs: markdownRemark(frontmatter: { templateKey: { eq: "about-us" } }) {
      frontmatter {
        title
        subtitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        team {
          name
          title
          email
          linkedin
          picture {
            childImageSharp {
              fluid(maxHeight: 420, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      html
    }
  }
`

AboutPage.propTypes = {
  data: PropTypes.object
}