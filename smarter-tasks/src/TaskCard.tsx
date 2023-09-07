// import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";

export interface TaskCardState {
  tasks: TaskItem[];
}

const TaskCard = () => {
  const [taskCardState, setTaskcardState] = useLocalStorage<TaskCardState>("tasks", {
    tasks: [],
  });
  const addTask = (task: TaskItem) => {
    setTaskcardState({ tasks: [...taskCardState.tasks, task] });
  };
  const deleteTask = (task: TaskItem) => {
    taskCardState.tasks.splice(Number(task.id), 1);
    setTaskcardState({ tasks: [...taskCardState.tasks] });
  }
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
        Pending
      </h1>
      <TaskForm addTask={addTask} />
      <TaskList deleteTask={deleteTask} tasks={taskCardState.tasks} />
    </div>
  );
}

export default TaskCard;
