type tasksprops = {
  tasksCount: number;
  completedCount: number;
  title: FilterProps;
};
type FilterProps = 'all' | 'Today' | 'active' | 'completed';
function Title({ tasksCount, completedCount, title }: tasksprops) {
  const titleText = {
    all: 'All Tasks',
    Today: "Today's Tasks ",
    active: 'Active Tasks',
    completed: 'Completed Tasks',
  };
  return (
    <div className="titleDiv">
      <div className="titleRightPart">
        <div className="titleImg">
          <img src="/check.svg" alt="" />
        </div>
        <div className="title"> {titleText[title]}</div>
      </div>
      <p className="DoneTasksCount">
        {completedCount} / {tasksCount} done
      </p>
    </div>
  );
}

export default Title;
