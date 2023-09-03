import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const bearerToken = req.headers.get("authorization");

  if (!bearerToken) {
    return NextResponse.json("Unauthorized request", { status: 401 });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return NextResponse.json("Unauthorized request", { status: 401 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json("Unauthorized request", { status: 401 });
  }

  const payload = jose.decodeJwt(token) as { email: string; exp: number };

  const user = await prisma.user.findMany({
    where: { email: payload.email },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  return NextResponse.json(user[0], { status: 200 });
}
