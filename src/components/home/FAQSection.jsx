import FAQIcon from "../../assets/logo/direct-right.svg";

const FAQSection = () => {
  const FAQS = [
    {
      question:
        "Dental stall : Best Online Dental Shop For Dental Products,Equipment & Dental Materials Online",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus inventore, quaerat tempora magnam temporibus repellat minus placeat, nesciunt fugiat, laborum natus voluptate sit iure velit ipsam provident illum. Similique dolorem ratione rem vero nulla labore fugit quibusdam quidem. Voluptatum ratione officia corrupti dolores iste obcaecati esse non labore ipsam.",
    },
    {
      question: "EMI on Debit Cards",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus inventore, quaerat tempora magnam temporibus repellat minus placeat, nesciunt fugiat, laborum natus voluptate sit iure velit ipsam provident illum. Similique dolorem ratione rem vero nulla labore fugit quibusdam quidem. Voluptatum ratione officia corrupti dolores iste obcaecati esse non labore ipsam.",
    },
    {
      question: "What Can You Buy From Dentalstall – Best Online Dental Shop?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus inventore, quaerat tempora magnam temporibus repellat minus placeat, nesciunt fugiat, laborum natus voluptate sit iure velit ipsam provident illum. Similique dolorem ratione rem vero nulla labore fugit quibusdam quidem. Voluptatum ratione officia corrupti dolores iste obcaecati esse non labore ipsam.",
    },
    {
      question: "Why Buy Dental Supplies online at Dentalstall.com?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus inventore, quaerat tempora magnam temporibus repellat minus placeat, nesciunt fugiat, laborum natus voluptate sit iure velit ipsam provident illum. Similique dolorem ratione rem vero nulla labore fugit quibusdam quidem. Voluptatum ratione officia corrupti dolores iste obcaecati esse non labore ipsam.",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="w-[95%] mx-auto p-2 lg:p-4">
        <div>
          {FAQS &&
            FAQS.map((FAQ, index) => (
              <div className="py-4" key={index}>
                <details className="group bg-white" open={index == 0 && true}>
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium px-4 lg:px-6 py-5 rounded-2xl group-open:rounded-b-none bg-lightGray border border-gray-100">
                    <div className="flex items-center">
                      <div className="lg:w-7 lg:h-7 p-1">
                        <img
                          src={FAQIcon}
                          className="w-5 h-5 lg:w-full lg:h-full"
                          alt=""
                        />
                      </div>
                      <span className="text-theme font-medium">
                        {FAQ.question}
                      </span>
                    </div>
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
                        className="stroke-theme"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn text-neutral-600 border rounded-2xl rounded-t-none px-6 py-5">
                    {FAQ.answer}
                  </p>
                </details>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
