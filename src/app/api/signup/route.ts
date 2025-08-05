//@ts-nocheck
import { createToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const userToCreate = {
    email: body.email,
    password: body.password,
    role : body.role
  };

  try {
    const user = await prismaClient.user.create({
      data: userToCreate,
    });

    const userTokenData = {
      id: user.id,
    };
    const token = createToken(userTokenData); // this function must be an object kyuki iat(issuedAT) add krega is object me
    const res = NextResponse; // ye execution ko nhi rokta hai pura kam hoga
    // yah res return hoga, normal redirect('/') execution rok ke yhi se redirect kr deta hai, 
    window.location.href = 'http://localhost:3000';
    res.cookies.set("userIdToken", token);
    console.log("user registerd");
    
    // return {
    //     res, 
    //     success : true, 
    //     mesage : 'user registerd'
    // };
    return res
  } catch (err) {
    console.error("error in cerating error : ", err.message);
    return NextResponse.json(
      {
        success: false,
        message: "error creating user",
      },
      { status: 500 }
    );
  }
}

 // router.push('/') soft redirect - only required things will come
 // window.location.href = "/" full page reload
