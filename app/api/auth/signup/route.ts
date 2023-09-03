import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function GET() {
  return new Response("hello", { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validationSchema = [
    {
      valid: validator.isLength(body.firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isLength(body.lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "Last name is invalid",
    },
    {
      valid: validator.isEmail(body.email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isMobilePhone(body.phone),
      errorMessage: "Phone numnber is invalid",
    },
    {
      valid: validator.isLength(body.city, {
        min: 1,
      }),
      errorMessage: "City is invalid",
    },
    {
      valid: validator.isStrongPassword(body.password),
      errorMessage: "Password is not strong enough.",
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

  if (userWithEmail.length > 0) {
    return NextResponse.json(
      "This email already has an account. Please proceed to log in",
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      city: body.city,
      password: hashedPassword,
      phone: body.phone,
    },
  });

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  console.log(token);

  return NextResponse.json(token, { status: 200 });
}
