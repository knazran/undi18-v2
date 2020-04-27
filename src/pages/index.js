import React from "react";

import Hero from "../components/hero";
import Process from "../components/process";
import Features1 from "../components/features1";
import Features2 from "../components/features2";
import AttentionCard from "../components/attention-card";
import CTACard from "../components/cta-card";
import PricingCards from "../components/pricing";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`chime`, `visitor management system`, `visitor`, `malaysia`]}
        title="Home"
      />

      <section id="hero" className="">
        <Hero/>
      </section>

      <section id="process" className="mt-16 lg:mt-32 ">
        <Process/>
      </section>

      <section id="features" className="pt-6 lg:pt-12 mt-6 lg:mt-12">
        <Features1/>
      </section>
      <section id="features1" className="mt-8 lg:mt-16">
        <Features2/>
      </section>

      <section id="pricing" className="pt-6 lg:pt-12 mt-6 lg:mt-12">
        <PricingCards/>
      </section>

      <section id="attention-card" className="mt-12 lg:mt-20 ">
        <AttentionCard/>
      </section>

      <section id="cta" className="mt-12 lg:mt-24 mb-16 lg:mb-8">
        <CTACard/>
      </section>
    </Layout>
  );
}

export default IndexPage;
