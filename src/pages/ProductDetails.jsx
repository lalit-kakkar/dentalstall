import productImage from "../assets/walcap_product.png";
import Breadcrumb from "../components/Breadcrumb";
import { ProductSection } from "../components/home/index";
import {
  ProductInfo,
  ProductOptions,
  ProductSlider,
} from "../components/productDetails/index";

const ProductDetails = () => {
  // product data
  const product = {
    productImage: productImage,
    productName: "Waldent WalCap Amalgam Capsules",
    productDescription:
      " which contains admix particles. WalCap exhibits the best sealing qualities with no danger of excessive delayed.",
    rating: 4.5,
    reviewCount: 11,
    amount: 170,
    discountedAmount: 160,
    extraAmount: 50.24,
    gstAmount: 12.02,
    varients: [
      {
        productName: "Waldent WalCap Amalgam Capsules",
        amount: 170,
        discountedAmount: 160,
        gstAmount: 12.02,
      },
      {
        productName: "Waldent WalCap Amalgam Capsules",
        amount: 170,
        discountedAmount: 160,
        gstAmount: 12.02,
      },
    ],
  };

  return (
    product && (
      <div className="w-[95%] mx-auto pt-2 pb-16">
        <Breadcrumb />
        <div className="flex flex-col md:grid lg:grid xl:grid md:grid-cols-2 md:grid-flow-row-dense lg:grid-cols-2 lg:grid-flow-row-dense xl:grid-cols-4 gap-8 xl:max-h-screen">
          {/* product Images  */}
          <div className="order-1 md:col-span-2 lg:col-span-2 xl:col-span-1 h-fit">
            <ProductSlider />
          </div>
          {/* product details  */}
          <div className="order-3 md:order-2 lg:order-2 xl:order-2 xl:col-span-2 xl:max-h-screen xl:overflow-y-auto no-scrollbar">
            <ProductInfo {...product} />
          </div>
          {/* product price & buy option */}
          <div className="order-2 shadow-xl border border-text-color p-6 rounded-xl h-fit">
            <ProductOptions />
          </div>
        </div>
        {/* going to add similar products  */}
        {/* <ProductSection /> */}
      </div>
    )
  );
};

export default ProductDetails;
