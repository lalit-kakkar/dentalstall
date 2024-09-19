import { Link } from "react-router-dom";

const ProductCard = ({
  productImage,
  productName,
  rating,
  reviewCount,
  amount,
  discountedAmount,
}) => {
  return (
    <Link to={"/product"}>
      <div className="px-[0.5rem] py-2 lg:p-3 border border-gray-200 rounded-2xl flex flex-col gap-2 bg-white hover:shadow-xl hover:border-gray-100 transition duration-200 ease-in-out">
        <div className="h-32 lg:h-40">
          <img
            src={productImage}
            className="w-full h-full object-contain"
            alt="PRODUCT_IMAGE"
          />
        </div>
        <div className="text-center leading-relaxed">
          <h2 className="capitalize text-left line-clamp-1">{productName}</h2>
          <div className="flex items-center gap-1">
            <div className="flex gap-[0.01rem] lg:gap-1">
              {new Array(Math.round(rating)).fill(undefined).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="text-gray-300 text-sm lg:text-md">
              ({reviewCount > 0 ? reviewCount : 0} reviews)
            </span>
          </div>
          <div className="flex items-center gap-[0.01rem] lg:gap-1">
            <div className="flex items-center gap-[0.01rem] lg:gap-1">
              <h2 className="text-theme text-md lg:text-xl font-semibold text-wrap">
                ${discountedAmount}
              </h2>
              <span className="text-gray-300">
                <strike>${amount}</strike>
              </span>
            </div>
            <p className="text-md lg:text-lg text-green-500 font-medium">
              50% off
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border border-theme p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="stroke-theme"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </button>
          <button className="bg-theme rounded-lg w-full text-gray-100">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
