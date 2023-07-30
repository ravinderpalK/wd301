import TaskCard from "./TaskCard";

function App() {

  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Build the website with static content" />
        <TaskCard title="hello" />
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="world" />
        <TaskCard title="hi there" />
      </div>
    </div>
  );
}

export default App
