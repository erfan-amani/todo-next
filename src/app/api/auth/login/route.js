import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await connectToDB();

    const { email, password } = await request.json();

    const { user, error } = await User.findByCredential(email, password);

    if (error) {
      return NextResponse.json({ error }, { status: error?.status || 400 });
    }

    if (!!user?._id) {
      console.log(`user logged in: id ${user._id}`);
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
