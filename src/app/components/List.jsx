import { getServerSession } from "next-auth";
import { headers, cookies } from "next/headers";
import Link from "next/link";
import Single from "./Single";

const fetchTodos = async (type) => {
  try {
    const token = cookies().get("next-auth.session-token")?.value;

    const response = await fetch(
      `http://localhost:3001/api/todo?type=${type}`,
      {
        headers: { Authorization: token },
        cache: "no-cache",
        next: { tags: ["todos"] },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {}
};

const TodoList = async ({ type }) => {
  const session = await getServerSession();

  const list = await fetchTodos(type);

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
