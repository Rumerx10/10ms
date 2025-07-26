import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

const CourseExclusiveFeatureCard = ({
  title,
  points,
  image,
}: {
  title: string;
  points: string[];
  image: string;
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-5 border rounded-md">
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-[#111827]">{title}</h3>
        <ul className="space-y-2">
          {points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-[#4B5563]">
              <FaCheck className="text-blue-500 w-5 h-5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={200}
          className="rounded-md object-contain"
        />
      </div>
    </div>
  );
};


export default CourseExclusiveFeatureCard;