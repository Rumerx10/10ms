import Image from 'next/image';
import Trailer from './Trailer/Trailer';


const Hero = () => {
  return (
    <section className="w-full pt-16">
      <div className="relative  flex items-center justify-center w-full h-[300px]">
        <Image src="/bgImage.jpeg" className="object-cover" alt="hero background image" fill />
        <div className="absolute container w-full h-52">
          <div className="flex flex-col justify-center max-w-[720px] w-full text-white">
            <h1 className="text-4xl mb-2">IELTS Course by Munzereen Shahid</h1>
            <div className="flex gap-2 items-center mb-2">
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
    </section>
  );
};

export default Hero;
