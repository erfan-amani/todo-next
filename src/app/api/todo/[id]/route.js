import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    const id = params?.id;
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const id = params?.id;
    const todo = await Todo.findByIdAndDelete(id);

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
