import { FaPeopleArrows } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
export default function Information() {
  return (
    <div className="flex justify-around items-center">
      <div className="w-50 h-40">
        <span className="flex items-center flex-row-reverse">
          <FaThLarge className="text-red-400 ml-1" />
          <h1 className="font-bold text-white">:دسته بندی</h1>
          <p className="text-white">data</p>
        </span>
      </div>
      <div className="w-50 h-40">
        <span className="flex items-center flex-row-reverse">
          <FaRegClock className="text-red-400 ml-1" />
          <h1 className="font-bold text-white">:سابقه بازیگری</h1>
          <p className="text-white">data</p>
        </span>
      </div>
      <div className="w-50 h-40">
        <span className="flex items-center flex-row-reverse">
          <FaRulerVertical className="text-red-400 ml-1" />
          <h1 className="font-bold text-white">:قد</h1>
          <p className="text-white">data</p>
        </span>
      </div>
      <div className="w-50 h-40">
        <span className="flex items-center flex-row-reverse">
          <FaPeopleArrows className="text-red-400 ml-1" />
          <h1 className="font-bold text-white">:سن</h1>
          <p className="text-white">data</p>
        </span>
      </div>
    </div>
  );
}
