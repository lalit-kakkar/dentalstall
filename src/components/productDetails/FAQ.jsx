const FAQ = () => {
  return (
    <div className="py-3">
      <details className="group bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none border border-gray-300">
          <h2 className="text-black font-semibold text-xl">FAQ</h2>
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
        <p className="group-open:animate-fadeIn text-neutral-600 border rounded-2xl rounded-t-none px-6 py-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquid
          non enim facere quasi porro voluptates. Totam, exercitationem esse,
          consectetur fuga culpa necessitatibus eum nemo impedit magnam iusto
          nam aspernatur dolor officiis dolorum perferendis doloremque suscipit.
          Sunt culpa eos tempore recusandae. At incidunt ipsum culpa facere
          pariatur aut placeat sapiente.
        </p>
      </details>
    </div>
  );
};

export default FAQ;
