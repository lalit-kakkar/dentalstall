import ribbon from "../../assets/product-logo/ribbon.png";
import securePayment from "../../assets/product-logo/secure-payment.png";
import returnBox from "../../assets/product-logo/return-box.png";
import time from "../../assets/product-logo/time.png";
import invoice from "../../assets/product-logo/invoice.png";
import discount from "../../assets/product-logo/discount.png";
import coupon from "../../assets/product-logo/coupon.png";
import timeGreen from "../../assets/product-logo/time-green.png";
import Counter from "../../components/Counter";
import {
  ProductRating,
  Description,
  Highlight,
  Specification,
  Feature,
  Packaging,
  DirectionToUse,
  FAQ,
} from "./index";

const ProductInfo = ({
  productName,
  productDescription,
  rating,
  reviewCount,
  extraAmount,
  gstAmount,
  amount,
  discountedAmount,
  varients,
}) => {
  // benefits icon
  const benefits = [
    { icon: ribbon, title: "Brand Warranty" },
    { icon: securePayment, title: "Secure Payments" },
    { icon: returnBox, title: "upto 7 days returnable" },
    { icon: time, title: "Long Expiry" },
    { icon: invoice, title: "EMI" },
  ];

  return (
    <>
      {/* product details start here  */}
      <div className="mb-5">
        <div>
          <h1 className="font-semibold text-2xl">{productName}</h1>
          <p className="w-full md:w-64 lg:w-[26rem] text-sm">
            {productDescription}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="flex gap-[0.01rem] lg:gap-1">
              {new Array(Math.round(rating)).fill(undefined).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 fill-yellow-400"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="text-gray-300 text-md">
              ({reviewCount > 0 ? reviewCount : 0} reviews)
            </span>
          </div>
        </div>
        <div>
          <small className="text-gray-300">
            ${extraAmount}(Incl. of all taxes)
          </small>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <small className="text-theme font-semibold text-3xl">
              ${discountedAmount}
            </small>
            <small className="text-gray-300">+ ${gstAmount} GST</small>
          </div>
          <div className="flex items-center gap-2">
            <small className="text-gray-300">
              MRP <strike>${amount}</strike>
            </small>
            <small className="text-green-700">40% off</small>
          </div>
        </div>
      </div>
      {/* varients start here  */}
      <div className="mb-5">
        <h2 className="mb-5 font-semibold">Varients</h2>
        {varients &&
          varients.map((varient, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-xl px-3 md:px-3 lg:px-6 py-3 mb-3 shadow-md"
            >
              <div>
                <h3>{varient.productName}</h3>
                <div className="flex items-center flex-wrap gap-1 md:gap-6 lg:gap-8">
                  <div className="flex items-center gap-1">
                    <small className="text-theme font-semibold text-xl">
                      ${varient.discountedAmount}
                    </small>
                    <small className="text-gray-300">
                      + ${varient.gstAmount} GST
                    </small>
                  </div>
                  <div className="flex items-center gap-2">
                    <small className="text-gray-300">
                      MRP <strike>${varient.amount}</strike>
                    </small>
                    <small className="text-green-700">40% off</small>
                  </div>
                </div>
              </div>
              <div>
                <Counter />
              </div>
            </div>
          ))}
      </div>
      {/* benefits start here  */}
      <div className="mb-5">
        <h2 className="mb-5 font-semibold">Benefits</h2>
        <div className="grid grid-cols-5 gap-3">
          {benefits &&
            benefits.map((benefit, index) => (
              <div
                className="flex items-center flex-col gap-1 md:gap-2 lg:gap-2"
                key={index}
              >
                <div className="w-10 h-10 p-2 rounded-md bg-blue-light">
                  <img
                    src={benefit.icon}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h3 className="text-center">{benefit.title}</h3>
              </div>
            ))}
        </div>
      </div>
      {/* offers & coupons  */}
      <div className="mb-5">
        <h2 className="mb-5 font-semibold">Offer & Coupons</h2>
        <div className="border bg-green-light p-6 rounded-xl">
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2">
              <div className="icon w-5 h-5">
                <img src={discount} className="w-full h-full" alt="" />
              </div>
              <div>
                <h2 className="font-semibold uppercase">additional offers</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, alias!
                </p>
              </div>
            </div>
            <div className="flex items-center">
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2">
              <div className="icon w-5 h-5">
                <img src={coupon} className="w-full h-full" alt="" />
              </div>
              <div>
                <h2 className="font-semibold uppercase">Coupons</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, alias!
                </p>
              </div>
            </div>
            <div className="flex items-center">
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2">
              <div className="icon w-5 h-5">
                <img src={timeGreen} className="w-full h-full" alt="" />
              </div>
              <div>
                <h2 className="font-semibold uppercase">emi</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ratione, alias!
                </p>
              </div>
            </div>
            <div className="flex items-center">
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* rating & review  */}
      <ProductRating />
      {/* description  */}
      <Description />
      {/* highlights  */}
      <Highlight />
      {/* specifications  */}
      <Specification />
      {/* feature  */}
      <Feature />
      {/* Packaging  */}
      <Packaging />
      {/* direction to use  */}
      <DirectionToUse />
      {/* faq */}
      <FAQ />
    </>
  );
};

export default ProductInfo;
