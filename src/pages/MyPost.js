import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import MyPostCard from "../components/MyPostCard";
import { AuthContext } from "../context/AuthProvider";

const MyPost = () => {
  const { user } = useContext(AuthContext);
  const [pageNumber, setPageNumber] = useState(0);
  const postPerPage = 6;
  const pagesVisited = pageNumber * postPerPage;

  const {
    data: posts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-post", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://bloger-server.vercel.app/my-post?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const pageCount = Math.ceil(posts.length / postPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://bloger-server.vercel.app/my-post/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("Your Post Deleted Successfully..!");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-16 px-2 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.slice(pagesVisited, pagesVisited + postPerPage).map((post) => (
          <MyPostCard key={post._id} post={post} handleDelete={handleDelete} />
        ))}
      </div>
      {posts.length > 6 && (
        <div className="flex justify-center items-center mt-10">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
          ></ReactPaginate>
        </div>
      )}
    </div>
  );
};

export default MyPost;
