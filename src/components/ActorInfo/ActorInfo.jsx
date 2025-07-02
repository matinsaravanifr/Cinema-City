import img from "./../../assets/American-actor-Leonardo-DiCaprio-2016.webp";
import { FaBookmark } from "react-icons/fa";
import Gifts from "./Gifts";
import Information from "./information";
export default function ActorInfo() {
  return (
    <section className="flex flex-row-reverse mt-10 w-[90%] m-auto">
      <div className="w-[30%]">
        <figure className="border-2 rounded-[8px] border-red-400">
          <img className="rounded-[8px]" src={img} alt="Actor" />
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

      </div>
    </section>
  );
}
