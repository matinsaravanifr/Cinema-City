import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchByName() {
  return (
    <div className="w-[90%] h-20 m-auto bg-[#1f1f1f] mt-10 mb-10 flex items-center justify-between flex-row-reverse rounded-[8px]">
      <span>
        <h1 className="text-white text-right font bold text-2xl mr-2">
          جست و جوی ساده فیلم و سریال
        </h1>
      </span>


        <div className="h-[80%] flex items-center bg-main-bg flex-row-reverse ml-2 rounded-[8px]">

        <span className="flex items-center p-2 flex-row-reverse bg-main-bg ml-5 w-[603px]">
          <label className="ml-2" htmlFor="">
            <FaSearch className="mt-1 text-red-400" />
          </label>
          <input
            className="text-white ml-2 w-full text-right outline-none"
            type="text"
            placeholder="نام فیلم، سریال یا انیمیشنی که به در نظر دارید "
            />

        </span>
            <button className="w-[100px] h-[80%] text-white bg-red-400 rounded-[5px] ml-2 cursor-pointer" >
              جستجو
            </button>
            </div>
      </div>

  );
}
