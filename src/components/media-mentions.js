import React from "react";

const MediaMentions = () => {
  const media_mentions = [
    {
      key: 1,
      category: "News Article",
      title: `How The #Undi18 Bill Went From A "Crazy Idea" To Being Passed In Parliament`,
      date: "17 July 2019",
      source: "SAYS",
      url:
        "https://says.com/my/news/here-s-how-the-undi-18-bill-went-from-a-crazy-idea-to-being-passed-in-parliament",
    },
    {
      key: 2,
      category: "News Article",
      title: "Malaysia parliament to debate move to lower voting age to 18",
      date: "17 Jul 2019",
      source: "16 July 2019",
      url:
        "https://www.aljazeera.com/news/2019/07/malaysia-parliament-debate-move-voting-age-18-190715021731589.html",
    },
    {
      key: 3,
      category: "Interview",
      title: "Economic security of Malaysian youth",
      date: "21 November 2019",
      source: "BFM",
      url:
        "https://www.bfm.my/podcast/evening-edition/evening-edition/economic-security-of-malaysian-youth",
    },
    {
      key: 4,
      category: "Interview",
      title: "Gender parity and inclusivity in politics",
      date: "1 August 2019",
      source: "BFM",
      url:
        "https://www.bfm.my/podcast/evening-edition/evening-edition/gender-parity-and-inclusivity-in-politics",
    },
  ];
  return (
    <div className="my-6 w-full">
      <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
      <h3 className="text-2xl font-semibold tracking-wider">Media Mentions</h3>
      <div className="lg:flex lg:flex-wrap items-stretch mt-2">
        {media_mentions.map((media) => (
          // Media Mention Card
          <div key={media.key} className="w-full lg:w-1/2 px-2 my-4">
            <div
              className="w-full lg:flex flex-col justify-between border rounded shadow-md mr-6"
              style={{ height: "100%" }}
            >
              {/* <div className="lg:w-1/3">
                <img
                  className="m-0 rounded rounded-r-none lg:object-fill h-0 lg:h-full"
                  src="https://picsum.photos/400/150"
                />
              </div> */}
              <div className="px-4 py-3 mb-4">
                <div>
                  <h4 className="text-sm leading-none tracking-tight font-semibold text-red-800 mb-2">
                    {media.category}
                  </h4>
                  <h3 className="text-md tracking-wide leading-snug font-bold ">
                    {media.title}
                  </h3>
                  <span className="text-sm font-light text-gray-600 ">{media.date}</span>
                  <span className="ml-4 text-sm font-light text-gray-600 ">{media.source}</span>
                </div>
              </div>
              <div className="self-end mb-4">
                <a
                  className="p-4 text-sm font-semibold text-red-800 hover:text-red-900 tracking-tight"
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaMentions;
