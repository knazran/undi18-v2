/* eslint-disable react/prop-types */
import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import feloparlimen from "../images/Group 7 (2).png";
import felo_parlimen2 from "../images/felo-ppl-image.png";

const Programmes = ({ limit }) => {
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
  console.log(data);
  const { programs } = data;
  let programsArray = [];

  if (limit === null) {
    programsArray = programs.edges;
  } else {
    programsArray = programs.edges.slice(0, limit);
  }

  return (
    <div className='lg:flex'>
      <div className='my-2 lg:my-4 w-full'>
        <div data-sal='slide-up' data-sal-duration='700' data-sal-easing='ease'>
          <div className='w-20 h-1 bg-red-800 rounded-lg self-start mb-2'></div>
          <h3 className='text-2xl lg:text-3xl font-semibold tracking-wider'>
            What We Do: Impacting Through the Youths
          </h3>
          <p className='text-md lg:text-xl leading-relaxed font-light text-gray-600'>
            Empowering, educating and engaging Malaysian youth.
          </p>
        </div>
        <section id='felo-parlimen'>
          <div className='w-full mx-auto relative hidden md:block'>
            <img src={feloparlimen} alt='Felo Parlimen' />
            <a href='https://sites.google.com/undi18.org/felo-parlimen-malaysia'>
              <button
                className='absolute bottom-0 py-2 px-8 rounded-lg text-white transform translate-x-24 -translate-y-32'
                style={{ backgroundColor: '#0d4769' }}>
                Mohon Sekarang!
              </button>
            </a>
          </div>
          <div className='w-full mx-auto relative block md:hidden mt-8'>
            <p className='text-blue-800 text-2xl font-semibold capitalize'>FELO PARLIMEN MALAYSIA</p>
            <p className='text-red-800 text-lg'>Permohonan dibuka!</p>
            <img src={felo_parlimen2} alt='Felo Parlimen' />
            <p className='text-sm mt-2 leading-relaxed font-light text-gray-600'>
              Felo Parlimen Malaysia ialah program maya dan pembinaan kapasiti yang akan dijalankan selama lima bulan untuk memperkasakan peranan belia dalam 
              memperjuangkan projek-projek advokasi yang penting di kawasan mereka.
            </p>
            <p className='text-sm mt-2 leading-relaxed font-light text-gray-600'>
              Kami sedang mencari 45 pemimpin belia dari seluruh Malaysia untuk menyertai kurikulum ekslusif kami yang terdiri daripada bengkel atas talian dan peluang &apos;mentoring&apos;
              dengan pemimpin politik tempatan
            </p>
            <p className='text-sm mt-2 leading-relaxed font-light text-gray-600 mb-4 '>
              Sila mohon sebelum 22 Februari 2021, tengah malam!
            </p>
            <a className='flex justify-center' href='https://sites.google.com/undi18.org/felo-parlimen-malaysia'>
              <button
                className='py-2 px-8 rounded-lg text-white mx-auto'
                style={{ backgroundColor: '#0d4769' }}>
                Mohon Sekarang!
              </button>
            </a>
          </div>
        </section>
        <div className='md:flex md:flex-wrap justify-start mt-8'>
          {programsArray.map((program) => (
            // What we do card
            <div
              key={program.node.id}
              className='mb-10 lg:mb-0 w-full md:w-1/2 lg:w-1/3 my-4'>
              <div className='md:mr-8 lg:mr-10'>
                {/* <p className="text-red-800 text-sm lg:text-md mb-2 lg:mb-4 font-semibold tracking-wide">
                  {program.header}
                </p> */}
                <div
                  className='flex flex-col justify-center'
                  style={{ height: '350px' }}>
                  <Img
                    // imgStyle={{objectFit: "contain"}}
                    style={{ height: '100%', width: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={
                      program.node.frontmatter.featuredImage.childImageSharp
                        .fluid
                    }
                    alt='campaign-img'
                  />
                </div>
                <h3 className='text-md lg:text-xl mt-4 font-semibold '>
                  {program.node.frontmatter.title}
                </h3>
                <p className='text-sm lg:text-lg mt-1 lg:mt-2 leading-relaxed font-light text-gray-600 mb-4 lg:mb-8'>
                  {program.node.frontmatter.description}
                </p>
                {program.node.frontmatter.url ? (
                  <a
                    className='align-right font-bold text-sm text-red-800 hover:text-red-900'
                    href={program.node.frontmatter.url}>
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
