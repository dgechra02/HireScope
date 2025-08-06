//@ts-nocheck
"use client";
import React, { useContext, useState } from "react";
import SearchForm from "../searchForm";
import Link from "next/link";
import { useCustomHook } from "@/contexts/AppContext";

// import { useCustomHook } from '@/contexts/AppContext'
// import { UserContext } from '@/app/(group)/layout'

export default function Header() {
  const { user } = useCustomHook(); // login krne pe ye state update nhi ho rhi
  // if(!user.success){
  //   console.log("user status : ", user.mesasge);
  // }
  console.log("user : in header : ", user);
  
  return (
    <header className="sticky top-0 left-0 z-10 w-full flex gap-5 justify-between items-center py-3 px-6 border-b border-[#3a3a3a] bg-black">
      <Link href={"/"} className="flex gap-2">
        <span className="bg-[#8292A7] font-bold text-2xl py-1 px-2 leading-none rounded-md">
          H
        </span>
        <span className="text-3xl font-bold text-white focus-within:outline-none focus-within:border-none">
          HireScope
        </span>
      </Link>
      <Link
        href={"/jobs"}  
        className="flex justify-center text-lg px-3 py-1.5 rounded-lg hover:bg-[#212121] font-semibold text-gray-400 hover:text-white w-20 h-11 transition-all duration-300"
      >
        Jobs
      </Link>
      <Link
        href={"/company"}
        className="flex justify-center text-lg px-3 py-1.5 rounded-lg hover:bg-[#212121] font-semibold text-gray-400 hover:text-white w-30 h-11 transition-all duration-300"
      >
        Companies
      </Link>
      <SearchForm />
      

        <Link
          href={"/user"}
          className="rounded-lg border text-xl border-[#3a3a3a] bg-[#212121] flex gap-2 justify-center items-center max-w-40 h-11 p-1"
        >
          <span className="bg-[#8292A7] rounded-full text-black text-sm flex justify-center items-center size-7 font-semibold">
            RC
          </span>
          {/* {user?.role ? user.role[0].toUpperCase() : "U"} */}
          <span className="text-gray-200 w-30 truncate">
            Rajendra Choudhary
          </span>
        </Link>
        <Link
          href={"/login"}
          className="flex items-center justify-center border bg-white text-black font-bold px-3 py-1.5 rounded-lg"
        >
          Login
        </Link>

      {/* <Link href={"/signup"} className='border bg-gray-200 px-3 py-1.5 rounded-lg'>signup</Link> */}
    </header>
  );
}
