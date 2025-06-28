import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function FormJoin() {
  return (
    <form action="">
      <div className="flex items-center justify-center gap-x-5 mt-3  ">
        <h1 className="text-red-400 text-2xl font-bold cursor-pointer border-b-2 border-transparent hover:border-b-red-400 hover:border-b-2">
          ورود
        </h1>
        <h1 className="text-red-400 text-2xl font-bold  cursor-pointer border-b-2 border-transparent hover:border-b-red-400">
          ثبت نام
        </h1>
      </div>
      <div className="flex items-center justify-around mt-3">
        <div>
          <h1 className="text-right text-white font-bold text-[20px] mb-2">
            شماره تلفن
          </h1>
          <span className="w-[264px] h-10 border-2 border-white flex items-center flex-row-reverse rounded-[6px]">
            <label className="text-white ml-2 mr-2" htmlFor="">
              <FaPhoneAlt />
            </label>
            <input
              className="w-full text-right text-white outline-none"
              type="text"
              placeholder="شماره تلفن خود را وارد کنید"
            />
          </span>
        </div>
        <div>
          <h1 className="text-right text-white font-bold text-[20px] mb-2">
            نام و نام خانوادگی
          </h1>
          <span className="w-[264px] h-10 border-2 border-white flex items-center flex-row-reverse rounded-[6px]">
            <label className="text-white ml-2 mr-2" htmlFor="">
              <FaRegUser />
            </label>
            <input
              className="w-full text-right text-white outline-none"
              type="text"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
            />
          </span>
        </div>
      </div>
      <div className="w-[565px] h-10 m-auto">
        <h1 className="text-right text-white font-bold text-[20px] mb-2 mt-2 ">
          ایمیل
        </h1>
        <span className=" flex flex-row-reverse items-center border-2 border-white rounded-[6px]  w-full h-full ">
          <label className="text-white ml-2 mr-2" htmlFor="">
            <FaEnvelope />
          </label>
          <input
            className="w-full text-right text-white outline-none"
            type="text"
            placeholder="ایمیل خود را وارد کنید"
          />
        </span>
        <button className="w-[565px] h-10 m-auto bg-red-400 text-white rounded-[5px] mt-3 cursor-pointer ">
          ثبت نام
        </button>
        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-4 text-white">یا</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>
        <button class="w-full flex items-center justify-center gap-2 border cursor-pointer rounded-lg px-4 py-2 text-white hover:bg-gray-100 transition hover:text-black">
          <span >ثبت‌نام با گوگل</span>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
        </button>
      </div>
    </form>
  );
}
