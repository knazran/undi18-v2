import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-nunito text-gray-900">
      <Header />

      <main className="flex-1 w-full mx-auto md:px-0 md:pt-0">
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
