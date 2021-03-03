import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import pd_hero from '../../images/pd-main.jpg';

const CareersPage = ({data}) => {
  const {careersMain} = data;
  console.log(careersMain)
  return (
    <Layout>
      <SEO
        keywords={[`undi18`, `careers`, `hiring`, `internship`]}
        title="Undi18 Careers"
      />
      <div className='container mx-auto px-4 lg:px-8'>
      <section id='intro'>
        <div className='w-full lg:flex'>
          <div
            className='lg:my-6 w-full lg:w-1/2'
            data-sal='slide-right'
            data-sal-duration='700'
            data-sal-easing='ease'>
            <div className='w-20 h-1 rounded-lg self-start bg-red-800'></div>
            <h3 className='text-3xl lg:text-4xl font-semibold py-2 text-black'>
              Work with Us
            </h3>
            <p className='text-md mb-2 leading-relaxed font-light'>
              Want to be a part of the Undi 18 team? Check out our open positions!
            </p>
            {/* <p className='text-md mb-2 leading-relaxed font-light'>
              Send your CV to <strong>contact@undi18.org.</strong>
            </p> */}
            <div className='my-4'>
            <a href="https://drive.google.com/file/d/16YDioDGqYzLhqza_tsP6jOgDIn1xPuMf/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className='text-md font-semibold text-red-800 hover:underline'>
              Senior Associate/Associate - Campaigns
            </a>
            </div>
            <div className='my-4'>
            <a href="https://drive.google.com/file/d/16dBjKLQm_aFJAcZ_S-m05CPLtznlHMnx/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer"
            className='text-md font-semibold text-red-800 hover:underline'>
              Project Manager - Demokrasi Lab
            </a>
            </div>
            <div className='my-4'>
            <a href="https://drive.google.com/file/d/16xvc5EO-H0DyhrXoKLJpQxxDBK02MEOC/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer"
            className='text-md font-semibold text-red-800 hover:underline'>
              Senior Associate, Programme Development - Dewan Muda Malaysia
            </a>
            </div>
            <div className='my-4'>
            <a href="https://drive.google.com/file/d/17RS-osyJwYx_R85AdDXVtSdd-IRNpatF/view" 
            target="_blank" rel="noopener noreferrer"
            className='text-md font-semibold text-red-800 hover:underline'>
              Associate, Admin & Operations
            </a>
            </div>

            <div className='mt-12'>
              <p className='text-xs text-gray-700 italic'>
              * Undi18 has a zero tolerance to Sexual Exploitation and Abuse of beneficiaries. Protection from Sexual Exploitation and Abuse (PSEA) is everyone’s responsibility 
              and all employees and team members are required to adhere to the Code of Conduct, that enshrines principles of PSEA, always (both during work hours and 
              outside work hours). Familiarization with, and adherence to, the Code of Conduct is an essential requirement of all employees and team members, 
              in addition to related mandatory training. All employees and team members must ensure that they understand and act in accordance with this clause.
              </p>

            </div>
            
            
          </div>
          <div
            className='my-6 w-full lg:w-1/2 lg:pl-8 flex-grow-0'
            data-sal='slide-left'
            data-sal-duration='700'
            data-sal-easing='ease'>
            <img
              className='mx-auto rounded-lg object-center lg:object-right w-full'
              src={pd_hero}
            />
          </div>
        </div>
      </section>
      <section id="internship">
        <div className="w-full mt-8 mb-16">
          <div className="w-20 h-1 rounded-lg self-start bg-red-800 mb-2"></div>
          <div className="py-2">
            <h3 className="text-xl lg:text-2xl tracking-wider mb-4 text-black">
                Internships
            </h3>
            <p className="text-md mb-4 leading-relaxed font-light">
                Internships will be a duration of three months. 
            </p>
            <h3 className="text-lg mb-2 text-semibold">
                What will the job entail? 
            </h3>
            <p className="text-md mb-4 leading-relaxed font-light">
            Interns will be responsible for assisting Program Managers and Program Associates with Undi 18’s collaborative projects with various stakeholders. 
            This will include managing voter education programs and liaising with multiple stakeholders. Additionally, interns will also help support Undi 18’s campaigns. 
            </p>
            <p className='text-md mb-2 leading-relaxed font-light'>
              Send your CV to <strong>contact@undi18.org.</strong>
            </p>
          </div>
        </div>
      </section>
    
      </div>
      </Layout>
  );
};

export default CareersPage;

export const pageQuery = graphql`
  query CareersPageQuery {
    careersMain: markdownRemark(frontmatter: { templateKey: { eq: "careers-main" } }) {
      frontmatter {
        title
        subtitle
      }
      html
    }
  }
`

CareersPage.propTypes = {
  data: PropTypes.object
}