"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import JobUpdate from "./JobUpdate";
// import JobUpdate from "./JobUpdate";
export default function JobActions({
  user,
  job,
}: {
  user: object;
  job: object;
}) {
  async function handleDelete() {
    try {
      const res = await fetch(`/api/job/${job?.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        console.log("Job deleted successfully");
        alert("job deleted");
        // redirect("http://localhost:3000/jobs"); // throwing error
      }
    } catch (error) {
      console.log("error in deleting job : ", error?.message);
    }
  }

  const [isUpdateJobFormOpen, setIsUpdateJobFormOpen] = useState(false);

  return (
    <div className="parent w-full">
      <div>
        {user?.company?.id == job?.company_id ? (
          <div className="w-full flex justify-between">
            <button className="bg-red-400" onClick={handleDelete}>
              delete job
            </button>
            <button
              className="bg-orange-300"
              onClick={() => setIsUpdateJobFormOpen(!isUpdateJobFormOpen)}
            >
              update job
            </button>
          </div>
        ) : null}
      </div>
      {isUpdateJobFormOpen ? <JobUpdate job={job} /> : null}
    </div>
  );
}
