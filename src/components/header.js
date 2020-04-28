import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";
import logo from "../images/undi18-logo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-white">
      <div className="flex flex-wrap font-body items-center justify-between lg:max-w-4xl  xl:max-w-6xl px-4 py-4 mx-auto md:pt-8 md:pb-4">
        <Link to="/">
          <h1 className="flex items-center text-red-800 no-underline">
            <div className="w-40 mr-2 fill-current">
              <img alt="Logo Image" src={logo}></img>
            </div>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-red-800 border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about-us`,
              title: `About Us`,
            },
            {
              route: `/#programmes`,
              title: `Programmes`,
            },
            {
              route: `/campaigns`,
              title: `Campaigns`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-red-800 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-12"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <AnchorLink
            className="block mt-4 text-red-800 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-12"
            key="events"
            to="/#events"
          >
            Events
          </AnchorLink>
          <AnchorLink
            className="block mt-4 text-red-800 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-12"
            key="media"
            to="/#media"
          >
            Media Mentions
          </AnchorLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
