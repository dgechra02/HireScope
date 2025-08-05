// @ts-nocheck
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest, {params}) {
    const {id} = await params; 

    try {
        const job = await prismaClient.openings.findUnique({
            where : {
                id
            }
        })
        if(job){
            return NextResponse.json({
                success: true,
                data : job, 
                message : "job found"
            })
        } else {
            return NextResponse.json({
                success : false, 
                message : "no job found"
            })
        }
    } catch (error){
        return NextResponse.json({
            success : false, 
            message : "error while adding job details"
        })
    }
}