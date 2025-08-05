//@ts-nocheck
"use client";
import Header from "@/components/home/Header";
import JobFilter from "@/components/job/JobFilter";
import React, { Suspense, useEffect, useState } from "react";

export default function layout({ children }) {
  return (
    <div className="flex flex-col w-[100%]">
      <Header />
      {children}
    </div>
  );
}
