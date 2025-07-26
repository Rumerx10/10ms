import { FaCheck } from 'react-icons/fa6';

const requirements = ['ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)', 'স্মার্টফোন অথবা পিসি'];

const CourseDetails = () => {
  return (
    <section id="requirements" className="my-6 md:mb-12 md:bg-white py-6 md:py-0">
      <div className="bg-white pb-6 md:pb-0">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">Course details</h2>
        <div className="rounded-md md:border md:p-6 py-2">
          <ul className="space-y-3">
            {requirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheck className="text-[#6294F8] w-6 h-6 shrink-0" />
                <p className="text-base text-gray-800">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
