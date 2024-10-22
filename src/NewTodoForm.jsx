import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task) {
			addTodo(task);
			setTask("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder='Enter new todo'
			/>
			<button type='submit'>Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
