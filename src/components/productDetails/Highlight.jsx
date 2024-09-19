const Highlight = () => {
  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">Highlights</h2>
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
          <ul className="leading-10">
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  asperiores.
                </p>
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  asperiores.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Highlight;
