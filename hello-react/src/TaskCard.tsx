import React from 'react';
import './TaskCard.css'

interface Task {
  title: string,
  dueDate: string,
  completedAtDate: string,
  assigneeName: string
}

const TaskCard = (props: Task) => {
  let date;
  if (props.dueDate)
    date = `Due on: ${props.dueDate}`
  else if (props.completedAtDate)
    date = `Completed on: ${props.completedAtDate}`
  return (
    <div className='TaskItem text-gray-800'>
      <h2 className="text-xl font-bold py-1">{props.title}</h2>
      <p>{date}</p>
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard