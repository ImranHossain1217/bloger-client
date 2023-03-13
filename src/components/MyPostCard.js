import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyPostCard = ({ post, handleDelete }) => {
  const { name, title, author, image, date, _id } = post;

  return (
    <div>
      <div className="card card-compact mx-2 bg-base-100 shadow-md ">
        <Link to={`/post-details/${_id}`}>
          <figure>
            <img className="h-60 w-full" src={image} alt={title} />
          </figure>
        </Link>
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
            <Link to={`update-post/${_id}`}>
              <button className="text-green-600 mr-3 text-2xl">
                <FaEdit></FaEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-red-500 text-2xl"
            >
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
