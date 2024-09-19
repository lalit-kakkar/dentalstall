import Brand1 from "../../assets/brand-logo/brand-1.png";
import Brand2 from "../../assets/brand-logo/brand-2.png";
import Brand3 from "../../assets/brand-logo/brand-3.png";
import Brand4 from "../../assets/brand-logo/brand-4.png";
import Brand5 from "../../assets/brand-logo/brand-5.png";
import Brand6 from "../../assets/brand-logo/brand-6.png";
import Brand7 from "../../assets/brand-logo/brand-7.png";
import { BrandCard } from "./index";

const BrandSection = () => {
  const brands = [
    { image: Brand1, name: "apple dental", bgColor: "#E4FFC5" },
    { image: Brand2, name: "russia TOR VM", bgColor: "#D5E3FF" },
    { image: Brand3, name: "astek innovations", bgColor: "#FFE5FA" },
    { image: Brand4, name: "kagayaki", bgColor: "#D9EDFF" },
    { image: Brand5, name: "DB orthodontics", bgColor: "#DCF6FF" },
    { image: Brand6, name: "anycubic", bgColor: "#E2EEFF" },
    { image: Brand7, name: "eighteen", bgColor: "#E4F2FF" },
  ];
  return (
    <div className="bg-white py-20">
      <div className="w-[95%] mx-auto p-2 lg:p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-semibold text-xl">Top Brands Deal</h2>
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
          {brands &&
            brands.map((brand, index) => <BrandCard key={index} {...brand} />)}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
