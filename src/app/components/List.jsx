import { getServerSession } from "next-auth";
import Link from "next/link";
import Single from "./Single";

const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/todo", {
      cache: "no-cache",
      next: { tags: ["todos"] },
    });

    const data = await response.json();

    return data;
  } catch (error) {}
};

const TodoList = async () => {
  const session = await getServerSession();

  console.log({ serverSession: session });
  const list = await fetchTodos();

  if (!session) {
    return (
      <div className="flex flex-col items-center space-y-3 flex-1 text-gray-700">
        <p className="text-center">Login first to manage your tasks!</p>
        <Link href="/auth" className="text-indigo-400 underline">
          Login
        </Link>
      </div>
    );
  }

  if (!list.length) {
    return (
      <div className="space-y-3 flex-1 text-gray-700">
        <p className="text-center">No task found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto">
      {list.map((todo) => (
        <Single
          key={todo._id}
          title={todo.title}
          id={todo._id}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
