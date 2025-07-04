import { FaChevronLeft } from "react-icons/fa";

export default function SeeAll() {
  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <button className="flex items-center w-[128px] h-9 border-blue-400 border-[1px] rounded-[8px] text-blue-400 pt-5 pb-5 justify-center cursor-pointer hover:bg-blue-400 hover:text-white">
        <FaChevronLeft className="text-blue-400 mr-2 " />
        مشاهده همه
      </button>
    </div>
  );
}
