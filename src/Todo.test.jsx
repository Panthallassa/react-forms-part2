import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("renders Todo component", () => {
	const todo = { id: 1, task: "Test Todo" };
	const { getByText } = render(
		<Todo todo={todo} removeTodo={() => {}} />
	);
	expect(getByText(/Test Todo/i)).toBeInTheDocument();
});

test("matches snapshot", () => {
	const todo = { id: 1, task: "Test Todo" };
	const { asFragment } = render(
		<Todo todo={todo} removeTodo={() => {}} />
	);
	expect(asFragment()).toMatchSnapshot();
});
