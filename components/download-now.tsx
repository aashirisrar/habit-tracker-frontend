import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Discover = () => {
  return (
    <section className="mx-auto flex max-md:flex-col max-sm:gap-6 items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-1 flex-col items-start justify-center gap-3">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Achieve Your Goals with Us
        </h1>
        <span className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Track your habits, stay motivated, and reach your full potential.
        </span>
        <div className="flex w-full items-center justify-start space-x-4 py-4 md:pb-10">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-[6px]"
            href="/home"
          >
            Get Started
          </Link>
          <Link
            className=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px] gap-1 "
            href="/sign-up"
          >
            <div>Sign Up</div> <ArrowRight width={16} />
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="max-sm:w-[20rem] max-sm:h-[10rem] w-[30rem] h-[30rem]">
          <Image
            width={450}
            height={450}
            alt="hero-img"
            className="h-full w-full object-cover"
            src="/h3.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
