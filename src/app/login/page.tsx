//@ts-nocheck
"use client";
import React from "react";
import handleSumbit from "../actions";
import { useCustomHook } from "@/contexts/AppContext";
import { loginUser } from "../action/userAction";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function page() {
  const { formError, setFormError } = useCustomHook();

  async function handleClick(obj) {
    const res = await loginUser(obj);
    if (res.success) {
      console.log(res.message);
      redirect("/");
    }
    if (!res.success) setFormError(res.message);
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-black text-white">
      <div className="auth bg-[#212121] rounded-xl  px-5 py-14 flex flex-col items-center gap-4 w-[450px]">
        <div className="flex flex-col items-center gap-7">
          <div className="flex gap-2">
            <span className="bg-[#8292A7] font-bold text-2xl py-1 px-2 leading-none rounded-md">
              H
            </span>
            <span className="text-3xl font-bold text-white focus-within:outline-none focus-within:border-none">
              HireScope
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-semibold">Welcome Back</span>
            <span className="text-gray-400">
              Sign in to your account to continue
            </span>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const obj = {
              email: e.target.email.value,
              password: e.target.password.value,
            };
            handleClick(obj);
          }}
          className="flex flex-col gap-4 w-90"
        >
          <label htmlFor="email" className="flex flex-col gap-1">
            Email Address
            <input
              id="email"
              type="email"
              name="email"
              className="border border-[#3a3a3a] hover:border-[#535353] px-3 rounded-md outline-none bg-[#2d2d2d] hover:bg-[#3d3d3d] transition-all duration-300 h-11"
              placeholder="Enter Email"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-1">
            Password
            <input
              id="password"
              type="password"
              name="password"
              className="border border-[#3a3a3a] hover:border-[#535353] px-3 rounded-md outline-none bg-[#2d2d2d] hover:bg-[#3d3d3d] transition-all duration-300 h-11"
              placeholder="Enter password"
            />
          </label>

          <button
            type="submit"
            className="bg-white h-11 cursor-pointer text-lg font-bold text-black rounded-md"
          >
            Login
          </button>

          <span className="text-gray-400 text-center">or</span>
          
          <button className="h-11 cursor-pointer border-2 border-[#3a3a3a] hover:border-[#535353] hover:bg-[#3d3d3d] text-lg font-bold rounded-md transition-all duration-300">Create New Account</button>

        </form>
        <span className="text-red-500">{formError}</span>
      </div>
    </div>
  );
}
