import React from "react";
import banner from "../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero font-serif">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <img
          src={banner}
          className="md:w-1/2 rounded-lg h-80 object-cover"
          alt="banner.jpg"
        />
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold">
            Create Your Blog & Share With World.
          </h1>
          <p className="py-6">
            A blog post is any article, news piece, or guide that's published in
            the blog section of a website. A blog post typically covers a
            specific topic or query, is educational in nature, ranges from 600
            to 2,000+ words, and contains other media types such as images,
            videos, infographics, and interactive charts.
          </p>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
