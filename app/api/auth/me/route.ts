import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const bearerToken = req.headers.get("authorization");
  let token = "";
  let payload = { email: "", exp: 0 };
  if (bearerToken) {
    token = bearerToken.split(" ")[1];
  }

  if (token) {
    payload = jose.decodeJwt(token) as { email: string; exp: number };
  }

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
