import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Statics from "@/components/home/Statics";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 xl:gap-14 justify-center items-center w-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-black">
      <Hero />
      <Statics />
      <CTA />
    </div>
  );
}
