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
    <table className="table table-dark table-striped table-bordered table-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
