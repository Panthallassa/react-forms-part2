import React from "react";

const Todo = ({ todo, removeTodo }) => {
	return (
		<>
			<span>{todo.task}</span>
			<button onClick={() => removeTodo(todo.id)}>X</button>
		</>
	);
};
export default Todo;
