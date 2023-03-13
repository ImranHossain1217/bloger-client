import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = new Date().toISOString().split("T")[0];
    const title = form.title.value;
    const image = form.image.files[0];
    const description = form.description.value;
    const time = new Date();

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
          form.reset();
          const post = {
            name: user?.displayName,
            email: user?.email,
            author: user?.photoURL,
            title,
            image: imgData.data.url,
            description,
            date,
            time,
          };

          fetch("https://bloger-server.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Post Create Successfully..!");
              }
            });
        }
      });
  };
  return (
    <div className="py-10">
      <h2 className="text-xl md:text-3xl font-serif text-center">
        Publish your passions, your way
      </h2>
      <p className="font-serif md:text-xl text-center">
        Create a unique and beautiful blog easily.
      </p>
      <form
        onSubmit={handlePost}
        className="w-96 mx-auto border my-10 rounded-md p-5 shadow-md"
      >
        <h3 className="font-serif my-3 text-xl">Create Post</h3>
        <label className="label font-serif">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Your Title"
          className="input input-bordered w-full"
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
          className="textarea textarea-bordered w-full"
          placeholder="Write description..."
        ></textarea>
        <button className="btn w-full mt-3">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
