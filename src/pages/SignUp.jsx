import React from 'react'
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import Button from "../components/Button"; // Assuming Button is a custom component
import { Link } from 'react-router-dom';

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate inputs
    if (!username.trim()) newErrors.username = "Username is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm Password is required.";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    // If no errors, proceed with signup
    if (Object.keys(newErrors).length === 0) {
      setIsSignedUp(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border shadow-2xl bg-white rounded-lg mt-[5%] mb-[5%]">
      {isSignedUp ? (
        <div className="text-center">
          <div className="bg-white border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4">
            <MdOutlineDone className="text-6xl text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Done!</h2>
          <p className="text-gray-700 mb-4">You have successfully signed up.</p>
         <Link to={'/'}>
         <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to Home
          </button>
         </Link>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className={`shadow appearance-none border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <Button btnText={"Sign Up"} className={"bg-[#28B0A6] text-white mx-40"} />
          </form>
        </>
      )}
    </div>
  );
}

export default SignUpForm;
