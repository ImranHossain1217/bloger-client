import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import LatestPostCard from "./LatestPostCard";

const LatestPostCarousel = () => {
  const [latestPost, setLatestPost] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    fetch("https://bloger-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setLatestPost(data));
  }, []);
  return (
    <Carousel
      responsive={responsive}
      autoPlaySpeed={5000}
      autoPlay={true}
      transitionDuration={500}
      infinite={true}
      className="py-4"
    >
      {latestPost.map((post) => (
        <LatestPostCard key={post._id} post={post} />
      ))}
    </Carousel>
  );
};

export default LatestPostCarousel;
