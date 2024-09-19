const Specification = () => {
  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">Specification</h2>
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
          <div className="block w-full overflow-x-auto border">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Additional information
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal p-4 uppercase text-left border-r-2">
                    Weight
                  </th>
                  <td className="border-t-0 px-4 align-middle text-sm font-medium text-gray-900 p-4">
                    0.1kg
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal p-4 uppercase border-r-2 text-left">
                    Brand
                  </th>
                  <td className="border-t-0 px-4 align-middle text-sm font-medium text-gray-900 p-4">
                    3M ESPE
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal p-4 uppercase border-r-2 text-left">
                    Variation
                  </th>
                  <td className="border-t-0 px-4 align-middle text-sm font-medium text-gray-900 p-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veritatis repudiandae hic repellendus.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Specification;
