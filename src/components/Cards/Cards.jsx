import { FaRegClock } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import img from './../../assets/test.png'
export default function Cards() {
  return (
    // <section className="w-[225px] relative">
    //   <figure>
    //     <img src={img} alt="" />
    //   </figure>
    //   <div className="flex justify-between items-center bg-main-bg z-[100%] top-0.5 absolute">
    //     <span className="flex items-center">
    //       <FaRegClock className="mr-2 text-yellow-300" />time
    //     </span>
    //     <span className="flex items-center">
    //         <FaImdb className="text-yellow-300 mr-2"/>rate
    //     </span>
    //   </div>
    // </section>
    <section className="w-[225px] relative flex flex-col items-center">
  <figure>
    <img src={img} alt="" />
  </figure>
  <div className="flex justify-between items-center bg-main-bg absolute bottom-[-18px] w-[95%] px-2 py-1 rounded-[5px]   ">
    <span className="flex items-center text-white">
      <FaRegClock className="mr-2 text-yellow-300" />time
    </span>
    <span className="flex items-center text-white">
      <FaImdb className="text-yellow-300 mr-2" />rate
    </span>
  </div>

</section>

  );
}
