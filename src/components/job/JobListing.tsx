//@ts-nocheck
"use client";
import AddJobForm from "@/components/job/AddJobForm";
import JobCard from "@/components/job/JobCard";
import { Button } from "@/components/ui/button";
import { useCustomHook } from "@/contexts/AppContext";
import { useSearchParams } from "next/navigation";

export default function JobListing() {
  const searchParams = useSearchParams();
  const searchedValue = searchParams.get("search") || "";

  const {
    jobDataArray,
    setJobDataArray,
    searchedInput,
    isLoading,
    setIsLoading,
    isAddJobFormOpen,
    employmentType,
    setEmploymentType,
    jobType,
    setJobType,
    salary,
    setSalary,
    currPage,
    setCurrPage,
  } = useCustomHook();

  const showSearchedResults = jobDataArray?.filter((j) =>
    j.title.toLowerCase().includes(searchedValue?.toLowerCase())
  );

  return (
    <div className="p-4 relative flex-1 h-fit ">
      <div className="jobCards grid gap-5 3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 mb-5 ">
        {showSearchedResults?.length ? (
          showSearchedResults?.map((job) => {
            return <JobCard key={job?.id} job={job} />;
          })
        ) : (
          <span>No jobs found.</span>
        )}
      </div>
      <div className="pagination flex justify-between w-full">
        <Button
          onClick={() => setCurrPage(currPage - 1)}
          className={`${
            currPage == 1 ? "opacity-20 pointer-events-none" : "cursor-pointer"
          } bg-white/90 text-black hover:bg-white transition-all duration-300`}
        >
          Prev
        </Button>
        <Button
          onClick={() => setCurrPage(currPage + 1)}
          className={`${
            jobDataArray.length < 10
              ? "opacity-20 pointer-events-none"
              : "cursor-pointer"
          } bg-white/90 text-black hover:bg-white transition-all duration-300`}
        >
          Next
        </Button>
      </div>
      {isAddJobFormOpen && <AddJobForm />}
    </div>
  );
}