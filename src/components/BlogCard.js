import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { name, title, author, image, date, _id } = blog;
  return (
    <div>
      <Link to={`/post-details/${_id}`}>
        <div className="card card-compact mx-2 bg-base-100 shadow-md ">
          <figure>
            <img className="h-60 w-full" src={image} alt={title} />
          </figure>
          <div className="card-body">
            <div className="flex gap-2 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={author} alt={name} />
                </div>
              </div>
              <div>
                <p className="font-serif">{name}</p>
                <p>{date}</p>
              </div>
            </div>
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">Read More</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
