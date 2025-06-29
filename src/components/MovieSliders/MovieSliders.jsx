import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SeeAll from "./../Buttons/SeeAll";
import Cards from "./../Cards/Cards";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MovieSliders() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cards = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-[90%] mx-auto my-20 mb-20">
      <div className="w-full flex items-center justify-between flex-row-reverse mb-5">
        <h1 className="font-bold text-white text-2xl">فیلم های پیشنهادی</h1>
        <div className="flex gap-2">
          <button ref={prevRef} className="w-10 h-10 bg-[#1f1f1f] rounded-4xl">
            <FaAngleLeft className="w-full h-7 text-red-400 m-auto" />
          </button>
          <button ref={nextRef} className="w-10 h-10 bg-[#1f1f1f] rounded-4xl">
            <FaAngleRight className="w-full h-7 text-red-400 m-auto" />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={80}
        slidesPerView={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card}>
            <Cards />
          </SwiperSlide>
        ))}
      </Swiper>
      <SeeAll />
    </div>
  );
}

export default MovieSliders;
