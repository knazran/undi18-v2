/* eslint-disable react/prop-types */
import React from "react";
import { graphql, Link } from "gatsby"

import Hero from "../components/hero";
import MainPitch from "../components/main-pitch";
import Programmes from "../components/programmes";
import Campaigns from "../components/campaigns";
import MediaMentions from "../components/media-mentions";
import Layout from "../components/layout";
import Partners from "../components/partners";
import SEO from "../components/seo";

import logo from "../images/undi18-logo2.png";
// import overflow_logo from "../images/overflow-logo.png";
// import partner from "../images/partners.jpeg";

export default function IndexPage({ data }) {
  const { posts } = data.campaigns;
  console.log(posts);

  return (
    <Layout>
      <SEO
        keywords={[`undi 18`, `voter education`, `youth`, `pemuda negara`, `digital campaign`, `youth empowerment`, `electoral reform`, `CSO`, `political education`]}
        title="Home"
      />
      {/* <div className="absolute top-0 right-0 w-2/3 md:w-2/5 lg:mx-16" style={{ "zIndex": -100 }}>
        <img src={overflow_logo} alt="overflow-logo" />
      </div> */}
      <section id="hero" className="">
        <Hero />
      </section>

      <section id="main pitch" className="">
        <MainPitch />
      </section>

      <section id="programmes" className="pt-6 lg:pt-12 container mx-auto px-4 py-0 lg:px-0">
        <Programmes limit={3}/>
        <div className='w-full flex justify-center my-4'>
          <Link className='w-2/3 lg:w-1/3' to="/programmes">
            <button className='mx-auto w-full bg-red-800 hover:bg-red-900 text-white rounded-lg py-2 px-4'>See More of Our Programmes</button>
          </Link>
        </div>
        
      </section>
      <div
        className="relative w-full mt-0 lg:mt-12 py-6 bg-black flex flex-col justify-center mx-auto px-4 py-0 lg:px-0"
      >
        <div className="w-32 lg:w-56 self-center mr-3">
          <img src={logo} alt="Undi18" />
        </div>
        <div>

          <h3 className="text-xl lg:text-3xl text-center text-white font-semibold tracking-wider">
            Campaigns for Change
          </h3>
        </div>
      </div>

      <section id="campaigns" className="mt-8 container mx-auto px-4 py-0 lg:px-0">
        <p className="text-md px-4 lg:px-0 lg:text-xl text-center leading-relaxed font-light text-gray-700 mb-6 lg:mb-8">
          Join us in affecting change. Let’s work to build a better Malaysia!
        </p>
        <Campaigns />
      </section>

      <section id="media" className="mt-12 lg:mt-20 container mx-auto px-4 py-0 lg:px-0">
        <MediaMentions />
      </section>

      <section id="partners">
        <div
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="my-12 lg:flex container mx-auto px-4 py-0 lg:px-0"
        >
          <Partners/>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    campaigns: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          description
        }
        excerpt
        id
      }
    }
  }
`
