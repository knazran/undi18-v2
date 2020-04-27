import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Features1 from "../components/features1";
import Features2 from "../components/features2";

const FeaturesPage = () => {
  return (
    <Layout>
      <SEO
        keywords={[`chime`, `visitor management system`, `visitor`, `malaysia`]}
        title="Features"
      />
       <section id="features" className="mb-12 lg:mb-20">
        <Features1/>
      </section>
      <section id="pricing" className="mb-12 lg:mb-20">
        <Features2/>
      </section>
    </Layout>
  );
};

export default FeaturesPage;
