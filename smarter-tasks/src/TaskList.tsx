import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => {
    task.id = idx.toString();
    return (
      <Task
        key={idx}
        item={task}
        removeTask={props.deleteTask}
      />
    )
  });
  return <>{list}</>
};

export default TaskList;