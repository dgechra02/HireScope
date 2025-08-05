import { cookies } from "next/headers";
import prismaClient from "./services/prisma";
import { verifyToken } from "./services/jwt";

export async function getUserFromCookies() {

  const userCookies = await cookies();
  const encryptedToken = userCookies.get("userIdToken")?.value;

  if(!encryptedToken) return {
    success : false, 
    message : 'user is not logged in'
  }

  const data = verifyToken(encryptedToken);
  if(!data) return {
    success : false, 
    message : 'decrypted data is null'
  };

  const user = await prismaClient.user.findUnique({
    where: {
      id: data?.id,
    },
    include : {
      company : true
    },
    omit: {
      password: true,
    },
  });

  if (!user) return {
    success : false, 
    message : 'user is not authenticated'
  };   

  return {
    ...user, 
    success : true
  };
}
