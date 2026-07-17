type tasksprops = {
  tasks: { id: number; text: string; completed: boolean }[];
};
export function DoneTasks({ tasks }: tasksprops) {
  const tasksCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed === true).length;
  return (
    <div className="doneSection">
      <hr />
      <div className="doneDiv">
        <div className="doneDivLeft">
          <img src="/save-check.svg" />
          <p> Done Tasks</p>
        </div>
        <p className="DoneTasksCount">
          {completedCount} / {tasksCount} done
        </p>
      </div>
    </div>
  );
}
