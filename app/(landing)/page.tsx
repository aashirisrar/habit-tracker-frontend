"use client";

import Hero from "@/components/hero";
import KeyFeatures from "@/components/key-features";
import Potential from "@/components/potential";
import { MainNavigationMenu } from "@/components/navbar";
import Discover from "@/components/discover";
import DownloadNow from "@/components/download-now";
import Testimonials from "@/components/testimonial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <MainNavigationMenu />
      <main className="flex-1">
        <div className="container relative">
          <Hero />
          <KeyFeatures />
          <Potential />
          <Discover />
          <Testimonials />
          <DownloadNow />
          <Footer />
        </div>
      </main>
    </div>
  );
}
