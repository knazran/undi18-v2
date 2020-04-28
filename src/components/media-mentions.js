import React from "react";

const MediaMentions = () => {
  const media_mentions = [
    {
      key:1,
      category:"News Article",
      title:"Seeds For Democracy - A workspace to educate more about our democratic system",
      url:"Read more at: www.awatni.com"
    },
    {
      key:2,
      category:"News Article",
      title:"Seeds For Democracy - A workspace to educate more about our democratic system",
      url:"Read more at: www.awatni.com"
    },
    {
      key:3,
      category:"News Article",
      title:"Seeds For Democracy - A workspace to educate more about our democratic system",
      url:"Read more at: www.awatni.com"
    },
    {
      key:4,
      category:"News Article",
      title:"Seeds For Democracy - A workspace to educate more about our democratic system",
      url:"Read more at: www.awatni.com"
    },
  ]
  return (
    <div className="my-6 w-full">
      <div className="w-20 h-1 bg-red-800 rounded-lg self-start mb-2"></div>
      <h3 className="text-2xl font-semibold tracking-wider">Media Mentions</h3>
      <div className="lg:flex lg:flex-wrap mt-2">
        {media_mentions.map((media) => (
          // Media Mention Card
          <div key={media.key} className="w-full lg:w-1/2 px-2 ">
            <div className="w-full lg:flex border rounded shadow-md my-4 mr-6">
              <div className="lg:w-1/3">
                <img
                  className="m-0 rounded rounded-r-none lg:object-fill h-0 lg:h-full"
                  src="https://picsum.photos/400/150"
                />
              </div>
              <div className="lg:flex lg:flex-wrap lg:w-2/3 px-4 py-3">
                <div>
                  <h4 className="text-sm leading-none tracking-tight font-semibold text-red-800 mb-2">
                    {media.category}
                  </h4>
                  <h3 className="text-md tracking-wide leading-snug font-bold mb-4">
                    {media.title}
                  </h3>
                </div>
                <div className="self-end ">
                  <p className="text-sm text-gray-700 tracking-tight">
                    Read more at: {media.url}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaMentions;
