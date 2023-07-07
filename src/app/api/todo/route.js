import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import { getToken } from "next-auth/jwt";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();

    const type = request.nextUrl.searchParams.get("type");
    const dbQuery = {};
    if (type === "compeleted") dbQuery.done = true;
    else if (type === "uncompeleted") dbQuery.done = false;

    const data = await Todo.find(dbQuery);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const POST = async (request) => {
  try {
    await connectToDB();

    const { title, user } = await request.json();

    const todo = new Todo({ title, user });
    await todo.save();

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
