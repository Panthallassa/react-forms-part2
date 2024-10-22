import React from "react";
import {
	render,
	fireEvent,
	screen,
} from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList component", () => {
	const { getByPlaceholderText } = render(<TodoList />);
	expect(
		getByPlaceholderText(/Enter new todo/i)
	).toBeInTheDocument();
});

test("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

test("can add a todo", () => {
	const { getByPlaceholderText, getByText } = render(
		<TodoList />
	);
	fireEvent.change(
		getByPlaceholderText(/Enter new todo/i),
		{ target: { value: "Test Todo" } }
	);
	fireEvent.click(getByText(/Add Todo/i));
	expect(getByText(/Test Todo/i)).toBeInTheDocument();
});

test("can remove a todo", () => {
	const {
		getByPlaceholderText,
		getByText,
		getByRole,
		queryByText,
		debug,
	} = render(<TodoList />);

	// Add a todo
	const input = getByPlaceholderText(/Enter new todo/i);
	fireEvent.change(input, {
		target: { value: "Test Todo" },
	});
	fireEvent.click(getByText(/Add Todo/i));

	expect(getByText(/Test Todo/i)).toBeInTheDocument();

	// Check if the remove button for the todo is available
	const removeButton = getByRole("button", { name: /X/i });
	expect(removeButton).toBeInTheDocument();

	fireEvent.click(removeButton);

	debug();

	expect(queryByText(/Test Todo/i)).not.toBeInTheDocument();
});
