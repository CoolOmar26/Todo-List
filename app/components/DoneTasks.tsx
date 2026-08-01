type tasksprops = {
  tasksCount: number;
  completedCount: number;
};
export function DoneTasks({ tasksCount, completedCount }: tasksprops) {
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
