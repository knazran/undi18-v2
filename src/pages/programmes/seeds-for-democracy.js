import React, { useState } from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import sfd_hero from '../../images/sfd-hero.jpg';

import workshop1_1 from '../../images/workshop/workshop1-1.jpg';
import workshop1_2 from '../../images/workshop/workshop1-2.jpg';
import workshop2_1 from '../../images/workshop/workshop2-1.jpg';
import workshop2_2 from '../../images/workshop/workshop2-2.jpg';
import workshop3_1 from '../../images/workshop/workshop3-1.jpg';
import workshop3_2 from '../../images/workshop/workshop3-2.jpg';
import workshop4_1 from '../../images/workshop/workshop4-1.jpg';
import workshop4_2 from '../../images/workshop/workshop4-2.jpg';
import workshop5a_1 from '../../images/workshop/workshop5a-1.jpg';
import workshop5a_2 from '../../images/workshop/workshop5a-2.jpg';
import workshop6_1 from '../../images/workshop/workshop5-1.jpg';
import workshop6_2 from '../../images/workshop/workshop5-2.jpg';
import workshop7_1 from '../../images/workshop/workshop6-1.jpg';
import workshop7_2 from '../../images/workshop/workshop6-2.jpg';

const SFDPage = () => {
  const [workShopID, setWorkshopID] = useState(0);

  const programmeInfo = {
    title: 'Seeds For Democracy',
    mainpitch: [
      `Our flagship education program to develop competences of Malaysian youths on active citizenship, voter education and participation in political, 
      economic and social life through experiential learning and simulations`,
      `The first Seeds For Democracy programme was held on 14 - 17 March 2020 in Putra World Trade Centre (PWTC), Kuala Lumpur 
      and was participated by 150 selected Malaysian youth leaders from across Malaysia `,
      `Organized in collaboration with the Malaysian Reform Initiative (MARI) and United States Agency for International Development.`,
    ],
    intro: [
      `Encourage active participation of young people in socio-political democratic life on the
      local and national level in order to strengthen young people's voices in Malaysia by using
      different tools for empowerment;`,
      `Raise awareness about the learner-centered approach in developing non-formal
      educational activities for young people on the topic of citizenship education;
      `,
      `Foster mutual understanding, solidarity, intercultural learning and intercultural
      dialogue between young people coming from different cultural backgrounds, and to
      provide the opportunity for young people to develop multiplying initiatives to be
      implemented in their communities;`,
      `Share experiences and good practices of citizenship education from the local level
      among different target groups;`,
      `Decentralize activism and citizenship education by empowering and training young
      Malaysians to organize programs in their own local communities`,
    ],
    workshop: [
      {
        key: 0,
        title: 'Empathy Through Leadership Workshop',
        subtitle: `An exploration into the different identities that we hold as individuals. Are identities fixed? Can they change? 
            What are my different identities? These are questions that participants will be able to answer at the end of the activity. `,
        details: [
          `Through the exploration of different identities, the aim is so that participants understand each other 
        better, empathize with those who are different from them and can better understand their own self.
        `,
        ],
        url: null,
        image1: workshop1_1,
        image2: workshop1_2,
      },
      {
        key: 1,
        title:
          'An Introduction to the Federal Government Structure and Decision-making',
        subtitle: `Simulation activity where participants are able to understand the decision-making and lobbying process that takes place for major policy decisions by the Federal Government. 
        Participants will be role-playing in various roles, from the village head, all the way to the Prime Minister of Malaysia.`,
        details: [],
        url:
          'https://drive.google.com/file/d/1FViElJ-poHdEvFRRutV1cck7CusKRa9s/view?usp=sharing',
        image1: workshop2_1,
        image2: workshop2_2,
      },
      {
        key: 2,
        title: 'Community Building Workshop',
        subtitle: `A framework that will help participants to build and run a new community, or analyze and improve an existing community. It identifies the fundamental themes to cover and helps you
        ask the right questions.
        `,
        details: [
          `“Community” means something different to every person. The Nation Building School have developed this tool in the hope of 
          supporting anyone who runs an organization that brings people together and makes them feel like they belong, no matter if it’s an alumni organization, 
          a sports club or an HR department.
          `,
        ],
        url:
          'https://drive.google.com/file/d/11XGflqlYvR9egJXtGgk1PT7oznjMLapB/view?usp=sharing',
        image1: workshop3_1,
        image2: workshop3_2,
      },
      {
        key: 3,
        title: 'How To Speak to Media',
        subtitle: `Participants learned key concepts such as understanding how the media functions, crafting your message to the media, dealing with the media in a 
        professional manner and following up. Participants also went through an interactive session where they practiced media interviews within smaller groups 
        to get a feel of the interview dynamics.
        `,
        details: [],
        url: null,
        image1: workshop4_1,
        image2: workshop4_2,
      },
      {
        key: 4,
        title: 'Digital Campaigning for a Cause',
        subtitle: `Based on the successful journey of Undi18 advocating for a Constitutional Amendment, we wanted to share how to utilize digital campaigning to 
        deliver impactful changes. Together with Xueh Wei from Project Liber8 and Roshinee from Teach For Malaysia, we educated participants on the tips and skills 
        for social media management, creating impactful visuals and planning a campaign.`,
        details: [],
        url: `https://docs.google.com/presentation/d/1xy1cmKT_ybasSh9K43xAZW2yhffI5d2Xd1hSCA4bMkA/edit?usp=sharing`,
        image1: workshop5a_1,
        image2: workshop5a_2,
      },
      {
        key: 5,
        title: 'Negotiation Simulation',
        subtitle: `Participants were invited to participate in a heated negotiation simulation activity with a twist - 
        they had to take the role of someone from a different ethnic identity from their own selves. 
        Discussions were based on a fictional scenario where the Ministry of Education proposes to recognise the UEC for public university admissions in 
        exchange for removing funding from vernacular schools. This manages to get EVERYONE angry. How do you solve this problem? 
        How do you find a win-win solution? How do you overcome different, conflicting identities?`,
        details: [
          `Through this activity, participants learned conflict management, bargaining, and most importantly - 
          learning to empathize with people who are from a different background than you are.`,
        ],
        url: `https://docs.google.com/presentation/d/1xy1cmKT_ybasSh9K43xAZW2yhffI5d2Xd1hSCA4bMkA/edit?usp=sharing`,
        image1: workshop6_1,
        image2: workshop6_2,
      },
      {
        key: 6,
        title: 'Malaysian Changemakers Panel',
        subtitle: `Beyond the workshops for the participants, we wanted them to hear from folks who have made a career out of their passion 
        for social impact or nation-building for Malaysia. Therefore we decided to showcase the various avenues for Malaysian youths to work towards a progressive nation.
        `,
        details: [],
        url: `https://docs.google.com/presentation/d/1xy1cmKT_ybasSh9K43xAZW2yhffI5d2Xd1hSCA4bMkA/edit?usp=sharing`,
        image1: workshop7_1,
        image2: workshop7_2,
      },
    ],
  };
  return (
    <Layout>
      <SEO
        keywords={[
          `undi 18`,
          `malaysia`,
          `youth`,
          `seeds for democracy`,
          `voter education`,
          `youth`,
          `pemuda negara`,
          `digital campaign`,
          `youth empowerment`,
          `electoral reform`,
          `CSO`,
          `political education`,
        ]}
        title='Seeds For Democracy'
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
              <h3 className='text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black'>
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
              data-sal-easing='ease'>
              <img
                className='mx-auto rounded-lg object-center lg:object-right w-full'
                src={sfd_hero}
              />
            </div>
          </div>
        </section>
        <section id='objective'>
          <div className='w-full mt-8 mb-16'>
            <div className='w-20 h-1 rounded-lg self-start bg-red-800 mb-2'></div>
            <div className='py-2'>
              <h3 className='text-xl lg:text-2xl tracking-wider mb-4 text-black'>
                What is Seeds For Democracy?
              </h3>
              <p className='text-md leading-relaxed font-light'>
                An intensive 4-day democracy-building camp with the objective
                to:
              </p>
            </div>

            <ol className='lg:mx-4 list-decimal'>
              {programmeInfo.intro.map((text, idx) => (
                <li
                  key={idx}
                  className='text-md mb-2 leading-relaxed font-light'>
                  {text}
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id='workshop'>
          <div className='w-full mt-8 mb-16'>
            <div className='w-20 h-1 rounded-lg self-start bg-red-800 mb-2'></div>
            <div className='py-2 mb-6'>
              <h3 className='text-xl lg:text-2xl tracking-wider text-black'>
                Workshop Modules
              </h3>
              <p className='text-md leading-relaxed font-light'>
                The modules for the first Seeds for Democracy programme on 14 -
                17 March 2020
              </p>
            </div>

            <div className='lg:flex'>
              <div className='lg:w-1/3'>
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

                        {/* url */}
                        {programmeInfo.workshop[workShopID].url ? (
                          <a
                            className='text-sm font-semibold text-red-800 hover:text-red-900 lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4'
                            href={programmeInfo.workshop[workShopID].url}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Check out module materials →
                          </a>
                        ) : (
                          <p className='text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4'></p>
                        )}

                        {/* Picture */}
                        <div className='w-full lg:flex items-stretch mt-4'>
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
                        </div>
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

export default SFDPage;
