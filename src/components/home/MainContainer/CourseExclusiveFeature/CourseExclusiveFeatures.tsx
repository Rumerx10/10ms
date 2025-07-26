import CourseExclusiveFeatureCard from "./CourseExclusiveFeatureCard";

const features = [
  {
    title: 'ভিডিও লেকচার',
    points: [
      'IELTS Academic ও General Training নিয়ে আলোচনা',
      'Reading, Writing, Listening ও Speaking এর Overview & Format',
      'প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি',
      'ভিডিওর সাথে প্র্যাকটিসের সুযোগ',
    ],
    image: '/CourseExclusiveFeatures/1.png',
  },
  {
    title: 'Reading ও Listening Mock Tests',
    points: [
      '10 Reading & 10 Listening Mock Tests',
      'Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স',
      'উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট',
      'যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট',
    ],
    image: '/CourseExclusiveFeatures/2.png',
  },
];



const CourseExclusiveFeatures = () => {
  return (
    <section id="instructor" className="space-y-8">
      <h2 className="text-xl font-semibold text-black">Course Exclusive Feature</h2>

      {features.map((feature, idx) => (
        <CourseExclusiveFeatureCard
          key={idx}
          title={feature.title}
          points={feature.points}
          image={feature.image}
        />
      ))}
    </section>
  );
};

export default CourseExclusiveFeatures;
