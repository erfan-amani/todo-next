const NewTodo = () => {
  return (
    <form className="relative flex bg-white px-4 py-2 rounded-xl w-full shadow-sm">
      <input
        type="text"
        className="flex-grow text-gray-700 outline-none pr-4 w-full"
        placeholder="Write here!"
      />
      <button
        type="submit"
        className="bg-gray-300 py-1.5 px-3 rounded-xl text-gray-700 hover:bg-blue-200 active:ring-blue-4 font-medium"
      >
        Add
      </button>
    </form>
  );
};

export default NewTodo;
