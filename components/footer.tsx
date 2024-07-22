import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="mx-auto flex flex-col gap-16 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex gap-3">
        <div className="flex flex-col flex-1 gap-6">
          <div className="text-xl font-bold">Habit Inc</div>
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <div className="font-bold">Address:</div>
              <div>Level 1, 12 Sample St, Sydney NSW 2000</div>
            </div>
            <div>
              <div className="font-bold">Contact:</div>
              <div className="flex gap-3">
                <div>1800 123 4567</div>
                <div>info@habitinc.com</div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <div className="w-4 h-4">
                <Facebook size={18} />
              </div>
              <div className="w-4 h-4">
                <Instagram size={18} />
              </div>
              <div className="w-4 h-4">
                <Twitter size={18} />
              </div>
              <div className="w-4 h-4">
                <Linkedin size={18} />
              </div>
              <div className="w-4 h-4">
                <Youtube size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3 text-sm pt-10">
          <Link href="/" className="cursor-pointer hover:underline">
            Track Habits
          </Link>
          <Link href="/" className="cursor-pointer hover:underline">
            Progress Tracker
          </Link>
          <Link href="/" className="cursor-pointer hover:underline">
            Achievements
          </Link>
          <Link href="/" className="cursor-pointer hover:underline">
            Explore
          </Link>
        </div>
      </div>
      <div className="flex justify-between w-full mx-auto gap-3 text-muted-foreground">
        <div>© 2024 Habit Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/" className="cursor-pointer hover:underline">
            Privacy Policy
          </Link>
          <Link href="/" className="cursor-pointer hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/" className="cursor-pointer hover:underline">
            Cookie Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
