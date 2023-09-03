import "./TaskCard.css";
import { TaskItem } from "./types";
interface Props extends TaskItem {
  id: number;
  deleteTask: (id: number) => void;
}
const Task = (props: Props) => {
  return (
    <li className="TaskItem shadow-md border border-slate-100 list-none relative">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date: {props.date}
      </p>
      <p className="text-sm text-slate-500">
        Description: {props.description}
      </p>
      <button className="deleteTaskButton absolute top-0 right-0 m-2" onClick={() => props.deleteTask(props.id)}>x</button>
    </li>
  );
};


export default Task;