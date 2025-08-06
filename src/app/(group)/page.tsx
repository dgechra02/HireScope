import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Statics from "@/components/home/Statics";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 justify-center items-center w-full p-10 bg-black">
      <Hero />
      <Statics />
      <CTA />
    </div>
  );
}
