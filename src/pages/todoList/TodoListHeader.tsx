import { useState } from "react";

interface TodoListHeaderProps {
  setTodoData: (value: any) => void;
}

const TodoListHeader = ({ setTodoData }: TodoListHeaderProps) => {
  const [todo, setTodo] = useState({
    title: "",
    time: "",
    status: "created",
  });

  const handleUpdateTodo = () => {
    setTodoData((prev: any) => [...prev, todo]);
  };

  return (
    <div className="todoListHeader">
      <input
        type="text"
        placeholder="Type your todo list here"
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <button onClick={handleUpdateTodo}>Submit</button>
    </div>
  );
};

export default TodoListHeader;
