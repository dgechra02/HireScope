import React from "react";

export default function CTA() {
  return (
    <div className="flex w-[95%] bg-[#212121] rounded-2xl border border-[#3a3a3a] py-20">
      <div className="content w-[60%] flex flex-col items-center gap-7 m-auto">
        <h2 className="text-5xl font-extrabold text-white flex flex-col items-center gap-2 p-2">
          Ready to Advance Your Career?
        </h2>
        <p className="text-2xl text-gray-400 flex flex-col items-center gap-1">
          <span>
            Join the platform that's helping professionals worldwide find
          </span>
          <span>better opportunities and companies build stronger teams.</span>
        </p>
        <div className="flex gap-5 mt-2 h-20 items-center">
          <button className="text-black font-semibold text-xl bg-white py-3 px-5 h-15 cursor-pointer rounded-lg flex gap-2 items-center hover:-translate-y-1 transition-transform duration-500">
            Create Your Profile
          </button>
          <button className="text-gray-400 hover:text-white font-semibold text-xl hover:bg-[#212121] py-3 px-5 h-15 cursor-pointer rounded-lg flex gap-2 items-center border border-[#3a3a3a] hover:-translate-y-1 transition-all duration-500">
            Browse Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
