import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  date: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", date: "" });
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ date: event.target.value });
  };

  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
    }
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <table className="table-auto w-3/4 m-auto text-left">
          <tbody>
            <tr>
              <td><label htmlFor="todoTitle">Title: </label></td>
              <td><input required className="border rounded-sm" id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} /></td>
            </tr>
            <tr>
              <td><label htmlFor="todoDescription">Description: </label></td>
              <td><textarea required className="border rounded-sm" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged}></textarea></td>
            </tr>
            <tr>
              <td><label htmlFor="todoDueDate">Date: </label></td>
              <td><input required className="border rounded-sm" type="date" id="todoDueDate" value={this.state.date} onChange={this.dateChanged} /></td>
            </tr>
            <tr>
              <td><button className="border rounded-md bg-gray-500 text-white px-1" type="submit">Add item </button></td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}
export default TaskForm;