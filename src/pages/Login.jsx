import React from 'react'
import { useState } from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (username === '' || password === '') {
      setError('Please fill in all fields');
      setLoading(false);
    } else {
      // Here you would make an API call to login
      setTimeout(() => {
        setError('');
        setLoading(false);
        setIsLoggedIn(true);
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-[800px] bg-gray-100 mt-[-10%]">
      {isLoggedIn ? (
        <Link to={'/'}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
         <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4"><MdOutlineDone className='text-6xl text-green-500'/></div>
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Done!</h2>
          <h2 className="text-2xl font-bold mb-4">You are logged in!</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsLoggedIn(false)}
          >
            Back to Home
          </button>
        </div>
        </Link>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            {error && (
              <div className="mb-4 text-red-500">{error}</div>
            )}
            <button
              className={`bg-[#28B0A6] active:scale-150 duration-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
