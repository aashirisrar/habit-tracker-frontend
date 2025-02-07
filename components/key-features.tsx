import { ArrowRight, ArrowRightIcon, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const KeyFeatures = () => {
  return (
    <section className="mx-auto gap-12 flex flex-col items-center justify-between py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="text-3xl text-center mx-30 max-sm:mx-1 max-md:mx-20 lg:mx-40 xl:mx-80 font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
        Monitor your behaviors and reach your objectives.
      </div>
      <div className="text-sm mx-30 max-sm:mx-1 max-md:mx-20 lg:mx-40 xl:mx-80 text-center">
        Our habit tracker app helps you stay on track, build positive habits,
        and reach your goals. With easy-to-use features and personalized
        tracking, you'll be able to make lasting changes in your life.
      </div>
      <div className="flex max-sm:flex-col gap-5 justify-center items-center text-center">
        <div className="flex flex-1 flex-col gap-5 justify-center items-center">
          <div>
            <ShoppingBag />
          </div>
          <div className="text-lg font-bold">Personalized Habit Tracking </div>
          <div>Create custom habits and set personalized goals.</div>
        </div>
        <div className="flex flex-1 flex-col gap-5 justify-center items-center">
          <div>
            <ShoppingBag />
          </div>
          <div className="text-lg font-bold">
            Progress Insights and Analytics
          </div>
          <div>Get valuable insights and analytics on your habit progress.</div>
        </div>
        <div className="flex flex-1 flex-col gap-5 justify-center items-center">
          <div>
            <ShoppingBag />
          </div>
          <div className="text-lg font-bold">
            Daily Reminders and Notifications
          </div>
          <div>Stay on track with daily reminders and notifications.</div>
        </div>
      </div>
      <div className="flex gap-3">
        <Link href="/sign-up">
          <Button variant="outline">Learn More</Button>
        </Link>
        <div>
          <Button>
            <Link
              href="/sign-up"
              className="flex items-center justify-center text-md gap-1 font-semibold"
            >
              Sign Up
              <ArrowRight width={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
