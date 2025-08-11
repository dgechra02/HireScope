import prismaClient from "@/services/prisma";
import { paramsType } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: paramsType) {
  const { id } = await params;

  try {
    const reviews = await prismaClient.review.findMany({
      where: {
        company_id: id,
      },
    });
    if (reviews) {
      return NextResponse.json({
        success: true,
        message: "reviews recieved",
        data: reviews,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something went wrong",
      });
    }
  } catch (error : any) {
    return NextResponse.json({
      success: false,
      message: "Error while fetching reviews " + error?.message,
    });
  }
}