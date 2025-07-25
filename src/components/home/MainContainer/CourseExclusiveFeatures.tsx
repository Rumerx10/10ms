import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const features = [
  {
    title: "ভিডিও লেকচার",
    points: [
      "IELTS Academic ও General Training নিয়ে আলোচনা",
      "Reading, Writing, Listening ও Speaking এর Overview & Format",
      "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
      "ভিডিওর সাথে প্র্যাকটিসের সুযোগ",
    ],
    image: "/CourseExclusiveFeatures/1.png",
  },
  {
    title: "Reading ও Listening Mock Tests",
    points: [
      "10 Reading & 10 Listening Mock Tests",
      "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
      "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
      "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট",
    ],
    image: "/CourseExclusiveFeatures/2.png",
  },
];


const CourseExclusiveFeatures = () => {
  return (
    <div id="instructor" className="space-y-8">
      <h2 className="text-xl font-semibold text-black">Course Exclusive Feature</h2>

      {features.map((feature, idx) => (
        <div key={idx} className="grid md:grid-cols-2 gap-6 p-5 border rounded-md">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#111827]">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#4B5563]">
                  <FaCheck className="text-blue-500 w-5 h-5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src={feature.image}
              alt={feature.title}
              width={250}
              height={200}
              className="rounded-md object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseExclusiveFeatures;
