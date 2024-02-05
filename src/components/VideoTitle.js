import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold "> {title}</h1>
      <p className="py-6 text-lg w-2/6">{overview}</p>
      <div className="">
        <button className="bg-white  p-4 text-xl text-black hover:bg-opacity-80  px-12  rounded-md">
          ▶️ Play
        </button>
        <button className="bg-gray-500  p-4 text-xl text-white  px-12 mx-2 bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
