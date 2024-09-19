const DirectionToUse = () => {
  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">
            Directions To Use
          </h2>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              className="stroke-gray-300"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="group-open:animate-fadeIn text-neutral-600 border rounded-2xl rounded-t-none px-6 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, porro
          ad non quae recusandae sed corporis unde, quas repudiandae assumenda
          accusantium optio et mollitia facere deleniti possimus sequi! Modi,
          neque. Ipsa ea repellendus sed ad, soluta esse quasi optio et fuga
          aliquid expedita, cupiditate accusantium dignissimos facere molestiae
          iste? Provident?
        </div>
      </details>
    </div>
  );
};

export default DirectionToUse;
