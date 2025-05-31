import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import baseurl from '../baseurl';

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseurl}/api/blogs/${id}`);
        setBlog(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching blog");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;
  if (!blog) return <div className="text-center p-6">Blog not found</div>;

  return (
    <article className="max-w-3xl mx-auto my-4 sm:my-8 flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 sm:p-8 mx-4 sm:mx-auto shadow-[8px_8px_0_0_#000]">
      <div className="mb-4 flex items-center gap-x-4 text-sm">
        <time
          className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110"
          dateTime={new Date(blog.createdAt).toISOString().split('T')[0]}
        >
          {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </time>
        <span className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300">Blog Post</span>
      </div>

      <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black transition-all duration-500 ease-in-out transform hover:text-red-500">
        {blog.title}
      </h1>

      <div className="relative mt-8 flex items-center gap-x-2 border-b-4 border-black pb-4 w-full">
        <div className="text-sm leading-6">
          <p className="font-black text-black transition-all duration-500 ease-in-out transform hover:scale-110 hover:text-red-500">
            {blog.authorName.toUpperCase()}
          </p>
          <p className="font-bold text-gray-700">
            Author
          </p>
        </div>
      </div>

      <div className="prose max-w-none mt-6 sm:mt-8 w-full">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-base mb-4 sm:mb-6 leading-6 sm:leading-7 text-gray-800 transition-all duration-500 ease-in-out hover:text-gray-600">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogDetails;
