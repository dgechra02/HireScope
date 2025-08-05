// @ts-nocheck
import React, { useState } from "react";

export default async function page({ params }) {
  const {id} = await params;

  console.log("id of company : ", id);
  const res = await fetch("http://localhost:3000/api/company/" + id);
  console.log("respnose while going to cmpany page : ", res);
  const data = await res.json();
  console.log("data object ", data);
  console.log("company fetch status : ", data.mesasge);
  const company = data?.data;
  // const owner = data.data.owner;

  return (
    <div>
      <h1>{company.companyName} </h1>
      <p>{company.companyDescription}</p>

      <h2>{company.owner.email}</h2>

      <button>delete Job</button>
    </div>
  );
}
