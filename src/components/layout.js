import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-nunito text-gray-900">
      <Header />

      <main className="flex-1 w-full lg:max-w-4xl  xl:max-w-5xl mx-auto px-4 py-0 md:px-8 md:py-8 xl:py-12">
        {children}
      </main>

      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
