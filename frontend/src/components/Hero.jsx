import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import AppContext from "../Context/AppContext";

const Hero = () => {
  const { setIsSearched, setSearchFilter } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const handleSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          {" "}
          Over 10,000+ Jobs to Apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          ducimus velit accusamus iusto voluptas vero accusantium totam maxime
          odit consequuntur.
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              ref={titleRef}
              type="text"
              placeholder="Search For Jobs"
              className="max-sm:text-sm p-2 rounded outline-none w-full bg-white text-black"
            />
          </div>

          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              ref={locationRef}
              type="text"
              placeholder="Search For Jobs"
              className="max-sm:text-sm p-2 rounded outline-none w-full bg-white text-black"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 px-6 py-2 rounded text-white m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex ">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="max-sm:w-full text-center text-gray-700 font-medium">
            Trusted By
          </p>
          <img className="max-sm:h-4 h-6" src={assets.microsoft_logo} alt="" />
          <img className="max-sm:h-4 h-6" src={assets.walmart_logo} alt="" />
          <img className="max-sm:h-4 h-6" src={assets.adobe_logo} alt="" />
          <img className="max-sm:h-4 h-6" src={assets.amazon_logo} alt="" />
          <img className="max-sm:h-4 h-6" src={assets.samsung_logo} alt="" />
          <img className="max-sm:h-4 h-6" src={assets.accenture_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
