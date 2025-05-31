import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseurl from '../baseurl';

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${baseurl}/api/blogs`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Blog created successfully!");
      navigate("/");
    } catch (err) {
      alert("Failed to create blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-4 sm:my-8 px-4 sm:px-0">
      <article className="flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 sm:p-8 shadow-[8px_8px_0_0_#000]">
        <div className="mb-4 flex items-center gap-x-4 text-sm">
          <span className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white">
            {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white">
            New Blog
          </span>
        </div>

        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black mb-6 sm:mb-8">
          Create Your Blog Post
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="ENTER YOUR TITLE"
              className="w-full border-4 border-black p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-500 ease-in-out transform hover:shadow-[4px_4px_0_0_#000] focus:shadow-[4px_4px_0_0_#000]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <textarea
              placeholder="Write your blog content here..."
              className="w-full h-48 sm:h-64 border-4 border-black p-3 sm:p-4 text-sm sm:text-base font-medium bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-500 ease-in-out transform hover:shadow-[4px_4px_0_0_#000] focus:shadow-[4px_4px_0_0_#000]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center border-4 border-black bg-red-500 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 active:translate-x-1 active:translate-y-1"
              style={{ boxShadow: '4px 4px 0 0 #000' }}
            >
              PUBLISH
              <svg
                className="ml-2 h-5 w-5 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
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
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default CreateBlog;
