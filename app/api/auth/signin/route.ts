import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

export async function GET() {
  return NextResponse.json("Hello", { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validationSchema = [
    {
      valid: validator.isEmail(body.email),
      errorMessage: "Email/Password is invalid.",
    },
    {
      valid: validator.isLength(body.password, {
        min: 1,
      }),
      errorMessage: "Email/Password is invalid.",
    },
  ];

  const errorMsg: string[] = [];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errorMsg.push(check.errorMessage);
    }
  });

  if (errorMsg.length > 0) {
    return NextResponse.json(errorMsg[0], { status: 400 });
  }

  const userWithEmail = await prisma.user.findMany({
    where: {
      email: {
        equals: body.email,
      },
    },
  });

  if (userWithEmail.length === 0) {
    return NextResponse.json("Email/Password is incorrect.", { status: 401 });
  }

  const isMatchPassword = await bcrypt.compare(
    body.password,
    userWithEmail[0].password
  );

  if (!isMatchPassword) {
    return NextResponse.json("Email/Password is incorrect.", { status: 401 });
  }

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email: body.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  return NextResponse.json(token, { status: 200 });
}
