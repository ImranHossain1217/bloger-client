import React from "react";
import LatestPostCarousel from "./LatestPostCarousel";

const LatestPost = () => {
  return (
    <div className="my-10 px-2">
      <h2 className="text-2xl uppercase font-serif mb-5">Latest Posts</h2>
      <LatestPostCarousel />
    </div>
  );
};

export default LatestPost;
