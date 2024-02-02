import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

function SearchBar() {
  return (
    <div>
      <div className="lg:px-8 md:px-6 px-2 h-20 w-100 flex items-center justify-between">
        <div className="font-semibold flex gap-1 items-center">
          <div className="p-1 rounded-md bg-[#4667e2] text-[white]">
            <IoSettingsSharp className="text-[16px] lg:text-[24px]" />
          </div>
          <h1 className="font-extrabold lg:text-[18px] text-[14px]">
            ZinTools
          </h1>
        </div>
        <div>
          <input
            className="lg:w-[400px] md:w-[350px] w-[210px]  bg-gray-200/80 lg:text-[14px] text-[12px] lg:px-4 px-2 lg:h-[40px] h-[30px] rounded-full"
            type="text"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
        </div>
        <div className="font-semibold text-[12px] lg:text-[16px]">
          <button>Login</button>
          <button className="lg:ml-4 ml-2 lg:px-5 px-3 py-2 lg:py-3 text-white rounded-full bg-[#4667e2] hover:bg-[#3953b4]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
