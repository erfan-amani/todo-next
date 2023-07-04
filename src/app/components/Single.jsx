import SquareIcon from "./Icons/SquareIcon";
import CheckedIcon from "./Icons/CheckedIcon";
import DeleteIcon from "./Icons/DeleteIcon";

const Todo = ({ text, id, completed }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-white py-2 px-4 rounded-xl text-gray-600 cursor-pointer capitalize ${
        completed ? "line-through" : ""
      }`}
    >
      <div className="flex items-center gap-2 flex-grow">
        <span>
          {completed && <CheckedIcon />}
          {!completed && <SquareIcon />}
        </span>
        <span>{text}</span>
      </div>
      <span onClick={deleteHandler}>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Todo;
