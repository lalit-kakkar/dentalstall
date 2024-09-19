import productImage from "../../assets/walcap_product_small.png";
import Counter from "../Counter";

const ProductOptions = () => {
  return (
    <>
      {/* product price info  */}
      <div className="mb-6">
        <h2 className="font-semibold text-theme text-3xl">$120</h2>
        <div className="flex items-center gap-2">
          <small className="text-gray-300">
            MRP <strike>$170</strike>
          </small>
          <small className="text-green-400">40% off</small>
        </div>
      </div>
      {/* increment counter  */}
      <div className="mb-6">
        <div className="flex items-center justify-around">
          <span>Update Qty</span>
          <Counter />
        </div>
      </div>
      {/* buy & addtocart button  */}
      <div className="mb-6">
        <div className="flex items-center gap-6">
          <button className="flex-1 border border-theme rounded-xl text-theme py-2 px-3 hover:bg-theme hover:text-gray-100 transition duration-200 ease-in-out">
            Buy Now
          </button>
          <button className="flex-1 bg-theme text-gray-100 rounded-xl py-2 px-3 flex items-center justify-center hover:bg-transparent hover:border hover:border-theme hover:text-theme transition duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="mr-2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
      {/* customized price  */}
      <div className="hidden md:block lg:block mb-6 bg-green-lighter p-6 rounded-xl">
        <div className="w-16 mx-auto mb-4">
          <img
            src={productImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="mb-5">
          <p className="font-semibold">
            Looking to purchase Office Chairs in bulk?
          </p>
          <ul>
            <li>
              <div className="flex items-center gap-2">
                <div className="bg-green-dark rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Purchase item in bulk quantity</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <div className="bg-green-dark rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Get at best price for your business</p>
              </div>
            </li>
          </ul>
        </div>
        <button className="bg-white border border-theme text-theme rounded-xl py-2 px-3 w-full hover:bg-theme hover:text-gray-100 transition duration-200 ease-in-out">
          Get Customized Price
        </button>
      </div>
      {/* delivery  */}
      <div>
        <form className="flex items-center gap-3 mb-3">
          <div className="relative">
            <input
              type="number"
              className="block w-full h-10 pl-8 pr-3 py-3 border focus:outline-none rounded-xl shadow-sm focus:border-theme"
              placeholder="Enter Your Pincode"
            />
            <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 pointer-events-none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </svg>
            </span>
          </div>
          <button type="submit" className="p-2 border rounded-xl">
            Check
          </button>
        </form>
        <div className="flex items-center gap-2">
          <div className="bg-green-dark rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p>COD and Prepaid available at this pincode (110005)</p>
        </div>
      </div>
    </>
  );
};

export default ProductOptions;
