import ProductImage from "../../assets/categoryItem.png";
import { TopCategoryCard } from "./index";

const TopCategorySection = () => {
  const categoryProducts = [
    {
      image: ProductImage,
      productTitle: "Waldent Extraction Forceps Kit Set of 12",
    },
    {
      image: ProductImage,
      productTitle: "GDC Ordinary Screw Driver",
    },
    {
      image: ProductImage,
      productTitle: "Dental Chip Blower With Nozzle",
    },
    {
      image: ProductImage,
      productTitle: "GDC American Pedo Forceps",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="w-[95%] mx-auto p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-semibold text-xl">Top Categories</h2>
          <button className="text-blue-500 flex items-center font-medium">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TopCategoryCard
            categoryTitle="Instruments"
            categoryProducts={categoryProducts}
          />
          <TopCategoryCard
            categoryTitle="Orthodontics"
            categoryProducts={categoryProducts}
          />
          <TopCategoryCard
            categoryTitle="Waldent"
            categoryProducts={categoryProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCategorySection;
