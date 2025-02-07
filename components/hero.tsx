import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto max-md:gap-10 gap-1 flex max-md:flex-col items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-1 flex-col items-start justify-center gap-3">
        <Link
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          href="/sign-in"
        >
          🎉
          <div
            data-orientation="vertical"
            role="none"
            className="shrink-0 bg-border w-[1px] mx-2 h-4"
          ></div>{" "}
          <span className="sm:hidden">New features.</span>
          <span className="hidden sm:inline">
            New features, updates and more.
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Track your habits and achieve your goals
        </h1>
        <span className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Start building positive habits and stay motivated with our habit
          tracker app.
        </span>
        <div className="flex w-full items-center justify-start space-x-4 py-4 md:pb-10">
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-[6px]"
            href="/sign-up"
          >
            Get Started
          </Link>
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-[6px]"
            href="/sign-up"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="max-sm:w-[20rem] max-sm:h-[20rem] w-[30rem] h-[30rem]">
          <Image
            width={450}
            height={450}
            alt="hero-img"
            className="h-full w-full object-cover"
            src="/h1.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
