import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="my-4 mx-5 rounded-lg lg:w-64 md:w-72 shadow-xl">
      <img className=" rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-semibold py-2 m-2">{title}</li>
        <li className="m-2">{channelTitle}</li>
        <li className="m-2">{statistics.viewCount / 100000}M views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
