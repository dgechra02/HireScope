//@ts-nocheck
import { getUserFromCookies } from "@/helper";
import prismaClient from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const {id} = await params;

  try {
    const company = await prismaClient.company.findUnique({
      where: {
        id,
      },
      include: {
        owner: true, // owner ek relation hai, to esko explicitly bulana hoga
      },
    });
    if (!company) {
      console.log("company not available");
      return NextResponse.json({
        success: false,
        message: "no company for this id",
      });
    } else {
      console.log('company found')
      return NextResponse.json({
        success: true,
        data: company,
        message : 'company found'
      });
    }
  } catch (error) {
    console.log("Error fetching company : ", error.message);
    return NextResponse.json({
      success: false,
      message: "company not found",
    });
  }

  // try {
  //   const owner = await prismaClient.user.findUnique({
  //     where: {
  //       id: company?.companyOwnerId,
  //     },
  //   });
  //   if (owner) {
  //     return NextResponse.json({
  //       success: true,
  //       message : 'owner and company found',
  //       data: {
  //         company,
  //         owner,
  //       },
  //     });
  //   } else {
  //       return NextResponse.json({
  //           success : false,
  //           message : 'owner not available'
  //       })
  //   }
  // } catch (error) {
  //   console.log("Error in matching ids : ", error.message);
  //   return {
  //     success: false,
  //     message: "Error in matching ids",
  //   };
  // }
  // no need to bring owner sepratelly
}

// to delete
export async function POST(req, { params }) {
  const id = params.id;
  const user = await getUserFromCookies();
  // ab user me company bhi hai

  // try {
  //   const company = await prismaClient.company.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // } catch (error) {}

  // if (company?.companyOwnerId == user?.id) {
  if (user?.company?.id == user?.id) {
    const res = await prismaClient.company.delete({
      where: {
        id,
      },
    });
  }
}
