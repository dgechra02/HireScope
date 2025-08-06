// @ts-nocheck
"use client";
import JobsAndReviews from "@/components/company/jobsAndReviews";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const params = useParams();
  const id = params.id;
  // console.log("id id id did id ::: ", id);
  const [company, setCompany] = useState({});
  const [jobs, setJobs] = useState([]);
  const [companyId, setCompanyId] = useState(id ?? "");

  // console.log("id of company : ", id);

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("http://localhost:3000/api/company/" + id);
      console.log("respnose while going to cmpany page : ", res);
      const data = await res.json();
      console.log("data on the comany page : ", data);
      if (data.success) {
        setCompany(data?.data);
        setJobs(data?.data?.openings);
        console.log("company found");
      } else {
        // alert("Company not found");
        console.log("company not found");
      }
    }
    fetchingData();
  }, []);

  // console.log("company in the company/id: ", company);

  return (
    <div className="bg-black text-white p-5 min-h-screen flex flex-col gap-5">
      <span className="text-2xl font-semibold">Company Details : </span>
      <div className="flex flex-col gap-2 p-5 border">
        <h1>{company?.companyName} </h1>
        <h1>{id} </h1>
        <p>{company?.companyDescription}</p>
        <h2>{company?.owner?.email}</h2>
        {/* <button className="bg-red-400 w-fit px-4 py-2">delete Compnay</button> */}
      </div>
      <div className="">
        <JobsAndReviews jobs={jobs} companyId={companyId} />
      </div>
    </div>
  );
}
