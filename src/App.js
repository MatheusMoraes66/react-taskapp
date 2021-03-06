import { TaskCreator } from "./components/TaskCreator";
import "./App.css";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

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

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(!showCompleted);
  };

  const toggleTask = (taskName) => {
    const updateTasksItems = tasksItems.map((task) =>
      task.name === taskName ? { ...task, done: !task.done } : task
    );
    setTasksItems(updateTasksItems);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isCompleted={showCompleted}
          showCompleted={showCompleted}
          cleanTasks={cleanTasks}
          setShowCompleted={(checked) => setShowCompleted(checked)}
        />
        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
