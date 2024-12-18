import React from "react";
import { useState, useRef, useEffect } from "react";
import Container from "../components/Container";
import Text from "../components/Text";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";

const SearchBar = () => {
  const [showActivities, setShowActivities] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchOption, setSearchOption] = useState(false);

  const activities = ["Bungee Jump", "Hiking", "Sky Diving", "Kayaking"];

  // Refs for outside click detection
  const activityRef = useRef(null);
  const calendarRef = useRef(null);
  const searchRef = useRef(null);

  // Hook to detect clicks outside a component
  const handleClickOutside = (e) => {
    if (activityRef.current && !activityRef.current.contains(e.target)) {
      setShowActivities(false);
    }
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Container>
        <div className="w-[1330px] mx-auto border px-14 py-4 mb-20 flex bg-white mt-[-180px] z-50 relative rounded-2xl">
          {/* Location */}
          <div className="w-[700px]">
            <Text
              text={"Location"}
              as={"h1"}
              className={
                "text-[28px] font-semibold text-[#1D293F] inline-block border-b-[#F5A623] border-b-4 mb-3"
              }
            />
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your destination"
                className="border-b-2 text-[#99A3AD] w-[200px]"
              />
              <Link to={"/"}>
                <IoLocationOutline className="text-xl ml-5 text-black" />
              </Link>
            </div>
          </div>

          {/* Activity Dropdown */}
          <div className="w-[600px] relative" ref={activityRef}>
            <Text
              text={"Activity"}
              as={"h1"}
              className={
                "text-[28px] font-semibold text-[#1D293F] inline-block border-b-[#F5A623] border-b-4 mb-3"
              }
            />
            <div className="flex items-center">
              <input
                type="text"
                value={selectedActivity}
                readOnly
                placeholder="Select activity"
                className="border-b-2 text-[#99A3AD] w-[110px] cursor-pointer"
                onClick={() => setShowActivities(!showActivities)}
              />
              <IoMdArrowDropdown
                onClick={() => setShowActivities(!showActivities)}
                className="text-xl text-black rounded-full border border-black ml-10 cursor-pointer"
              />
            </div>
            {showActivities && (
              <ul className="absolute top-16 left-0 bg-white border shadow-lg rounded-md w-[200px] z-10">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedActivity(activity);
                      setShowActivities(false);
                    }}
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Calendar Picker */}
          <div className="w-[800px] relative" ref={calendarRef}>
            <Text
              text={"Date"}
              as={"h1"}
              className={
                "text-[28px] font-semibold text-[#1D293F] inline-block border-b-[#F5A623] border-b-4 mb-3"
              }
            />
            <div className="flex items-center">
              <input
                type={showCalendar ? "date" : "text"}
                placeholder="Set date"
                className="border-b-2 text-[#99A3AD] w-[150px] cursor-pointer"
                onFocus={() => setShowCalendar(true)}
              />
              <FaCalendarDays
                className="text-xl ml-[50px] text-[#1D293F] cursor-pointer"
                onClick={() => setShowCalendar(!showCalendar)}
              />
            </div>
          </div>

          {/* Search Option */}
          <div className="w-[330px] ml-auto relative" ref={searchRef}>
            <div
              className="w-[80px] h-[80px] bg-[#28B0A6] rounded-xl relative cursor-pointer"
              onClick={() => setSearchOption(!searchOption)}
            >
              <IoSearch className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            {searchOption && (
              <div className="absolute top-[100px] right-0 bg-white border shadow-lg p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-[200px] p-2 border rounded"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchBar;
