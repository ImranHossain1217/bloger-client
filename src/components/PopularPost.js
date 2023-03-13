import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";
import PopularPostCard from "./PopularPostCard";

const PopularPost = () => {
  const { data: popularPost = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://bloger-server.vercel.app/popularPosts");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-20 px-2">
      <h2 className="text-2xl font-serif uppercase mb-10">
        Most Popular Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popularPost.slice(0, 6).map((post) => (
          <PopularPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
