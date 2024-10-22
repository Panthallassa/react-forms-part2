import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("renders NewTodoForm", () => {
	const { getByPlaceholderText } = render(
		<NewTodoForm addTodo={() => {}} />
	);
	expect(
		getByPlaceholderText(/Enter new todo/i)
	).toBeInTheDocument();
});

test("matches snapshot", () => {
	const { asFragment } = render(
		<NewTodoForm addTodo={() => {}} />
	);
	expect(asFragment()).toMatchSnapshot();
});
