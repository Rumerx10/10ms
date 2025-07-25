"use client";

import Image from "next/image";

const IeltsScoreGuideline = () => {
  return (
    <section id="group_join_engagement" className="mb-8 md:mb-12">
      <div
        className="flex flex-col h-[300px] md:flex-row gap-4 p-4 md:p-8 rounded-xl overflow-hidden bg-cover"
        style={{
          backgroundImage:
            "url('/IeltsScoreGuideline/3.png')",
        }}
      >
        {/* Left Content */}
        <div className="h-10 w-full md:w-1/2">
          <Image
            src="/IeltsScoreGuideline/1.png"
            alt="Pointer"
            width={190}
            height={40}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold text-white">
            IELTS Confirm 7+ Score (Guideline)
          </h2>
          <p className="mt-2 text-base text-[#ededed]">
            IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
          </p>
          <button className="mt-6 bg-white text-black text-sm font-medium px-5 py-2 rounded hover:bg-gray-200 transition">
            ফ্রি PDF Download করুন
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center w-1/2">
          <Image
            src="/IeltsScoreGuideline/2.png"
            alt="Thumbnail"
            width={320}
            height={200}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default IeltsScoreGuideline;
