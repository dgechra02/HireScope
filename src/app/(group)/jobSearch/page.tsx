import JobFilter from "@/components/job/JobFilter";
import JobListing from "@/components/job/JobListing";

export default function page() {

  return (
    <div className="mainContent w-full flex bg-black text-white">
      <JobFilter />
      <JobListing />
    </div>
  );
}


