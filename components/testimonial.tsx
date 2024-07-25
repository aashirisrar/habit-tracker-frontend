import { Star, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="mx-auto flex flex-col gap-14 justify-start py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-col gap-6">
        <div className="text-3xl font-bold">Happy Customers</div>
        <div>Hear what our customer say about us</div>
      </div>
      <div className="flex max-md:flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex gap-1">
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
          </div>
          <div className="text-lg font-semibold">
            Our habit tracker app has helped me stay focused and achieve my
            goals. Highly recommended!
          </div>
          <div className="flex max-md:flex-col justify-start gap-6">
            <div className="flex items-center justify-center gap-5">
              <div className="h-[50px] w-[50px]">
                <Image
                  src="/h2.jpg"
                  alt="profile"
                  className="rounded-full w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <div>Marketing Manager, ABC Company</div>
            </div>
            <div className="py-5 outline outline-1 max-md:hidden"></div>
            <div className="flex items-center justify-center">
              <Twitter fill="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-md:hidden">
          <div className="flex gap-1">
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
            <div>
              <Star />
            </div>
          </div>
          <div className="text-lg font-semibold">
            Using this app has been a game-changer for me. It's so easy to track
            my habits and see my progress!
          </div>
          <div className="flex justify-start gap-6">
            <div className="flex gap-5 items-center justify-center">
              <div className="h-[50px] w-[50px]">
                <Image
                  src="/h1.jpg"
                  alt="profile"
                  className="rounded-full w-full h-full"
                  width={50}
                  height={50}
                />
              </div>
              <div>Freelancer, XYZ Agency</div>
            </div>
            <div className="py-5 outline outline-1"></div>
            <div className="flex items-center justify-center">
              <Twitter fill="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
