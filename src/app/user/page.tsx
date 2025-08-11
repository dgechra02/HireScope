"use client";
import AddCompany from "@/components/profile/AddCompany";
import { useCustomHook } from "@/contexts/AppContext";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const { user } = useCustomHook();
  const [isAddCompanyFormOpen, setIsAddCompanyFormOpen] = useState(false);
  return (
    <div className=" bg-black text-white min-h-screen">
      <header className="flex justify-between items-center py-3 px-6 border-b border-[#3a3a3a] w-full sticky top-0 left-0 z-10 mb-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
        </div>

        <div className="profile flex gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&s"
            alt="proflie-picture"
            className="size-10"
          />
          <span className="font-bold text-2xl">Rajendra Choudhary</span>
        </div>
      </header>

      <div className="main flex flex-col gap-5 w-[95%] m-auto">
        <Link href="user/jobscreated">Jobs created</Link>
        <div className="statics flex gap-4">
          <div className="bg-[#161616] h-fit py-5 px-10 flex flex-col items-center gap-3 rounded-lg flex-1 border border-[#3a3a3a]">
            <span className="text-3xl font-bold">12</span>
            <span className="text-gray-400">APPLICATION SENT</span>
          </div>
          <div className="bg-[#161616] h-fit py-5 px-10 flex flex-col items-center gap-3 rounded-lg flex-1 border border-[#3a3a3a]">
            <span className="text-3xl font-bold">3</span>
            <span className="text-gray-400">INTERVIEW SCHEDULED</span>
          </div>
          <div className="bg-[#161616] h-fit py-5 px-10 flex flex-col items-center gap-3 rounded-lg flex-1 border border-[#3a3a3a]">
            <span className="text-3xl font-bold">28</span>
            <span className="text-gray-400">PROFILE VIEWS</span>
          </div>
          <div className="bg-[#161616] h-fit py-5 px-10 flex flex-col items-center gap-3 rounded-lg flex-1 border border-[#3a3a3a]">
            <span className="text-3xl font-bold">36</span>
            <span className="text-gray-400">JOB SAVED</span>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="info flex flex-col gap-2 p-7 w-[60%] bg-[#161616] border rounded-lg border-[#3a3a3a]">
            <h3 className="text-2xl font-semibold">User Info</h3>
            <p>
              <span className="font-semibold text-lg">user details :</span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              earum sint impedit rem? Unde omnis maxime obcaecati quidem facilis
              architecto at quo cupiditate incidunt ex laborum aspernatur,
              magnam quas repudiandae debitis voluptatibus natus porro ea dicta
              hic possimus. Vitae amet reiciendis corporis suscipit beatae ex!
              Debitis quam in magnam earum! Repudiandae, obcaecati id veniam
              atque est eaque impedit perferendis. Vel earum, tempora hic
              inventore voluptate deserunt accusamus exercitationem ullam
              molestiae aperiam nemo eligendi ratione sit corrupti voluptates
              dicta sunt molestias deleniti cupiditate labore! Eos sint numquam
              architecto harum eligendi est officia amet illo. Quis molestias
              aliquid tempore explicabo, natus aperiam.
            </p>
          </div>

          <div className="actions flex flex-col gap-2 p-7 bg-[#161616] border rounded-lg border-[#3a3a3a] flex-1">
            <h3 className="text-2xl font-semibold">Actions</h3>
            <div className="buttons flex gap-2 flex-wrap">
              <button className="border border-[#525252] rounded py-2 px-4 w-fit font-semibold hover:bg-white hover:text-black transition-all duration-500 h-12">
                📄 Add Resume{" "}
              </button>
              <button className="border border-[#525252] rounded py-2 px-4 w-fit font-semibold hover:bg-white hover:text-black transition-all duration-500 h-12">
                🏢 Add Company{" "}
              </button>
              <button className="border border-[#525252] rounded py-2 px-4 w-fit font-semibold hover:bg-white hover:text-black transition-all duration-500 h-12">
                ✏️ Edit Profile{" "}
              </button>
              <button className="border border-[#525252] rounded py-2 px-4 w-fit font-semibold hover:bg-white hover:text-black transition-all duration-500 h-12">
                🗑️ Delete Company{" "}
              </button>
              <Link
                href={"/user/your-applications"}
                className="border border-[#525252] rounded py-2 px-4 w-fit font-semibold hover:bg-white hover:text-black transition-all duration-500 h-12"
              >
                👁️ View Applications{" "}
              </Link>
            </div>
            {/* {user?.success && (
              <button
                onClick={() => setIsAddCompanyFormOpen(!isAddCompanyFormOpen)}
                className="border-2 p-2 w-fit"
              >
                add company
              </button>
            )} */}
          </div>
        </div>
        {isAddCompanyFormOpen && (
          <AddCompany setIsAddCompanyFormOpen={setIsAddCompanyFormOpen} />
        )}
      </div>
    </div>
  );
}
