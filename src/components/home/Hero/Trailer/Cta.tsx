import React from 'react';

const Cta = ({ showCta }: { showCta?: boolean }) => {
  return (
    <div
      className={`w-full p-4 md:h-auto ${showCta ? 'fixed lg:hidden bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]' : 'hidden lg:block'}`}
      id="variant"
    >
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
              <div className="relative bg-green-600 whitespace-nowrap button primary text-center md:w-full centered-buttons text-white py-2 px-4 rounded-md">
                Enroll
                <div className="h-1 w-[calc(100%-4px)] bottom-[0.2px] left-1/2 -translate-x-1/2 rounded-b-lg bg-red-500 absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
