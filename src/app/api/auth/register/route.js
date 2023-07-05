import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { email, password } = await request.json();

    const user = new User({ email, password });
    await user.save();

    console.log(`user registered in: id ${user._id}`);

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};
