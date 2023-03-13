import React, { useState } from "react";
import { useQuery } from "react-query";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import ReactPaginate from "react-paginate";

const Blog = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 6;
  const pagesVisited = pageNumber * blogPerPage;

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch("https://bloger-server.vercel.app/posts");
      const data = await res.json();
      return data;
    },
  });

  const pageCount = Math.ceil(blogs.length / blogPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-10">
      <div class="flex justify-center items-center flex-col">
        <div
          className={`w-full h-40 md:h-72 bg-[url('https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/blog-post-h6.jpg')] bg-contain bg-center`}
        >
          <div
            class="w-ful h-full flex  justify-center items-center 
             bg-black/30 backdrop-brightness-75"
          >
            <span class="text-white  md:w-1/2 text-center">
              <h3 className="font-serif text-xl md:text-4xl">
                Do-it-yourself dosen't mean do it alone.
              </h3>
              <p className="hidden md:block">
                Mediocrem reprimique an vim, veniam tibique omittantur duo ut,
                agam graeci in vim. Quot appetere patrioque te mea, animal
                aliquip te pri
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.slice(pagesVisited, pagesVisited + blogPerPage).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default Blog;
