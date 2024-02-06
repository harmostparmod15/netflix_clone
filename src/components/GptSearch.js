import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className=" ">
      <div className="fixed -z-10">
        <img className="   " alt="logo" src={BG_URL}></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
