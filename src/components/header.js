import { graphql, useStaticQuery, Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white">
      <div className="flex flex-wrap font-body items-center justify-between lg:max-w-4xl  xl:max-w-5xl px-4 py-8 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-primary-500 no-underline">
            {/* <svg
              className="w-8 h-8 mr-2 fill-current"
              height="64"
              viewBox="0 0 64 64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <svg
            className="w-10 h-10 mr-2 fill-current"
              width="48"
              height="48"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.39867 7.07377C8.25585 4.94248 10.8846 3.88217 13.4745 3.96077L16.0538 6.44961L14.3444 8.21554C12.5417 7.68904 10.4891 8.26251 9.18093 9.83039C7.43941 11.9176 7.67666 14.9768 9.71085 16.6633C11.745 18.3498 14.8059 18.0249 16.5474 15.9376C17.8456 14.3817 18.0442 12.2855 17.2185 10.6206L18.7436 9.04511L21.7672 11.9626C21.912 14.2178 21.1874 16.5495 19.5611 18.4157C16.3304 22.1233 10.7648 22.5899 7.13011 19.4579C3.4954 16.3259 3.16792 10.7813 6.39867 7.07377Z"
                fill="#2614f1"
              />
              <path
                d="M21.9461 3.65449L21.9461 9.81447L15.5421 3.65449L21.9461 3.65449Z"
                fill="#FFBD59"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-primary-500 border border-white rounded md:hidden"
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
              route: `/`,
              title: `Home`,
            },
            {
              route: `/#features`,
              title: `Features`,
            },
            {
              route: `/#pricing`,
              title: `Pricing`,
            },
          ].map((link) => (
            <AnchorLink
              className="block mt-4 text-primary-500 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-12"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </AnchorLink>
          ))}
          <div className="block mt-4 text-primary-500 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-12">
            <a href="https://khairulnazran94.wixsite.com/mysite">Blog</a>
          </div>
        </nav>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="block mt-4 text-primary-500 hover:text-primary-700 no-underline md:inline-block md:mt-0 md:ml-6">
            <a href="https://www.getchime.io/login">Login</a>
          </div>
          <div className="block mt-4 text-white text-base no-underline md:inline-block md:mt-0 md:ml-6 py-2 px-4 rounded bg-primary-500 hover:bg-primary-700">
            Sign Up
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
