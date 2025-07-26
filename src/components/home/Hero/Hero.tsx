import Image from 'next/image';
import Trailer from './Trailer/Trailer';
import TrailerVideo from './Trailer/TrailerCarousel';
import CheckLists from './Trailer/CheckLists';
import CtaContent from './Trailer/CtaContent';

const Hero = () => {
  return (
    <section className="w-full h-auto pt-16">
      <div className="relative flex items-center justify-center w-full h-[600px] md:h-[300px]">
        <Image src="/bgImage.jpeg" className="object-cover" alt="hero background image" fill />
        <div className="absolute container flex-col justify-between  w-full h-[572px] lg:h-52">
          <div className="md:hidden text-white text-2xl mt-4">
            <TrailerVideo />
          </div>
          <div className="flex flex-col justify-center md:max-w-[504px] lg:max-w-[720px] h-full w-full text-white">
            <p className="text-[22px] font-bold lg:text-4xl mb-2">
              IELTS Course by Munzereen Shahid
            </p>
            <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center mb-2">
              <div className="flex w-[100px] md:w-[130px]">
                <Image src="/star.jpeg" alt="star" width={130} height={24} />
              </div>
              <p>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন) </p>
            </div>
            <p className="text-[#a3a3a3]">
              Get complete preparation of Academic IELTS and General Training IELTS in one course!
              Join our IELTS Course today to achieve your desired band score under the guidance of
              the best IELTS Instructor in the country.
            </p>
          </div>
          <Trailer />
        </div>
      </div>
      <div className="md:hidden h-[456px] w-full">
        <div className='p-4'>
          <CtaContent />
        </div>
        <CheckLists />
      </div>
    </section>
  );
};

export default Hero;
