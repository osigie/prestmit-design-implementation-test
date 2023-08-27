import { useState } from "react";

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" mb-4  border-b border-black pb-4 text-[15px]  xs:text-lg">
      <div
        className={`flex justify-between items-center gap-x-5 cursor-pointer ${
          isOpen ? "font-semibold" : ""
        }`}
        onClick={toggleAccordion}
      >
        <div>{question}</div>
        <div
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform  bg-brand-10 text-white
rounded-full p-0.5  hover:text-white h-[18px]  xs:h-[20px] w-[18px] xs:w-[20px] flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5i h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};

export default Accordion;
