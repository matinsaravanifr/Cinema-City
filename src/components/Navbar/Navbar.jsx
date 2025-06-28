import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "./../../assets/Frame 289.svg";
export default function Navbar() {
  return (
    <nav className="w-[90%] h-[70px] m-auto border-2 flex items-center flex-row-reverse justify-between ">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <span className="w-[1px] h-[80%] bg-white m-2"></span>
      <ul className=" flex items-center flex-row-reverse gap-4">
        <li className=" text-white  border-b-2 border-b-transparent hover:border-b-2 hover:border-red-400">
          صفحه اصلی
        </li>
        <li className="flex items-center text-white border-b-2 border-b-transparent hover:border-b-2 hover:border-red-400">
          <FaChevronDown className="text-red-400 mr-2" />
          فیلم
        </li>
        <li className="flex items-center text-white border-b-2 border-b-transparent hover:border-b-2 hover:border-red-400">
          <FaChevronDown className="text-red-400 mr-2" />
          سریال{" "}
        </li>
        <li className="flex items-center text-white border-b-2 border-b-transparent hover:border-b-2 hover:border-red-400">
          <FaChevronDown className="text-red-400 mr-2" />
          هنرمندان
        </li>
        <li className="text-white ml-1 border-b-2 border-b-transparent hover:border-b-2 hover:border-red-400">
          درباره ما
        </li>
      </ul>
      <span className="flex items-center flex-row-reverse rounded-[5px]">
        <label htmlFor="">
          <FaSearch className="text-white ml-2 mt-2" />
        </label>
        <input
          type="text"
          className="w-[300px] h-[32px] text-right text-white outline-none mr-1 ml-1"
          placeholder="...جست وجو"
        />
      </span>
      <div className="flex gap-3.5">
        <button className="w-[141px] h-9 text-white bg-red-400 rounded-[5px]">
          ثبت نام
        </button>
        <button className="w-[141px] h-9 text-red-400 rounded-[5px] border-[1px] border-red-400 hover:text-white hover:bg-red-400">
          ورود
        </button>
      </div>
    </nav>
  );
}
