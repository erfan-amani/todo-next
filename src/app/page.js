import Header from "./components/Header";
import TodoList from "./components/List";
import NewTodo from "./components/New";
import TodoTypes from "./components/Types";

export default function App({ searchParams }) {
  const activeType = searchParams.type;

  return (
    <div className="flex flex-col gap-6 flex-grow h-full">
      <Header />
      <TodoTypes active={activeType} />
      <TodoList type={activeType} />
      <NewTodo />
    </div>
  );
}
