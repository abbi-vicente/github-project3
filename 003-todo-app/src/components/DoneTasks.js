import React from "react";
import TaskList from "./TaskList";

const DoneTasks = (props) => {
	return (
		<div>
			<h1 className="page-status">Done Tasks</h1>
			<TaskList tasks={props.tasks} deleteTask={props.deleteTask} />
		</div>
	);
};

export default DoneTasks;
