import img from "./../../assets/American-actor-Leonardo-DiCaprio-2016.webp";
import { FaBookmark } from "react-icons/fa";
import Gifts from "./Gifts";
import Information from "./information";
import ActingData from "./ActingData";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
export default function ActorInfo() {
  return (
    <section className="flex flex-row-reverse mt-10 w-[90%] m-auto">
      <div className="w-[30%]">
        <figure className="border-2 rounded-[8px] border-red-400 w-[300px] h-[100%]">
          <img
            className="rounded-[8px] bg-cover h-full"
            src={img}
            alt="Actor"
          />
        </figure>
      </div>
      <div className="w-full mr-4">
        <span className="w-full flex justify-between items-center">
          <FaBookmark className="text-red-400 cursor-pointer" />
          <h1 className="text-white font-bold text-2xl">Actor name</h1>
        </span>
        <div className="mt-10 flex justify-between">
          <Gifts />
          <Gifts />
          <Gifts />
        </div>
        <Information />
        <ActingData />

        <div className="mt-5">
          <h1 className="text-white font-bold text-right">:درباره</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            dolore! Est harum corrupti incidunt, tenetur hic laborum id saepe
            neque!
          </p>
        </div>
        <div className="flex items-center justify-around flex-row-reverse mt-5">
          <button className="text-white w-50 border-2 p-2 rounded-[5px] bg-red-400 border-red-400">:وضعیت</button>
          <button className="flex items-center justify-around w-50 border-[1px] rounded-[8px] p-2 border-red-400 text-white cursor-pointer">
            <FaRegThumbsUp/>
            این بازیگر را پسندیدم
          </button>
          <button className="flex items-center justify-around w-50  border-[1px] rounded-[5px] p-2 border-red-400 text-white cursor-pointer ">

            <FaRegThumbsDown />
            این بازیگر را نپسندیدم
          </button>
        </div>
      </div>
    </section>
  );
}
