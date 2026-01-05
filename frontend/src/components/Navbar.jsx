import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../Context/AppContext";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);
  return (
    <div className="shadow py-4 ">
      <div className="container  px-4 2xl:px-20 mx-auto flex justify-between items-center ">
        <img onClick={() => navigate("/")} src={assets.logo} alt="" />
        {!user ? (
          <div className="flex gap-4 max-sm:text-sm">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-600"
            >
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="text-white bg-blue-600 px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link to={"/"}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">
              {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
