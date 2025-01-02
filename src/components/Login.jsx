import { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/admin/login", { username, password });
      const { accessToken } = response.data;
      localStorage.setItem("token", accessToken);
  
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setShowSuccessAlert(true); 
      setTimeout(() => {
        window.location.href = '/hima(12344)atur'; 
      }, 2000);
    } catch (error) {
      console.error(error.response?.data?.msg || error.message);
      setShowErrorAlert(true); 
      setTimeout(() => setShowErrorAlert(false), 3000); 
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Tambahkan token ke header default axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      console.log("Token di-set ke Axios:", token);
    }
  }, []); 

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      {/* Success Alert (Popup) */}
      {showSuccessAlert && (
        <div
          role="alert"
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-4 rounded-lg flex items-center w-72 transition-all duration-500 ease-in-out opacity-100 scale-100"
        >
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 flex-shrink-0 mr-2 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <p className="text-xs font-semibold">Success - Everything went smoothly!</p>
        </div>
      )}

      {/* Error Alert (Popup) */}
      {showErrorAlert && (
        <div
          role="alert"
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-4 rounded-lg flex items-center w-72 transition-all duration-500 ease-in-out opacity-100 scale-100"
        >
          <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 flex-shrink-0 mr-2 text-red-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <p className="text-xs font-semibold">Error - Something went wrong.</p>
        </div>
      )}

      {/* Login Card */}
      <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
        <h1 className="text-center font-bold text-3xl text-white">Login</h1>
        <form onSubmit={handleLogin} className="my-6">
          <input
            className="p-2 my-2 rounded w-full focus:outline-blue-600"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-2 my-2 rounded w-full focus:outline-blue-600"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;




