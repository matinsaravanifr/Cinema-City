// import { FaRegClock } from "react-icons/fa";
// import { FaImdb } from "react-icons/fa";
// import img from "./../../assets/test.png";

// export default function Cards() {
//   return (
//     <section className="w-[225px] flex flex-col items-center rounded-xl cursor-pointer">
//       <figure className="relative w-full">
//         <img src={img} alt="" className="w-full" />
//         <div className="flex justify-between items-center bg-main-bg absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[95%] px-2 py-1 rounded-[5px] shadow-lg">
//           <span className="flex items-center text-white text-sm">
//             <FaImdb className="text-yellow-300 mr-1" />
//             8.7
//           </span>
//           <span className="flex items-center text-white text-sm">
//             <FaRegClock className="mr-1 text-yellow-300" />
//             50 min
//           </span>
//         </div>
//       </figure>
//       <h1 className="text-white text-sm font-medium text-center mt-5 mb-2">
//         Stranger Things
//       </h1>
//     </section>
//   );
// }
import { FaRegClock } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import img from "./../../assets/test.png";

export default function Cards() {
  return (
    <section className="w-[225px] flex flex-col items-center rounded-xl cursor-pointer">
      <figure className="relative w-full group">
        <img src={img} alt="" className="w-full rounded-xl" />

        {/* لایه‌ی هاور شفاف */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <h1 className="text-white text-lg font-semibold text-center mt-10">
            مشاهده جزئیات
          </h1>
          <p className="mt-3 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit
            sapiente enim reiciendis. Quaerat neque, dolore consequatur
          </p>
          <div className="flex justify-between  w-[90%] m-auto ">
            <span className=" w-[50%] flex flex-col ">
              <h1 className="text-white font-bold text-center text-[20px]">ژانر</h1>
              <h2 className="text-white text-center">اکشن کمدی درام عاشقانه</h2>
            </span>
            <span className=" w-[50%] flex flex-col ">
              <h1 className="text-white font-bold text-center text-[20px]">رده سنی</h1>
              <h2 className="text-white text-center">pg-13</h2>
            </span>
          </div>
        </div>

        {/* اطلاعات پایین عکس */}
        <div className="flex justify-between items-center bg-main-bg absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[95%] px-2 py-1 rounded-[5px] shadow-lg z-10">
          <span className="flex items-center text-white text-sm">
            <FaImdb className="text-yellow-300 mr-1" />
            8.7
          </span>
          <span className="flex items-center text-white text-sm">
            <FaRegClock className="mr-1 text-yellow-300" />
            50 min
          </span>
        </div>
      </figure>

      {/* عنوان */}
      <h1 className="text-white text-sm font-medium text-center mt-5 mb-2">
        Stranger Things
      </h1>
    </section>
  );
}
