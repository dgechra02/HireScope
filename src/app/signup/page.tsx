//@ts-nocheck
"use client";
import React, { useState } from "react";
import handleSumbit from "../actions";

export default function page() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");

  async function handleSumbit(e) {
    e.preventDefault();

    const user = {
      email,
      password: pass,
      role
    };

    const res = await fetch("/api/signup", {
      // // ye kr sakte kyuki request client se ja rhi hai, ye hostname attach krke bhejega
      method: "POST",
      body: JSON.stringify(user),
    });

    // const data = await res.json();
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/10">
      <form
        action=""
        onSubmit={handleSumbit}
        className="border w-100 bg-white p-5 flex flex-col gap-2"
      >
        <span>Sign Up</span>
        <input
          type="email"
          name=""
          id=""
          placeholder="email"
          className="border-2 h-10"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          className="border-2 h-10"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="text"
          name="role"
          className="border-2 h-10 px-3"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit" className="border p-2">
          submit
        </button>
      </form>
    </div>
  );
}
