"use client";
import { Box, Spinner, Tabs, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import { AddJob, Review } from "../../../generated/prisma";

export default function JobsAndReviews({
  jobs,
  companyId,
}: {
  jobs: AddJob[];
  companyId: string;
}) {
  // console.log("companyId :: in component ", companyId)

  const [reviews, setReviews ] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/company/review/" + companyId);
      const data = await res.json();
      if (data.success) {
        setReviews(data?.data);
      } else {
        console.log("something went wrong");
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-between border-2 border-white p-2">
      <div className="border border-white p-3 w-[45%]">
        <span>Jobs by this company</span>
        <div className="jobs flex flex-col gap-3 p-5">
          {!isLoading ? (
            jobs.length ? (
              jobs.map((j, index) => {
                return (
                  <span key={j.id}>
                    {index + 1}. {j.title}
                  </span>
                );
              })
            ) : (
              <span>no jobs available</span>
            )
          ) : (
            <Spinner className="text-white" />
          )}
        </div>
      </div>
      <div className="review border border-white text-white w-[45%] p-2">
        <span className="text-2xl">reviews</span>
        <div className=" p-2">
          <ReviewForm companyId={companyId} setReviews={setReviews}/>
          <div className="flex flex-col gap-2 p-2">
            {!isLoading ? (
              reviews.length != 0 ? (
                reviews.map((r, index) => {
                  return (
                    <span key={r?.id}>
                      {index + 1}. {r?.content}
                    </span>
                  );
                })
              ) : (
                <span className="text-white">No reviews</span>
              )
            ) : (
              <Spinner className="text-white"/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
