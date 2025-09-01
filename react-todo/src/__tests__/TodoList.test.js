import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";
import { test, expect } from '@jest/globals';

test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
});

test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = todo.nextSibling;
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
});