import Single from "./Single";

const TodoList = () => {
  const list = [];

  if (!list.length) {
    return (
      <div className="space-y-3 flex-grow text-gray-700">
        <p>No task found!</p>
      </div>
    );
  }

  return (
    <div>
      {filteredList.map((todo) => (
        <Single
          key={todo.id}
          text={todo.text}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
