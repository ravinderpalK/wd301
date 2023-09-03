import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={idx}
      title={task.title}
      description={task.description}
      date={task.date}
      deleteTask={props.deleteTask}
    />
  ));
  return <>{list}</>
};

export default TaskList;