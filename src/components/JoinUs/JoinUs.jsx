import React from "react";
import FormJoin from "./FormJoin";

export default function JoinUs() {
  return (
    <section className="w-[90%] m-auto h-[400px] flex items-center flex-row-reverse justify-between border-2">
      <div className="w-[50%] mr-2">
        <h1 className="text-white font-bold text-right text-2xl mb-3">به جمع ما بپیوندید</h1>
        <p className="text-white text-right">
          شما میتوانید با عضویت در سامانه ی ما و با وارد کردن چند اطلاعات دانلود
          های خود را به صورت روزانه و بدون محدودیت انجام بدهدید. در صورتی که
          قبلا در سامانه‌ی ما ثبت نام کرده اید میتوانید با زدن دکمه‌ی ورود
          دوباره وارد صفحه‌ی خود شودید.
        </p>
      </div>
      <div className="w-[50%] border-2 h-full">
        <FormJoin/>
      </div>
    </section>
  );
}
