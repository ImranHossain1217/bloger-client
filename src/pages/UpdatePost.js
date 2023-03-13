import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const myPost = useLoaderData();
  const { title, description, _id } = myPost;
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const description = form.description.value;

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_API}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const updatePost = {
            title: title,
            image: imgData.data.url,
            description: description,
          };
          fetch(`https://bloger-server.vercel.app/my-posts/update-post/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatePost),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Update Your Post..!");
                navigate("/my-posts");
              }
            });
        }
      });
  };
  return (
    <div className="py-10">
      <h2 className="text-xl md:text-3xl font-serif text-center">
        Update your passions, your way
      </h2>
      <form
        onSubmit={handleUpdate}
        className="w-96 mx-auto border my-10 rounded-md p-5 shadow-md"
      >
        <h3 className="font-serif my-3 text-xl">Update Post</h3>
        <label className="label font-serif">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Your Title"
          className="input input-bordered w-full"
          defaultValue={title}
        />
        <label className="label font-serif">Upload Image</label>
        <input
          type="file"
          name="image"
          className="file-input file-input-bordered w-full"
        />
        <label className="label font-serif">Description</label>
        <textarea
          name="description"
          className="textarea textarea-bordered textarea-md w-full"
          placeholder="Write description..."
          defaultValue={description}
          rows="3"
        ></textarea>
        <button className="btn w-full mt-3">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
