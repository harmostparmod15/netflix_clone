import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl  md:text-6xl font-bold "> {title}</h1>
      <p className="hidden md:inline-block  py-6 text-lg w-2/6">{overview}</p>
      <div className="">
        <button className="bg-white py-1  md:py-4 text-xl text-black hover:bg-opacity-80  px-3 md:px-12  rounded-md mt-4 md:mt-0">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500  p-4 text-xl text-white  px-12 mx-2 bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
