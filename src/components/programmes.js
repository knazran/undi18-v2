/* eslint-disable react/prop-types */
import React from "react";

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const Programmes = ({limit}) => {

  const data = useStaticQuery(graphql`
    query ProgramsQuery {
      programs: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "program-post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              templateKey
              description
              url
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(data)
  const { programs } = data;
  let programsArray = [];

  if (limit === null){
    programsArray = programs.edges;
  } else {
    programsArray = programs.edges.slice(0, limit);
  }

  return (
    <div className="lg:flex">
      <div className="my-2 lg:my-4 w-full">
        <div data-sal="slide-up" data-sal-duration="700" data-sal-easing="ease">
          <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-wider">
            What We Do: Impacting Through the Youths
          </h3>
          <p className="text-md lg:text-xl leading-relaxed font-light text-gray-600 mb-8">
            Empowering, educating and engaging Malaysian youth. 
          </p>
        </div>
        <div className="md:flex md:flex-wrap justify-start ">
          {programsArray.map((program) => (
            // What we do card
            <div
              key={program.node.id}
              className="mb-10 lg:mb-0 w-full md:w-1/2 lg:w-1/3 my-4"
            >
              <div className="md:mr-8 lg:mr-10">
                {/* <p className="text-red-800 text-sm lg:text-md mb-2 lg:mb-4 font-semibold tracking-wide">
                  {program.header}
                </p> */}
                  <div className="flex flex-col justify-center" style={{ "height": "350px" }}>
                  <Img
                    // imgStyle={{objectFit: "contain"}}
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "contain" }}
                    fluid={
                      program.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    alt='campaign-img'
                  />
                  </div>
                <h3 className="text-md lg:text-xl mt-4 font-semibold ">
                  {program.node.frontmatter.title}
                </h3>
                <p className="text-sm lg:text-lg mt-1 lg:mt-2 leading-relaxed font-light text-gray-600 mb-4 lg:mb-8">
                  {program.node.frontmatter.description}
                </p>
                {program.node.frontmatter.url ? (
                  <a
                    className="align-right font-bold text-sm text-red-800 hover:text-red-900"
                    href={program.node.frontmatter.url}
                  >
                    Learn More →
                  </a>
                ) : (
                  <a></a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;
