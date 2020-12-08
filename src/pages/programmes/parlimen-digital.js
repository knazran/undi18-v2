import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Img from 'gatsby-image';
// import pd_hero from '../../images/pd-main.jpg';

import workshop1_1 from '../../images/pd-stakeholder.jpg';
import workshop2_1 from '../../images/pd-media-1.jpg';
import workshop2_2 from '../../images/pd-media-2.jpeg';
import workshop3_1 from '../../images/pd-young-politician.jpg';
import workshop4_1 from '../../images/pd-inclusive.jpg';
import workshop5a_1 from '../../images/pd-fundraising.jpg';

const ParlimenDigitalPage = ({ data }) => {
  const { parlimenDigital } = data;
  console.log(parlimenDigital);
  const [workShopID, setWorkshopID] = useState(0);

  const programmeInfo = {
    title: 'Parlimen Digital ',
    mainpitch: [
      `During the start of the pandemic, Undi 18 organised “Parlimen Digital” to create a framework on how Parliament can hold parliamentary sessions virtually. 
      Parlimen Digital was the first youth-led virtual Parliament session in the world. The initiative had 222 youth participants to reflect 
      the number of MPs in Parliament. These youths debated and discussed possible policies on a variety of issues by using Microsoft Teams. `,
      `Not only did Parlimen Digital demonstrate that it was possible to hold productive debates virtually, but also that when given the 
      opportunity to express their opinions dynamically, the youth will seize it. `,
    ],
    workshopsInfo: [
      `Engaging Stakeholders Workshop`,
      `Working with the Media Workshop`,
      `#InspireForum: Young Politicians Taking Charge`,
      `Making Advocacy Programs Accessible`,
      `Fundraising for a Cause (Introduction to Grant Writings for Beginners)`,
    ],
    workshop: [
      {
        key: 0,
        title: 'Engaging Stakeholders Workshop',
        subtitle: `In this workshop, participants learnt about the basics of building relationships and 
        forming allies to empower your movement. In addition, participants gained insight into identifying and building partnerships.`,
        details: [],
        url: null,
        images: [workshop1_1],
      },
      {
        key: 1,
        title: 'Working with the Media Workshop',
        subtitle: `During this workshop, participants learnt about best practices of reaching out to the media, preparing press statements, 
        and giving media interviews. Furthermore, participants were taught various key concepts such as understanding how the media functions, 
        crafting your message to the media, dealing with the media in a professional manner, and following up.`,
        details: [],
        url:
          'https://drive.google.com/file/d/1FViElJ-poHdEvFRRutV1cck7CusKRa9s/view?usp=sharing',
        images: [workshop2_1, workshop2_2],
      },
      {
        key: 2,
        title: '#InspireForum: Young Politicians Taking Charge',
        subtitle: `Beyond the workshops for the participants, we wanted them to hear from folks who have made a career out of their passion 
        for social impact or nation-building for Malaysia. We therefore organised this forum to allow participants to learn from these experts.
         Our panellists for this forum were YB Lim Yi Wei, ADUN Kg Tunku; and YB Afif Bahardin, ADUN Seberang Jaya.
        `,
        details: [],
        url:
          'https://drive.google.com/file/d/11XGflqlYvR9egJXtGgk1PT7oznjMLapB/view?usp=sharing',
        images: [workshop3_1],
      },
      {
        key: 3,
        title: 'Making Advocacy Programs Accessible',
        subtitle: `This workshop focused on teaching participants to identify issues surrounding access to programs, and creating 
        tangible solutions to bring back to their organizations. We worked with Majlis Belia OKU (OKU Youth Council) to facilitate this session. 
        `,
        details: [],
        url: null,
        images: [workshop4_1],
      },
      {
        key: 4,
        title:
          'Fundraising for a Cause (Introduction to Grant Writings for Beginners)',
        subtitle: `In this workshop, participants learnt how to identify funding resources for their NGOs and learnt the important skills of budget planning for their projects.`,
        details: [],
        url: `https://docs.google.com/presentation/d/1xy1cmKT_ybasSh9K43xAZW2yhffI5d2Xd1hSCA4bMkA/edit?usp=sharing`,
        images: [workshop5a_1],
      },
    ],
  };
  console.log(programmeInfo.workshop[0].images);
  return (
    <Layout>
      <SEO
        keywords={[
          `undi 18`,
          `malaysia`,
          `youth`,
          `parlimen digital`,
          `voter education`,
          `youth`,
          `pemuda negara`,
          `digital campaign`,
          `youth empowerment`,
          `electoral reform`,
          `CSO`,
          `political education`,
        ]}
        title='Parlimen Digital'
      />
      <div className='container mx-auto px-4 lg:px-8'>
        <section id='intro'>
          <div className='w-full lg:flex '>
            <div
              className='lg:my-6 w-full lg:w-1/2'
              data-sal='slide-right'
              data-sal-duration='700'
              data-sal-easing='ease'>
              <div className='w-20 h-1 rounded-lg self-start bg-red-800'></div>
              <h3 className='text-3xl lg:text-4xl font-semibold py-2 text-black'>
                {programmeInfo.title}
              </h3>
              {programmeInfo.mainpitch.map((pitch, idx) => (
                <p
                  key={idx}
                  className='text-md mb-2 leading-relaxed font-light'>
                  {pitch}
                </p>
              ))}
            </div>
            <div
              className='my-6 w-full lg:w-1/2 lg:pl-8 flex-grow-0'
              data-sal='slide-left'
              data-sal-duration='700'
              data-sal-easing='ease'
              style={{ maxHeight: '400px' }}>
              <Img
                style={{ height: '100%', width: '100%' }}
                imgStyle={{ objectFit: 'contain' }}
                fluid={
                  parlimenDigital.frontmatter.featuredImage.childImageSharp
                    .fluid
                }
                alt='parlimen-digital-logo'
              />
            </div>
          </div>
        </section>
        <section id='objective'>
          {/* <img
              className='mx-auto rounded-lg object-center lg:object-right w-full lg:w-1/2'
              src={pd_hero}
            /> */}
          <div className='w-full my-8'>
            <div className='w-20 h-1 rounded-lg self-start bg-red-800 mb-2'></div>
            <div className='py-2'>
              <h3 className='text-xl lg:text-2xl tracking-wider mb-4 text-black'>
                Akademi Parlimen Digital
              </h3>
              <p className='text-md leading-relaxed font-light'>
                After organising Parlimen Digital, Undi18 held Akademi Parlimen
                Digital, a series of five workshops to empower and educate the
                participants on various aspects of advocacy and how utilise
                their resources to create an impactful response.
              </p>
            </div>

            {/* <ol className='lg:mx-4 list-decimal'>
              {programmeInfo.workshopsInfo.map((text, idx) => (
                <li
                  key={idx}
                  className='text-md mb-2 leading-relaxed font-light'>
                  {text}
                </li>
              ))}
            </ol> */}
          </div>
        </section>
        <section id='workshop'>
          <div className='w-full mt-4 mb-16'>
            <h3 className='text-lg text-black my-4'>
              These five workshops are:
            </h3>
            <div className='lg:flex'>
              <div className='lg:w-1/3 mb-4'>
                {programmeInfo.workshop.map((workshop) => (
                  <div
                    key={workshop.key}
                    className={`clickable border rounded text-sm font-semibold ${
                      workshop.key === workShopID
                        ? 'text-white bg-red-800 hover:bg-red-800'
                        : 'text-red-800 hover:bg-red-100'
                    }  p-4 mb-2`}
                    onClick={() => {
                      setWorkshopID(workshop.key);
                      console.log(workShopID);
                    }}>
                    {workshop.title}
                  </div>
                ))}
              </div>
              <div className='lg:pl-4 lg:w-2/3'>
                {/* {programmeInfo.workshop.map((workshop) => ( */}
                <div
                  key={programmeInfo.workshop[workShopID].key}
                  className='w-full mb-6 lg:mb-0 '>
                  <div
                    className='flex justify-between flex-wrap mx-4 lg:mx-2 '
                    style={{ height: '100%' }}>
                    <div className='p-0 m-0 '>
                      <div className='w-full self-start'>
                        {/* Content */}
                        <h3 className='text-md lg:text-lg font-semibold text-black tracking-wider px-4'>
                          {programmeInfo.workshop[workShopID].title}
                        </h3>
                        <p className='text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4'>
                          {programmeInfo.workshop[workShopID].subtitle}
                        </p>
                        {programmeInfo.workshop[workShopID].details.map(
                          (deets, idx) => (
                            <p
                              key={idx}
                              className='text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4'>
                              {deets}
                            </p>
                          )
                        )}

                        {/* Picture */}
                        {programmeInfo.workshop[workShopID].images.map(
                          (image) => (
                            <div key={image} className='w-full mt-4 p-4'>
                              {/* <div className='lg:w-1/2 p-4'> */}
                              <img
                                className='w-full rounded-md shadow-lg'
                                alt='workshop'
                                src={image}></img>
                            </div>
                          )
                        )}
                        {/* <div className='w-full lg:flex items-stretch mt-4'>
                          <div className='lg:w-1/2 p-4'>
                            <img
                              className='w-full  rounded-md shadow-lg'
                              alt='workshop'
                              src={
                                programmeInfo.workshop[workShopID].image1
                              }></img>
                          </div>
                          <div className='lg:w-1/2 p-4 '>
                            <img
                              className='w-full rounded-md shadow-lg'
                              alt='workshop'
                              src={
                                programmeInfo.workshop[workShopID].image2
                              }></img>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ParlimenDigitalPage;

export const pageQuery = graphql`
  query ParlimenDigitalPageQuery {
    parlimenDigital: markdownRemark(
      frontmatter: { title: { eq: "Parlimen Digital" } }
    ) {
      frontmatter {
        title
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
`;

ParlimenDigitalPage.propTypes = {
  data: PropTypes.object,
};
