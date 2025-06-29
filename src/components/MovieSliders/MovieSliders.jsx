import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import SeeAll from "./../Buttons/SeeAll";
import Cards from "./../Cards/Cards";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MovieSliders() {
  const prevRef = useRef(null);
  const nextref = useRef(null);
  const cards = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <div className="w-[90%] mx-auto my-20 mb-20">
      <div className="w-full flex items-center justify-between flex-row-reverse mb-5">
        <h1 className="font-bold text-white text-2xl">فیلم های پیشنهادی</h1>
        <div className="flex gap-2  ">
          <button
            ref={prevRef}
            className="swiper-button-prev-custom w-10 h-10 bg-[#1f1f1f] rounded-4xl "
          >
            <FaAngleLeft className="w-full h-7 text-red-400 m-auto" />
          </button>
          <button
            ref={nextref}
            className="swiper-button-next-custom w-10 h-10 bg-[#1f1f1f] rounded-4xl  text-center"
          >
            <FaAngleRight className="w-full h-7 text-red-400 m-auto" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextref.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {cards.map((i) => {
          return (
            <SwiperSlide>
              <Cards />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SeeAll />
    </div>
  );
}

export default MovieSliders;
