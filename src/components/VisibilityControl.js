export const VisibilityControl = ({ isCompleted, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
      
    }
    setShowCompleted(!isCompleted)
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Tasks Done</label>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
