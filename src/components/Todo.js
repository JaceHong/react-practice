import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArr) => [todo, ...currentArr]);
    setTodo("");
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        To Do ({todos.length})
      </h2>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
          placeholder="Write ur Todo"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Add To Do
        </button>
      </form>

      <hr className="border-gray-200" />

      <ul className="space-y-2">
        {todos.map((item, i) => (
          <li
            key={i}
            className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
