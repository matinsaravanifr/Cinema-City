import { FaRegClock } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import img from "./../../assets/test.png";

export default function Cards() {
  return (
    <section className="w-[225px] flex flex-col items-center rounded-xl cursor-pointer">
      <figure className="relative w-full">
        <img src={img} alt="" className="w-full" />  
        <div className="flex justify-between items-center bg-main-bg absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[95%] px-2 py-1 rounded-[5px] shadow-lg">
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
      <h1 className="text-white text-sm font-medium text-center mt-5 mb-2">
        Stranger Things
      </h1>
    </section>
  );
}
