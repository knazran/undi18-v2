import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import Video from '../../components/video';
import SEO from '../../components/seo';
// import saksama from '../../images/saksama.png';

const EducationVideosPage = ({ data }) => {
  const { educationVideo } = data;
  console.log(educationVideo);

//   const campaignInfo = {
//     title: 'Undi Saksama',
//     campaignColor: '#032de5',
//     mainpitch: [
//       `Undi Saksama is a non-partisan electoral reform campaign led by
//       Malaysian youth.`,
//       `Founded upon the democratic principle of ‘one man, one vote, one
//       value’, we aim to establish ourselves as Malaysia’s leading
//       authority on the issues of malapportionment, gerrymandering, and
//       alternative voting systems.`,
//     ],
//     background: [
//       `The fight for equal democratic representation emerged from the outstanding work of electoral reform groups before us. 
//       Undi Saksama wants to push this fight forward by taking on a youth-centric approach. 
//       We believe that there is a need for younger voices in matters relating to electoral reform. `,
//       `To encourage young voices in the movement for electoral reform, we seek to create democratic spaces where young Malaysian voices are welcomed. 
//       The integration of youth voices in the national discussion surrounding electoral reform is in line with Undi 18’s agenda of promoting youth-centric democratic reforms.`,
//     ],
//   };
  return (
    <Layout>
      <SEO
        keywords={[
          `undi 18`,
          `malaysia`,
          `youth`,
          `voter education`,
          `videos`,
          `education`,
          `youth empowerment`,
          `electoral reform`,
          `CSO`,
          `political education`,
        ]}
        title="Online Voter's Education Videos"
      />
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='w-full lg:flex'>
          <div
            className='lg:my-6 w-full lg:w-1/2'
            data-sal='slide-right'
            data-sal-duration='700'
            data-sal-easing='ease'>
            <div
              className='w-20 h-1 rounded-lg self-start bg-red-800'
              //   style={{ backgroundColor: campaignInfo.campaignColor }}
            ></div>
            <h3 className='text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black'>
              Online Voter’s Education Videos
            </h3>
            <p className='text-md mb-2 leading-relaxed font-light'>
              One of Undi 18’s main goals is to increase political literacy in
              Malaysia through voter education. To achieve this, we have created
              animated videos covering topics such as the Malaysian
              Constitution, how government works, democracy, elections and media
              literacy.
            </p>
          </div>
          {/* <div
            className='my-6 w-full lg:w-1/2 flex-grow-0'
            data-sal='slide-left'
            data-sal-duration='700'
            data-sal-easing='ease'>
            <img
              className='mx-auto rounded-lg object-center lg:object-right w-full lg:w-2/3'
              src={saksama}
            />
          </div> */}
        </div>
        <div className='w-full mt-8 mb-16'>
          {/* <div
            className='w-20 h-1 rounded-lg self-start'
            style={{ backgroundColor: campaignInfo.campaignColor }}></div>
          <h3 className='text-xl lg:text-2xl tracking-wider py-2 mb-4 text-black'>
            Background
          </h3> */}
          <div className='lg:flex lg:flex-wrap'>
            <div className='my-2 lg:my-4 w-full '>
              {/* <div className='md:flex md:flex-wrap  md:items-stretch justify-start '> */}

              {educationVideo.edges.map((video) => (
                <div key={video.node.id} className='md:flex mb-6 '>
                  <div
                    className='w-2/3 mx-auto lg:mx-0 lg:w-1/2 pr-8'>
                    <p className="text-red-800 text-md lg:text-lg mb-1 tracking-wide">
                    Video #{video.node.frontmatter.series}
                    </p> 
                    <h3 className='text-xl lg:text-2xl tracking-wider mb-4 text-black font-semibold'>
                        {video.node.frontmatter.title}
                    </h3>
                    <div dangerouslySetInnerHTML={{ __html: video.node.html }}></div>
                    </div>
                  <div
                    className='w-2/3 lg:w-1/2 mx-auto lg:mx-0 p-8'
                    style={{ height: '400px' }}>
                    <Video
                      videoSrcURL={video.node.frontmatter.url}
                      videoTitle={video.node.frontmatter.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EducationVideosPage;

export const pageQuery = graphql`
  query EducationVideoPageQuery {
    educationVideo: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___series] }
      filter: { frontmatter: { templateKey: { eq: "education-videos" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            series
          }
          html
        }
      }
    }
  }
`;

EducationVideosPage.propTypes = {
  data: PropTypes.object,
};
