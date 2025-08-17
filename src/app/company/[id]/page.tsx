"use client";
import JobsAndReviews from "@/components/company/JobsAndReviews";
import { CompanyWithOwner } from "@/types/type";
import { Spinner } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const params = useParams<{ id : string } >();
  const id = params.id;
  // console.log("id id id id id ::: ", id);
  const [company, setCompany] = useState<CompanyWithOwner | null>();
  const [jobs, setJobs] = useState([]);

  console.log("id of company : ", id);

  useEffect(() => {
    async function fetchingData() {
      const res = await fetch("/api/company/" + id);
      // console.log("respnose while going to cmpany page : ", res);
      const data = await res.json();
      // console.log("data on the comany page : ", data);
      if (data.success) {
        setCompany(data?.data);
        setJobs(data?.data?.openings);
        // console.log("company found");
      } else {
        // alert("Company not found");
        console.log("company not found");
      }
    }
    fetchingData();
  }, []);

  console.log("company in the company/id: ", company);

 return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-white mb-1">Company Details</h1>
          <p className="text-gray-400">Comprehensive information about the company</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Company Information Card */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Company Name</h3>
              <p className="text-lg font-medium text-white">
                {company?.companyName || (
                  <span className="animate-spin inline-block w-4 h-4 border-b-2 border-gray-400 rounded-full"></span>
                )}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Description</h3>
              <p className="text-white">{company?.companyDescription || "No description available"}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Owner</h3>
              <p className="text-white">{company?.owner?.email || "No owner information"}</p>
            </div>
          </div>
        </div>

        {/* Jobs and Reviews Section */}
        <JobsAndReviews jobs={jobs} companyId={id} />
      </div>
    </div>
  );
}