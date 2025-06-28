import React from "react";

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
      <div className="flex items-center justify-around">
        <span className="w-full">
          <label htmlFor=""></label>
          <input className="w-[45%]" type="text" placeholder="شماره تلفن خود را وارد کنید" />
        </span>
        <span className="w-full">
          <label htmlFor=""></label>
          <input className="w-[45%]" type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" />
        </span>
      </div>
    </form>
  );
}
