type tasksprops = {
  tasksCount: number;
  completedCount: number;
};
function Title({ tasksCount, completedCount }: tasksprops) {
  return (
    <div className="titleDiv">
      <div className="titleRightPart">
        <div className="titleImg">
          <img src="/check.svg" alt="" />
        </div>
        <div className="title"> Today's Tasks</div>
      </div>
      <p className="DoneTasksCount">
        {completedCount} / {tasksCount} done
      </p>
    </div>
  );
}

export default Title;
