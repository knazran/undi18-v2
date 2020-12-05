const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const path = require(`path`);

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Undi18`,
    description: `Promoting a youth-centric agenda and democratic reforms. Undi18 aims to bridge the gap between politicians, policymakers, 
    and youth. We help Malaysians read and understand policies beyond politics.`,
    author: `Undi18`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/campaigns`,
    //     name: `campaigns`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=2]": "text-3xl lg:text-4xl font-semibold tracking-wider py-2 text-black",
                "heading[depth=3]": "text-xl lg:text-2xl font-semibold tracking-wider py-2 text-black",
                paragraph: "text-md mb-2 leading-relaxed font-light",
              }
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/favicon2.png`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
