// @ts-nocheck
import { getUserFromCookies } from "@/helper";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: NextResponse) {
  const user = await getUserFromCookies();

  if (!user.success) {
    return NextResponse.json({
      success: false,
      message: user.message,
    });
  }

  const body = await req.json();

  const company = {
    companyName: body.name,
    companyDescription: body.desc,
    companyOwnerId: user.id,
  };

  try {
    const newCompany = await prismaClient.company.create({
      data: company,
    });
    return NextResponse.json({
      success: true,
      data: newCompany,
      message: "company added successfully",
    });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({
      success: false,
      message: "error while adding company",
    });
  }
}

export async function GET(req: NextResponse) {
  try {
    const companies = await prismaClient.company.findMany();
    return NextResponse.json({
      success: true,
      data: companies,
      message: "companies fetched",
    });
  } catch (error) {
    console.error("error while fetching companies : ", error.messaage);
    return {
      success: false,
      message: "error while fetching companies",
    };
  }
}
