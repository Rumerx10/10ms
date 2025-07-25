'use client';

import Image from 'next/image';

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const HowTheCourseLaidOut = () => {
  const features: FeatureItem[] = [
    {
      title: '৫০+ ভিডিও লেকচার',
      description:
        'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
      icon: '/howTheCourseLaidOut/1.png',
    },
    {
      title: '৩৮টি লেকচার শিট',
      description:
        'Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary',
      icon: '/howTheCourseLaidOut/2.png',
    },
    {
      title: 'রিডিং এন্ড লিসিনিং মক টেস্ট',
      description: '10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই',
      icon: '/howTheCourseLaidOut/3.png',
    },
    {
      title: 'ডাউট সল্ভিং লাইভ ক্লাস',
      description: 'সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ',
      icon: '/howTheCourseLaidOut/4.png',
    },
  ];
  return (
    <section id="features">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold leading-[30px] text-black">
          How the course is laid out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 border rounded-md bg-gray-900 p-6 mb-16">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-3 m-1">
              <div className="min-w-[36px]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="mb-4 mx-auto"
                />
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <h3 className="text-[18px] font-medium leading-[26px] text-white">{item.title}</h3>
                <p className="text-[14px] font-normal leading-[22px] text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTheCourseLaidOut;
