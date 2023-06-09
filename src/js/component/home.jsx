import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [listTodods, setListTodos] = useState([]);

	return (
		<div className="container">
			<h1 className="text-center">List of my todos</h1>
			<p className="text-center">
				Click on the input, add your todo and press enter
			</p>
			<p className="text-center">
				Then to delete, hover on a task and click on the trashcan icon
			</p>
			<div className="border border-secondary rounded p-1">
				<ul className="p-0 mx-0">
					<li className="border-bottom p-1">
						<input
							type="text"
							placeholder="What needs to be done?"
							className="w-100 border-0"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									if (inputValue === "") {
										alert("No tasks, add a task");
									} else {
										setListTodos(listTodods.concat(inputValue));
										setInputValue("");
									}
								}
							}}
						/>
					</li>
					{listTodods.map((todo, index) => (
						<li key={index} className="showAndHide border-bottom my-1 p-1">
							{todo}
							<i
								className="fas fa-trash-alt float-end py-1 pe-2"
								onClick={() =>
									setListTodos(
										listTodods.filter(
											(todo, currentIndex) => index != currentIndex
										)
									)
								}
							></i>
						</li>
					))}
				</ul>
				<h4 className="text-center">{listTodods.length} tasks left</h4>
			</div>
		</div>
	);
};

export default Home;
