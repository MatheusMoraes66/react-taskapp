import { TaskCreator } from "./components/TaskCreator";
import "./App.css";
import { useState, useEffect } from "react";

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

  const createNewTask = (taskname) => {
    const isExistTask = tasksItems.find((task) => task.name === taskname);
    if (!isExistTask) {
      setTasksItems([...tasksItems, { name: taskname, done: false }]);
    }
  };

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasksItems.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
