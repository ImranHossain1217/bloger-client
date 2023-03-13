import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const singlePost = useLoaderData();
  const { name, title, author, image, date, description } = singlePost;
  return (
    <div className="px-2">
      <div className="hero md:py-28">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="md:w-2/5 md:h-80 rounded-lg" alt="" />
          <div className="md:ml-5">
            <h1 className="text-xl md:text-3xl font-serif">{title}</h1>
            <div className="mt-4 font-serif">
              <strong>Description: </strong>
              <p>{description}</p>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={author} alt={name} />
                </div>
              </div>
              <div>
                <p className="font-serif">{name}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
