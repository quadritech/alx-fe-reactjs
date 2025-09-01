import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: false },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <AddTodoForm onAdd={addTodo} />
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        className={`flex justify-between items-center p-2 border rounded cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
                            }`}
                    >
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(todo.id);
                            }}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;