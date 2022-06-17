export const VisibilityControl = ({
  isCompleted,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTasks();
    }
    setShowCompleted(!isCompleted);
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
      <input
        className="form-check-input"
        role="switch"
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
        <label className="form-check-label">Show Tasks Done</label>

        </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">Clear</button>
    </div>
  );
};
