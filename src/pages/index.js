import React from "react";

import Hero from "../components/hero";
import MainPitch from "../components/main-pitch";
import Programmes from "../components/programmes";
import Campaigns from "../components/campaigns";
import MediaMentions from "../components/media-mentions";
import Layout from "../components/layout";
import Partners from "../components/partners";
import SEO from "../components/seo";

import logo from "../images/undi18-logo2.png";
// import partner from "../images/partners.jpeg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chime`, `visitor management system`, `visitor`, `malaysia`]}
        title="Home"
      />

      <section id="hero" className="">
        <Hero />
      </section>

      <section id="main pitch" className="mt-8 lg:mt-12">
        <MainPitch />
      </section>

      <section id="programmes" className="pt-6 lg:pt-12 mt-8 ">
        <Programmes />
      </section>
      <div
        className="relative w-full mt-0 lg:mt-12 py-6 bg-black flex flex-col justify-center"
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

      <section id="campaigns" className="mt-8">
        <p className="text-md px-4 lg:px-0 lg:text-xl text-center leading-relaxed font-light text-gray-700 mb-6 lg:mb-8">
          Join us in affecting change. Let’s work to build a better Malaysia!
        </p>
        <Campaigns />
      </section>

      <section id="media" className="mt-12 lg:mt-20 ">
        <MediaMentions />
      </section>

      <section id="partners">
        <div
          data-sal="slide-up"
          data-sal-duration="700"
          data-sal-easing="ease"
          className="my-12 lg:flex"
        >
          <Partners/>
          {/* <div className="my-6 w-full">
            <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
            <h3 className="text-2xl font-semibold tracking-wider">
              Our Partners & Clients
            </h3>
            <div className="lg:flex lg:flex-col justify-center">
              <img src={partner} alt="Partners" />
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
