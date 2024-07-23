import { Box } from "lucide-react";
import Image from "next/image";

const Potential = () => {
  return (
    <section className="mx-auto gap-20 flex flex-col items-start justify-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex gap-3">
        <div className="flex flex-col flex-1 gap-8 items-start justify-center">
          <div className="text-xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] hidden md:block">
            Unlock Your Potential with Our Habit Tracker App
          </div>
          <div>
            Our habit tracker app is designed to help you achieve personal
            development goals by tracking your habits and providing valuable
            insights.
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-start items-center">
              <Box />
              <div> Track Your Habits Effortlessly</div>
            </div>
            <div className="flex gap-3 justify-start items-center">
              <Box />
              <div>Gain Valuable Insights for Personal Growth</div>
            </div>
            <div className="flex gap-3 justify-start items-center">
              <Box />
              <div> Stay Motivated and Consistent on Your Journey</div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-[30rem] h-[30rem]">
            <Image
              width={450}
              height={450}
              alt="hero-img"
              className="h-full w-full object-cover"
              src="/hero.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
