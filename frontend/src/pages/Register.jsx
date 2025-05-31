import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 sm:mt-20 px-4 sm:px-8">
      <div className="bg-gradient-to-r from-white via-gray-100 to-gray-200 border-4 border-black p-4 sm:p-8 shadow-[8px_8px_0_0_#000]">
        <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 sm:mb-8 text-center">
          <span className="border-4 border-black bg-red-500 p-1 sm:p-2 text-white shadow-[4px_4px_0_0_#000] transition-all duration-500 hover:shadow-[6px_6px_0_0_#000] hover:bg-blue-700 hover:text-yellow-300 inline-block">
            REGISTER
          </span>
        </h2>
        <form onSubmit={handleRegister} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label className="block font-bold text-black">USERNAME</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full border-4 border-black p-1.5 sm:p-2 text-sm sm:text-base font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
            />
          </div>
          <div className="space-y-2">
            <label className="block font-bold text-black">EMAIL</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-4 border-black p-1.5 sm:p-2 text-sm sm:text-base font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block font-bold text-black">PASSWORD</label>
            <input
              type="password"
              placeholder="Choose a password"
              className="w-full border-4 border-black p-1.5 sm:p-2 text-sm sm:text-base font-bold placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center border-4 border-black bg-red-500 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-bold text-white transition-all duration-500 ease-in-out hover:bg-blue-700 hover:text-yellow-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1"
          >
            CREATE ACCOUNT
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-sm sm:text-base font-bold">
          Already have an account?{" "}
          <Link 
            to="/login" 
            className="text-red-500 hover:text-blue-700 transition-all duration-500"
          >
            LOGIN HERE
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
