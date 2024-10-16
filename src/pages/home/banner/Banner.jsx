import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';


const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Ensure navigation buttons are linked after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full text-white/95">
            <div className="md:w-[30%] w-full bg-[#F58515] md:px-16 px-8 md:py-4 py-2 space-y-4 md:flex hidden flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
              Shop Now, Discover Style and Savings
              </h1>
              <p className="text-lg">Exclusive collections with prices you’ll love</p>
              {/* <button className="border-[1px] border-white/50 rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#991747]">
                Shop Now
              </button> */}
            </div>
            <div className="md:w-[70%] w-full md:h-[450px] h-[280px]">
              <img className="object-cover w-full h-full" src={'https://img.freepik.com/free-photo/smiling-women-with-bags-gesturing-camera_23-2147669799.jpg?t=st=1728578571~exp=1728582171~hmac=671c50c0e7e5982fad8150f7a760423d0686aad3de18f390e9a5b69e34e6d384&w=900'} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row flex-col w-full text-white/95">
            <div className="hidden md:w-[30%] w-full bg-[#F58515] md:px-16 px-8 md:py-4 py-2 space-y-4 md:flex flex-col justify-center">
              <h1 className="md:text-3xl text-2xl font-bold leading-tight">
              Unbeatable Prices on Latest Fashion Deals
              </h1>
              <p className="text-lg">Find your perfect fit, fast delivery guaranteed</p>
              {/* <button className="border-[1px] border-white/50 rounded-3xl px-[17px] py-[10px] text-base hover:bg-[#991747]">
                Shop Now
              </button> */}
            </div>
            <div className="md:w-[70%] w-full md:h-[450px] h-[280px]">
              <img className="object-cover object-top w-full h-full" src={"https://img.freepik.com/free-photo/medium-shot-excited-woman-shopping_23-2149313440.jpg?t=st=1728578919~exp=1728582519~hmac=1c327840224fef6f45dd0665ddd83c2dae8358efdcc74a9d53b23729eb222339&w=900"} alt="slide images" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleLeft className="text-white" size={40} />
      </button>
      <button ref={nextRef} className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
        <FaChevronCircleRight className="text-white" size={40} />
      </button>
    </div>
  );
};

export default Banner;