import { TaskCreator } from "./components/TaskCreator";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const createNewTask = (taskName) => {
    const isExistTask = tasksItems.find((task) => task.name === taskName);
    if (!isExistTask) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (taskName) => {
    const updateTasksItems = tasksItems.map((task) =>
      task.name === taskName ? { ...task, done: !task.done } : task
    );
    setTasksItems(updateTasksItems)
  };

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>
    </div>
  );
}

export default App;
