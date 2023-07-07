import { getAuthHeader } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Single from "./Single";

const fetchTodos = async (type) => {
  try {
    const authHeader = getAuthHeader();

    const response = await fetch(
      `${process.env.BASE_URL}/api/todo${type ? "?type=" + type : ""}`,
      {
        headers: authHeader,
        cache: "no-cache",
        next: { tags: ["todos"] },
        credentials: "include",
      }
    );

    const data = await response.json();

    return { data };
  } catch (error) {
    return { error };
  }
};

const TodoList = async ({ type }) => {
  const session = await getServerSession();

  const { data, error } = await fetchTodos(type);

  if (error) {
    throw new Error(error);
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center space-y-3 flex-1 text-gray-700 mt-8">
        <p className="text-center text-neutral-600 dark:text-neutral-400">
          Login first to manage your tasks!
        </p>
        <Link href="/auth" className="text-indigo-400 underline">
          Login
        </Link>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="space-y-3 flex-1 text-gray-700">
        <p className="text-center">No task found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto">
      {data.map((todo) => (
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
