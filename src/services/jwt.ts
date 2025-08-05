//@ts-nocheck
import jwt from "jsonwebtoken";

export function createToken(data) {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token; // token ke under encrypt hoke data rkh liya hai
}

export function verifyToken(token) {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch {
    return null;
  }
}
// npm i jsonwebtoken
// npm i --save-dev @types/jsonwebtoken
