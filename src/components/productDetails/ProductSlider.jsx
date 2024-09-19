import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import productImage from "../../assets/walcap_product.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";

const ProductSlider = () => {
  const productImages = [
    productImage,
    productImage,
    productImage,
    productImage,
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={5}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        zoom={true}
        modules={[FreeMode, Navigation, Thumbs, Zoom]}
        className="h-96 border border-gray-200 rounded-xl mb-4"
      >
        {productImages &&
          productImages.map((image, index) => (
            <SwiperSlide className="w-full p-4 relative" key={index}>
              <div className="absolute top-4 right-4">
                <div className="flex flex-col items-center gap-3">
                  <button className="bg-white rounded-xl p-2 border shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                  </button>
                  <button className="bg-white rounded-xl p-2 border shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="swiper-zoom-container">
                <img
                  src={image}
                  className="w-52 md:w-60 lg:w-full xl:w-full h-auto object-cover"
                  alt="PRODUCT_IMAGE"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productImages &&
          productImages.map((image, index) => (
            <SwiperSlide
              className="!w-16 md:!w-24 lg:!w-20 xl:w-28 p-2 border rounded-xl"
              key={index}
            >
              <img
                src={image}
                className="w-full h-auto object-cover"
                alt="PRODUCT_IMAGE"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
