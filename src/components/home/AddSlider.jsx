import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AddBanner1 from "../../assets/add-banner/add-1.png";
import AddBanner2 from "../../assets/add-banner/add-2.png";
import AddBanner3 from "../../assets/add-banner/add-3.png";

const AddSlider = () => {
  return (
    <div className="w-[95%] mx-auto">
      <Swiper
        modules={[Pagination, Scrollbar]}
        navigation
        spaceBetween={50}
        slidesPerView={3}
        className="py-20"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          729: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className="w-[32rem] h-56">
          <img
            src={AddBanner1}
            className="w-full h-full rounded-xl object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[32rem] h-56">
          <img
            src={AddBanner2}
            className="w-full h-full rounded-xl object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[32rem] h-56">
          <img
            src={AddBanner3}
            className="w-full h-full rounded-xl object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="w-[32rem] h-56 bg-gray-300 rounded-xl">
          <div className="text-center uppercase font-bold">Banner4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AddSlider;
