import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => {
          return (
            <TaskRow task={task} key={index} toggleTask={toggleTask} />
          );
        })}
      </tbody>
    </table>
  );
};
