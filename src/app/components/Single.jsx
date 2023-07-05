import SquareIcon from "./Icons/SquareIcon";
import CheckedIcon from "./Icons/CheckedIcon";
import DeleteIcon from "./Icons/DeleteIcon";

const Todo = ({ title, id, done }) => {
  return (
    <div
      className={`flex items-center gap-2 bg-neutral-50 py-2 px-4 rounded-xl text-gray-600 cursor-pointer capitalize ${
        done ? "line-through" : ""
      }`}
    >
      <div className="flex items-center gap-2 flex-grow">
        <span>
          {done && <CheckedIcon />}
          {!done && <SquareIcon />}
        </span>
        <span>{title}</span>
      </div>
      <span>
        <DeleteIcon />
      </span>
    </div>
  );
};

export default Todo;
