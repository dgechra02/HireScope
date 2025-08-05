import { MoveRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="hero w-[75%] flex flex-col gap-10 items-center ">
      <h1 className="text-7xl font-extrabold text-white flex flex-col items-center gap-2 p-2">
        <span>The Smarter Way </span> <span>to Find Your Next Role</span>
      </h1>
      <p className="text-2xl text-gray-400 flex flex-col items-center gap-1">
        <span>
          Connect with opportunities that matter. Our intelligent platform
          matches your
        </span>
        <span>skills and ambitions with the right companies and roles.</span>
      </p>
      <div className="flex gap-5 mt-2 h-20 items-center">
        <button className="text-black font-semibold text-xl bg-white py-3 px-5 h-15 cursor-pointer rounded-lg flex gap-2 items-center hover:-translate-y-1 transition-transform duration-500">
          <span> Explore Opportunities</span> <MoveRight className="w-4 mt-1" />
        </button>
        <button className="text-gray-400 hover:text-white font-semibold text-xl hover:bg-[#212121] py-3 px-5 h-15 cursor-pointer rounded-lg flex gap-2 items-center border border-[#3a3a3a] hover:-translate-y-1 transition-all duration-500">
          <span className=""> For Employers</span> <MoveRight className="w-4 mt-1" />
        </button>
        
      </div>
    </div>
  );
}
