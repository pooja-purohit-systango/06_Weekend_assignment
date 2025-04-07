import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { USERSLIST_URL } from "../constants/constants";

function Header() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accesstoken");

  const handleLogOut = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("islogged");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img
          src="LOGO.png"
          alt="logo"
          className="h-10 w-10 bg-gray-200 p-2 rounded-full shadow-sm"
        />
      </div>

      {accessToken && (
        <nav className="flex items-center space-x-4">
          <Link
            to= {USERSLIST_URL}
            className="text-gray-800 hover:text-black font-medium transition duration-200"
          >
            Dashboard
          </Link>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-lg font-medium transition duration-200"
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
