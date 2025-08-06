//@ts-nocheck
"use client";
import AddJobForm from "@/components/job/AddJobForm";
import { useCustomHook } from "@/contexts/AppContext";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
  const [openings, setOpenings] = useState([]);
  const { setIsAddJobFormOpen, isAddJobFormOpen } = useCustomHook() ?? {};
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/job");
        const data = await res.json();
        setOpenings(data?.data);
      } catch {
        console.log("error in finding jobs > openings");
      }
    }
    fetchData();
  }, []);

  console.log("openings : ", openings);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex justify-between px-4 py-2 border-b-2">
        <h3>Jobs</h3>
        <button
          onClick={() => setIsAddJobFormOpen(!isAddJobFormOpen)}
          className="bg-white text-black cursor-pointer"
        >
          Add Job
        </button>
      </header>

      <div className="main w-screen p-5 flex gap-3 flex-wrap items-center">
        {openings?.map((job) => {
          return (
            <div key={job?.id} className="flex flex-col gap-2 border-2 p-2 w-100">
              <Link href={`jobs/${job.id}`} className="text-2xl underline flex gap-1"> title : {job?.title} <MoveRight /></Link>
              <span>description : {job?.description}</span>
              <Link href={`/company/${job?.company_id}`} className=" underline flex gap-1">
                {job?.company?.companyName} <MoveRight width={15}/>
              </Link>
              {isAddJobFormOpen && <AddJobForm />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
