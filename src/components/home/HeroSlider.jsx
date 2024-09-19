import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import Banner1 from "../../assets/banner/banner_1.jpg";
import Banner2 from "../../assets/banner/banner_2.jpg";
import Banner3 from "../../assets/banner/banner_3.jpg";
import Banner4 from "../../assets/banner/banner_4.jpg";

const HeroSlider = () => {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {banners &&
          banners.map((banner, index) => (
            <SwiperSlide className="w-full h-full" key={index}>
              <img
                src={banner}
                className="h-64 lg:h-full object-fill"
                alt="BANNER_IMAGE"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
