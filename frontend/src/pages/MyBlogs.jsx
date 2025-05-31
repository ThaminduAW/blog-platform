import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import baseurl from '../baseurl';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const res = await axios.get(`${baseurl}/api/blogs/my-blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching blogs");
        setLoading(false);
      }
    };
    fetchMyBlogs();
  }, [token]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center p-4 sm:p-6 text-lg sm:text-xl font-bold text-gray-700">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center p-4 sm:p-6 text-lg sm:text-xl font-bold text-red-500">{error}</div>
    </div>
  );

  if (blogs.length === 0) return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="text-2xl sm:text-3xl font-black text-black">You haven't created any blogs yet!</h2>
        <Link
          to="/create"
          className="inline-block group relative items-center justify-center border-4 border-black bg-red-500 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1"
        >
          CREATE YOUR FIRST BLOG
          <svg
            className="inline-block ml-2 h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6 text-center">
        <span className="border-4 border-black bg-red-500 p-1 sm:p-2 text-white shadow-[4px_4px_0_0_#000] transition-all duration-500 hover:shadow-[6px_6px_0_0_#000] hover:bg-blue-700 hover:text-yellow-300 inline-block">
          MY BLOGS
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
