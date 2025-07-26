"use client";

import { FaCheck } from "react-icons/fa6";


const pointers = [
  "Detailed rules and regulations of each module of the IELTS test",
  "Formats and strategies to ace the IELTS test",
  "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
  "Speaking accurately on any topic in the IELTS speaking test",
  "Time management strategy to get a good band score in the IELTS test",
  "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
];

const Learnings = () => {
  return (
    <section id="pointers" className="mb-6 md:mb-10 bg-[#E5E7EB] md:bg-white py-2 lg:py-6 md:py-0">
      <div className="bg-white pt-6 pb-6 md:pt-0 md:pb-0">
        <div>
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            What you will learn by doing the course
          </h2>

          <div className="rounded-md md:border">
            <div className="pt-2 md:p-6">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                {pointers.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 mb-2">
                    <FaCheck
                      size={20}
                      className="text-[#6294F8] mt-[2px] shrink-0"
                    />
                    <div className="flex-1">{point}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Learnings;
