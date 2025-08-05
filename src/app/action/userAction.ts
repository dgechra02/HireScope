//@ts-nocheck
"use server";

import { createToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";

export async function loginUser(userData) {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email: userData.email,
        password: userData.password,
      },
    });

    if (user) {
      console.log("User logged in successfully");

      const userTokenData = {
        id: user.id,
      };
      const token = createToken(userTokenData);
      const userCookies = await cookies();
      userCookies.set("userIdToken", token);

      return {
        success: true,
        message: "User logged in successfuly",
      };
    } else {
      console.log("Incorrect email or password");
      return {
        success: false,
        message: "Incorrect email or password",
      };
    }
    // const userCookies = await cookies();
    // userCookies.set("emailToken", userData.email);
  } catch (error) {
    console.log("Error adding user : ", error.message);
    return {
      success: false,
      message: error.message,
    };
  }
}
