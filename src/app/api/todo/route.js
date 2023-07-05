import Todo from "@/models/todo";
import { connectToDB } from "@/utils/database";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDB();

    console.log(cookies().getAll());

    const data = await Todo.find({});

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

    revalidateTag("todos");

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
