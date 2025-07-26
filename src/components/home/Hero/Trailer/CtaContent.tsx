import React from 'react';

const CtaContent = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex flex-col w-full">
          <div>
            <div className="flex items-center justify-between md:flex-col md:items-start">
              <div className="md:mb-3 flex items-center">
                <div className="inline-block text-2xl font-semibold">৳3850</div>
                <del className="ml-2 text-base font-normal md:text-xl">৳5000</del>
                <div className="ml-1">
                  <div className="relative flex items-center">
                    <div
                      className="w-0 h-0 
                          border-t-[12px] border-t-transparent
                          border-r-[12px] border-r-[#F97B53]
                          border-b-[12px] border-b-transparent"
                    ></div>
                    <div className="flex font-semibold gap-2 bg-[#F97B53] text-white h-6 items-center rounded-r-sm px-2 text-sm">
                      1150 ৳ ছাড়
                    </div>

                    <div className="absolute left-2.5 bottom-1.5 w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2"></div>
          </div>

          <div className="overflow-hidden">
            <div className="text-center text-white py-2 px-4 duration-300 cursor-pointer bg-[#1cab55] hover:bg-[#14773b] border-b-3 border-[#14773b] rounded-md">
              Enroll
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaContent;
