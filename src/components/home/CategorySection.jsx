import category1 from "../../assets/category-logo/category-1.png";
import category2 from "../../assets/category-logo/category-2.png";
import category3 from "../../assets/category-logo/category-3.png";
import category4 from "../../assets/category-logo/category-4.png";
import category5 from "../../assets/category-logo/category-5.png";
import category6 from "../../assets/category-logo/category-6.png";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    { image: category1, name: "sutures & needles", bgColor: "#E4FFC5" },
    { image: category2, name: "endo post & drills", bgColor: "#D5E3FF" },
    { image: category3, name: "cavity access burs & sets", bgColor: "#D5E3FF" },
    { image: category4, name: "temporary crown materials", bgColor: "#FFE5FA" },
    {
      image: category5,
      name: "superEndo automatic matrices",
      bgColor: "#D9EDFF",
    },
    {
      image: category6,
      name: "dental mouth mirror tops (PK of 10)",
      bgColor: "#DCF6FF",
    },
  ];
  return (
    <div className="w-[95%] mx-auto py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-semibold text-xl">Our Top Categories</h2>
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories &&
          categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
      </div>
    </div>
  );
};

export default CategorySection;
