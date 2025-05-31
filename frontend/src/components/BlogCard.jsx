import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <article className="flex w-full flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-4 sm:p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white transition-shadow hover:shadow-[12px_12px_0_0_#000]">
      <div className="mb-2 flex items-center gap-x-2 text-xs">
        <time 
          className="border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out transform hover:scale-110" 
          dateTime={new Date(blog.createdAt).toISOString().split('T')[0]}
        >
          {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </time>
        <span className="relative z-10 border-2 border-black bg-red-500 px-3 py-1 font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300">Blog Post</span>
      </div>
      <div className="group relative">
        <h3 className="group-hover:text-red-500 mt-3 text-lg sm:text-xl md:text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
          <Link to={`/blog/${blog._id}`}>
            <span className="absolute inset-0 max-w-xs" />
            {blog.title}
          </Link>
        </h3>
        <p className="text-sm sm:text-base mt-4 sm:mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
          {blog.content.slice(0, 150)}...
        </p>
      </div>
      <div className="relative mt-8 flex items-center justify-between w-full">
        <div className="text-sm leading-6">
          <p className="font-black text-black transition-all duration-500 ease-in-out transform hover:scale-110">
            <span className="hover:text-red-500">
              {blog.authorName.toUpperCase()}
            </span>
          </p>
          <p className="font-bold text-gray-700 transition-all duration-500 ease-in-out transform hover:text-gray-500">
            Author
          </p>
        </div>
        <Link 
          to={`/blog/${blog._id}`}
          className="group relative inline-flex items-center justify-center border-4 border-black bg-red-500 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 active:translate-x-1 active:translate-y-1"
          style={{ boxShadow: '4px 4px 0 0 #000' }}
        >
          READ
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;