"use client";
import { useCustomHook } from "@/contexts/AppContext";
import React, { FormEvent, useState } from "react";
import { Review } from "../../../generated/prisma";

export default function ReviewForm({ companyId, setReviews }: { companyId: string, setReviews: (value : Review[]) => void }) {
  console.log("companyId :: in form ", companyId);

  const { user } = useCustomHook();

  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  

  const reviewData = {
    content: review,
    user_id: user?.id,
    company_id: companyId,
  };

  async function handleSubmit(e: FormEvent) {
    setError("");
    e.preventDefault();
    if (review.trim().length == 0) {
      setError("Review can't be empty");
      return;
    }
    const res = await fetch("/api/company/review", {
      method: "POST",
      body: JSON.stringify(reviewData),
    });
    const data = await res.json();
    if (data.success) {
      alert("Review added");
      // setReview(prev => [...prev, reviewData])

    } else {
      alert("something went wrong");
      console.log("something went wrong " + data?.message);
    }
  }

  return (
    <div className="form flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex gap-5">
        <input
          type="text"
          placeholder="write a review"
          className="h-11 border rounded-lg px-3"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center border bg-white text-black font-bold px-3 py-1.5 rounded-lg cursor-pointer"
        >
          Post
        </button>
      </form>
      <span className="text-red-500">{error}</span>
    </div>
  );
}
