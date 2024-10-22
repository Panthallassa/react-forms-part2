import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Todo App", () => {
	const { getByText } = render(<App />);
	expect(getByText(/Todo App/i)).toBeInTheDocument();
});

test("matches snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
