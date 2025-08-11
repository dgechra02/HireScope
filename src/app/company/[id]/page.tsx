"use client";
import JobsAndReviews from "@/components/company/JobsAndReviews";
import { CompanyWithOwner } from "@/types/type";
import { Spinner } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const params = useParams<{ id : string } >();
  const id = params.id;
  // console.log("id id id did id ::: ", id);
  const [company, setCompany] = useState<CompanyWithOwner | null>();
  const [jobs, setJobs] = useState([]);

  // console.log("id of company : ", id);

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("/api/company/" + id);
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
        <h1>{company?.companyName ? company?.companyName : <Spinner />} </h1>
        <p>{company?.companyDescription}</p>
        <h2>{company?.owner?.email}</h2>
        {/* <Button>
          <Trash width={20} /> delete Company
        </Button> */}
      </div>
      <div className="">
        <JobsAndReviews jobs={jobs} companyId={id} />
      </div>
    </div>
  );
}
