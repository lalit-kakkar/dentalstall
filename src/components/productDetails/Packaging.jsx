import packageImage from "../../assets/logo/package.png";
const Packaging = () => {
  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">Packaging</h2>
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
          <div className="px-3 flex items-center gap-3">
            <ul>
              <li>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-white border shadow">
                    <img src={packageImage} loading="lazy" alt="PACKAGE" />
                  </div>
                  <p className="text-lg border-l-2 px-2">
                    1 x 453g Alginate (Made in Itlay)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Packaging;
