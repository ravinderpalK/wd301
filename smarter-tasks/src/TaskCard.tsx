import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";

interface TaskCardProp { }
interface TaskCardState {
  tasks: TaskItem[];
}
class TaskCard extends React.Component<TaskCardProp, TaskCardState> {
  addTask = (task: TaskItem) => {
    this.setState((state) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };
  constructor(props: TaskCardProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  render() {
    return (
      <div className="border border-slate-200 rounded-xl p-4">
        <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
          Pending
        </h1>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskCard;
