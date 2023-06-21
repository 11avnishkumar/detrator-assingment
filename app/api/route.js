import User from "@/models/users";
import dbConnect from "@/config/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  // console.log(await req.json());
  dbConnect();
  const { name, email, password, dateOfBirth, phone } = await req.json();
  // create the user
  const user = await User.create({ name, email, password, dateOfBirth, phone });
  return NextResponse.json({ user });
}
