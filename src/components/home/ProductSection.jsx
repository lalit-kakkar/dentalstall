import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ProductCard from "./ProductCard";

const ProductSection = ({ bgColor = "", sectionTitle, products }) => {
  return (
    <div className={`${bgColor} py-20`}>
      <div className="w-[95%] mx-auto p-2 lg:p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-semibold text-xl">{sectionTitle}</h2>
          <button className="text-theme flex items-center font-medium">
            View All
            <span className="mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
        <Swiper
          modules={[Scrollbar, Autoplay]}
          spaceBetween={18}
          slidesPerView={6}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-2"
          breakpoints={{
            345: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            729: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1269: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1439: {
              slidesPerView: 6,
              spaceBetween: 18,
            },
          }}
        >
          {products &&
            products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSection;
