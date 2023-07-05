import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { email, password } = await request.json();

    const user = await User.findByCredential(email, password);

    !!user?._id && console.log(`user logged in: id ${user._id}`);

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};
