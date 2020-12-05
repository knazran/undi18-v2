import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Img from 'gatsby-image';

const Campaigns = () => {
  const data = useStaticQuery(graphql`
    query CampaignPostQuery {
      campaignPost: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "campaign-post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              subtitle
              templateKey
              description
              url
              twitter_url
              ig_url
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
  const { campaignPost } = data;
  console.log(campaignPost);

  return (
    <div className='lg:flex lg:flex-wrap'>
      <div className='my-2 lg:my-4 w-full '>
        <div className='md:flex md:flex-wrap  md:items-stretch justify-start '>
          {campaignPost.edges.map((item) => (
            <div key={item.node.id} className='w-full mb-6 md:w-1/2 lg:w-1/3'>
              <div
                className='flex justify-between flex-wrap mx-4 lg:mx-2 border rounded-lg shadow-md'
                style={{ height: '100%' }}>
                <div className='p-0 m-0 '>
                  {/* <img alt="campaign-img" src={item.node.frontmatter.image}></img> */}
                  <Img
                    fluid={
                      item.node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    alt='campaign-img'
                  />
                  <div className='w-full self-start'>
                    <h3 className='text-md lg:text-lg font-semibold text-black tracking-wider mt-4 px-4'>
                      {item.node.frontmatter.title}
                    </h3>
                    <p className='text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4'>
                      {item.node.frontmatter.description}
                    </p>
                  </div>
                </div>
                <div className='w-full'>
                  {/* <a
                    className='self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 hover:bg-red-900 rounded-md text-center font-semibold text-sm lg:text-md text-white'
                    href={item.node.frontmatter.url}>
                    Check us out at:
                  </a> */}
                  <div
                    className='self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 rounded-md text-center font-semibold text-sm lg:text-md text-white'
                    >
                    Check us out at:
                  </div>
                </div>
                <div className='mx-auto flex space-x-2 mb-6'>
                  <IconContext.Provider value={{size:"1.8rem" ,className: "text-red-800 hover:text-red-900" }}>
                    <a target="_blank" rel="noopener noreferrer" href={item.node.frontmatter.twitter_url}>
                        <FaTwitter />
                      </a>
                  </IconContext.Provider>
                  <IconContext.Provider value={{size:"1.8rem" ,className: "text-red-800 hover:text-red-900" }}>
                  <a target="_blank" rel="noopener noreferrer" href={item.node.frontmatter.ig_url}>
                      <FaInstagram />
                    </a>
                </IconContext.Provider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
