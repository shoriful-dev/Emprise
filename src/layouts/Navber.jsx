import  React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo from "../assets/logo.png";
import Menu from "../components/Menu";
import Button from "../components/Button";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Flex className="py-10 items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <Image imgSrc={Logo} imgAlt="logo" />
          </Link>
        </div>
        <div className="ml-28 flex-grow">
          <ul className="flex space-x-10 items-center">
            <Link to="/">
            <Menu menuText="Destination" />
            </Link>
            <Link to="/">
            <Menu menuText="Activities" />
            </Link>
            <Link to="/">
            <Menu menuText="Specials" />
            </Link>
            {showSearch ? (
              <li className="relative flex-grow" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[500px] py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28B0A6]"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#28B0A6]"
                  aria-label="Close search"
                >
                 <FaSearch className="text-2xl absolute left-[-205px] top-[-12px] text-[#28B0A6]" />
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={toggleSearch}
                  className="text-[#1D293F] hover:text-[#28B0A6] transition-colors"
                  aria-label="Open search"
                >
                  <FaSearch className="text-2xl hover:text-[#28B0A6] mt-1" />
                </button>
              </li>
            )}
          </ul>
        </div>
        <div className="space-x-5 ml-auto flex-shrink-0">
          <Link to="/login">
            <Button
              btnText="Login"
              className="hover:bg-[#28B0A6] hover:text-white transition-colors"
            />
          </Link>
          <Link to="/signup">
            <Button btnText="Sign Up" className="bg-[#28B0A6] text-white" />
          </Link>
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;





