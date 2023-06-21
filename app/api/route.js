import User from "@/models/users";
import dbConnect from "@/config/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  // console.log(await req.json());
  dbConnect();
  const {
    firstname,
    lastname,
    email,
    password,
    dateOfBirth,
    phone,
    city,
    country,
  } = await req.json();
  // create the user
  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
    dateOfBirth,
    phone,
    city,
    country,
  });
  return NextResponse.json({ user });
}
