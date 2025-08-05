//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";

export function middleware(req){
    // const user = req.cookies.get("user")?.value;
    // const pathname = req.nextUrl.pathname;
    // const protectedRoute = ['/', "/savedJobs", "/jobSearch"];

    // to avoid jobs/[id] as of now
    // if(protectedRoute.includes(pathname) || pathname.includes("jobs")){
    //     if(!user){
    //         return NextResponse.redirect("http://localhost:3000/login");
    //     }
    // }
    // return NextResponse.next()
}