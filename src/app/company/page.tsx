//@ts-nocheck
"use client";
import React, { useContext, useEffect, useState } from "react";
import AddCompany from "@/components/profile/AddCompany";
import { useCustomHook } from "@/contexts/AppContext";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function page() {
  const [isAddCompanyFormOpen, setIsAddCompanyFormOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const { user } = useCustomHook();
  // console.log("usr in add company pa ge ", user);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/company");
      const data = await res.json();
      if (data.success) {
        setCompanies(data.data);
      }
      console.log(data.message);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col gap-5 items-center relative bg-black text-white">
      <header className="flex justify-between items-center px-4 py-2 border-b border-[#3a3a3a] w-full h-16">
        <h2 className="text-3xl font-semibold">Listed Companies</h2>
        {user?.success ? (
          <button
            onClick={() => setIsAddCompanyFormOpen(!isAddCompanyFormOpen)}
            className="flex items-center justify-center border bg-white text-black font-bold px-3.5 py-2 rounded-lg"
          >
            Add company
          </button>
        ) : null }
      </header>

      <div className="companies flex gap-5 ">
        {companies.map((com) => {
          return (
            <div
              key={com.id}
              className="company flex flex-col gap-2 p-5 w-100 rounded-lg border bg-[#1c1c1c] border-[#2f2f2f] hover:border-[#686868] transition-all duration-300"
            >
              
              <div className="flex gap-2 items-center">
                <img
                  src={
                    "https://i.pinimg.com/736x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg"
                  }
                  alt="employer_logo"
                  className="w-5"
                />
                <span className="text-2xl font-semibold text-gray-200">
                {com.companyName || "Company"}
              </span>
              </div>
              <span className="text-gray-300">Owner : X-man</span>
              <span className="text-gray-300">Description : {com.companyDescription}</span>
              <Link
                href={`http://localhost:3000/company/${com.id}`}
                className="text-gray-400 hover:text-gray-200 font-semibold flex gap-2 items-center transition-all duration-300"
              >
                view details
                <MoveRight className="w-3 mt-1" />
              </Link>
            </div>
          );
        })}
      </div>
      {isAddCompanyFormOpen && <AddCompany />}
    </div>
  );
}
