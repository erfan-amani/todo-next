import TodoList from "./components/List";
import NewTodo from "./components/New";
import TodoTypes from "./components/Types";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-6 flex-grow h-full">
        <TodoTypes />
        <TodoList />
        <NewTodo />
      </div>
    </>
  );
}
