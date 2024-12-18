import React, { useState } from "react";

function QuickLinks() {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div className="border-b border-b-gray-300 py-3 mb-10">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleToggle}
            className="text-xl px-2 rounded-full border-2 border-black font-bold text-gray-800 focus:outline-none"
          >
            {showText ? "–" : "+"}
          </button>
          <div className="flex space-x-10 items-center">
          <h3 className="font-bold text-2xl text-[#1D293F]">QUICK LINKS</h3>
          <p className="text-[#546179] text-2xl">Explore more categories</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-gray-600">
          <span>0123-456-324-54</span>
          <span>|</span>
          <span>hello@entrada.com</span>
        </div>
      </div>

      {/* Toggled Text */}
      {showText && (
        <div className="mt-6 w-[600px] flex-wrap text-gray-700">
          <p className="mb-4 px-4 py-4 border inline-block rounded-xl bg-[#28B0A6] text-white">This is some additional content revealed when the button is clicked.</p>
          <p className="mb-4 px-4 py-4 border inline-block rounded-xl bg-[#28B0A6] text-white">This is some additional content revealed when the button is clicked.</p>
          <p className="mb-4 px-4 py-4 border inline-block rounded-xl bg-[#28B0A6] text-white">This is some additional content revealed when the button is clicked.</p>
          <p className="mb-4 px-4 py-4 border inline-block rounded-xl bg-[#28B0A6] text-white">This is some additional content revealed when the button is clicked.</p>
        </div>
      )}
    </div>
  );
}

export default QuickLinks;

