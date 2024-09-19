const TopCategoryCard = ({ categoryTitle, categoryProducts }) => {
  return (
    <div className="border border-gray-300 rounded-2xl shadow-md">
      <div className="p-5">
        <h2 className="capitalize font-semibold text-xl">{categoryTitle}</h2>
        <div className="grid grid-cols-2 gap-2 my-4">
          {categoryProducts &&
            categoryProducts.map((categoryProduct, index) => (
              <div
                className="flex flex-col gap-2 border rounded-xl p-4 shadow-md"
                key={index}
              >
                <div className="w-24 lg:w-32 mx-auto">
                  <img
                    src={categoryProduct.image}
                    className="w-full object-cover"
                    alt="CATEGORYPRODUCT_IMAGE"
                  />
                </div>
                <p className="text-wrap text-center">
                  {categoryProduct.productTitle}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-lightGray px-6 py-5 rounded-2xl rounded-t-none">
        <button className="w-full flex justify-between text-theme">
          <span>View All</span>
          <span>
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
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopCategoryCard;
