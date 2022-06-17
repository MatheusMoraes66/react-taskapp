import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted }) => {
  const taskTableRows = (doneValue) => {
    const validToggle = doneValue ? true : false
    return tasks
      .filter((task) => task.done === validToggle)
      .map((task, index) => {
        return <TaskRow task={task} key={index} toggleTask={toggleTask} />;
      });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
