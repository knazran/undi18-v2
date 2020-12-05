import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
// import saksama from "../images/saksama.png";
// import initiative from "../images/111initiative.jpeg";
// import myhutan from "../images/myhutan.jpeg";
// import senate18 from "../images/senate18.png";

// import { Link } from "gatsby";

const Campaigns = () => {
  const data = useStaticQuery(graphql`
    query CampaignPostQuery {
      campaignPost: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "campaign-post"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              subtitle
              templateKey
              description
              url
              image
            }
          }
        }
      }
    }
  `)
  const {campaignPost} = data;
  console.log(campaignPost)
  // const campaignItems = [
  //   {
  //     key: 1,
  //     title: "Undi Saksama",
  //     subtitle: `A youth campaign to advocate for equal democratic representation for every Malaysian voter. Based on the principle of “Satu Rakyat, Satu Undi, Satu Nilai”, 
  //     we aim to address gerrymandering, malapportionment and alternative voting systems and bring these conversations to the average citizen.`,
  //     image: saksama,
  //     url: "/campaigns/undi-saksama",
  //   },
  //   {
  //     key: 2,
  //     title: "The 111 Initiative",
  //     subtitle: `A youth campaign to build towards 50% women’s representation in Parliament and politics. 
  //     We aim to build a new narrative of women in politics and get more women in positions of power.`,
  //     image: initiative,
  //     url: "https://twitter.com/111_initiative",
  //   },
  //   {
  //     key: 3,
  //     title: "MyHutan",
  //     subtitle: `A youth campaign to institutionalize financing for forest conservation in the Federal Constitution. 
  //     We aim to build a coalition of young Malaysians that are passionate about forest conservation and climate change.`,
  //     image: myhutan,
  //     url: "https://twitter.com/MyHutan",
  //   },
  //   {
  //     key: 4,
  //     title: "Senate 18",
  //     subtitle: `A youth campaign to lower the age of eligibility to become a Senator from 30 to 18 years old. We also hope to bring the Senate Reform conversation to the public.`,
  //     image: senate18,
  //     url: "https://twitter.com/Senate18My",
  //   },
  // ];

  return (
    <div className="lg:flex lg:flex-wrap">
      <div className="my-2 lg:my-4 w-full ">
        <div className="md:flex md:flex-wrap lg:flex-no-wrap md:items-stretch justify-start ">
          {campaignPost.edges.map((item) => (
            <div key={item.node.id} className="w-full mb-6 lg:mb-0 md:w-1/2 lg:w-1/3">
              <div
                className="flex justify-between flex-wrap mx-4 lg:mx-2 border rounded-lg shadow-md"
                style={{ height: "100%" }}
              >
                <div className="p-0 m-0 ">
                  <img alt="campaign-img" src={item.node.frontmatter.image}></img>
                  <div className="w-full self-start">
                    <h3 className="text-md lg:text-lg font-semibold text-black tracking-wider mt-4 px-4">
                      {item.node.frontmatter.title}
                    </h3>
                    <p className="text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4">
                      {item.node.frontmatter.description}
                    </p>
                  </div>
                </div>
                <a
                    className="self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 hover:bg-red-900 rounded-md text-center font-semibold text-sm lg:text-md text-white"
                    href={item.node.frontmatter.url}
                  >
                    Check us out!
                  </a>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="lg:flex lg:flex-wrap">
    //   <div className="my-2 lg:my-4 w-full ">
    //     <div className="md:flex md:flex-wrap lg:flex-no-wrap md:items-stretch justify-start ">
    //       {campaignItems.map((item) => (
    //         <div key={item.key} className="w-full mb-6 lg:mb-0 md:w-1/2 lg:w-1/3">
    //           <div
    //             className="flex justify-between flex-wrap mx-4 lg:mx-2 border rounded-lg shadow-md"
    //             style={{ height: "100%" }}
    //           >
    //             <div className="p-0 m-0 ">
    //               <img alt="campaign-img" src={item.image}></img>
    //               <div className="w-full self-start">
    //                 <h3 className="text-md lg:text-lg font-semibold text-black tracking-wider mt-4 px-4">
    //                   {item.title}
    //                 </h3>
    //                 <p className="text-sm lg:text-md mt-2 leading-relaxed font-light text-gray-700 px-4 mb-4">
    //                   {item.subtitle}
    //                 </p>
    //               </div>
    //             </div>
    //             <a
    //                 className="self-end flex justify-center w-2/3 mx-auto px-4 py-2 my-4 bg-red-800 hover:bg-red-900 rounded-md text-center font-semibold text-sm lg:text-md text-white"
    //                 href={item.url}
    //               >
    //                 Check us out!
    //               </a>
    //             {/* </div> */}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Campaigns;

// export const pageQuery = graphql`
//   query CampaignPostQuery {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "campaign-post"}}}) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             subtitle
//             templateKey
//             description
//             url
//           }
//         }
//       }
//     }
//   }
// `

// Campaigns.propTypes = {
//   data: PropTypes.object
// }