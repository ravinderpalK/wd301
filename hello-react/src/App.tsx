import React from "react";
import TaskCard from "./TaskCard";


function App() {
  return (
    <div className="w-2/3 h-screen m-auto">
      <h1 className="text-3xl font-bold py-2 text-gray-800">Smarter Tasks</h1>
      <p>
        <b className="font-bold text-gray-600">Project: </b>
        Graduation Final Year Project(Revamp College Website)
      </p>
      <div className="py-6 grid grid-cols-2 gap-x-8 h-4/5">
        <div className="rounded-3xl border-2 border-gray-400">
          <h1 className="text-center py-2 text-lg font-bold text-gray-700">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="10th April" completedAtDate="" assigneeName="Rohit S" />
          <TaskCard title="Add a blog" dueDate="22nd March" completedAtDate="" assigneeName="Rohit M" />
          <div className="bg-gray-200 m-4 px-2 py-1 text-lg text-gray-900">+ New task</div>
        </div>
        <div className="rounded-3xl border-2 border-gray-400">
          <h1 className="text-center py-2 text-lg font-bold text-gray-700">Done</h1>
          <TaskCard title="Design the mockup" dueDate="" completedAtDate="10th April" assigneeName="Rohit M" />
          <TaskCard title="Get the approval from principal" dueDate="" completedAtDate="20th April" assigneeName="Ajay S" />
        </div>
      </div>
    </div>
  );
}

export default App
