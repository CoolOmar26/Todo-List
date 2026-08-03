import { useState } from 'react';
import CategoryDisplay from './CategoryDisplay';

type tasksProps = {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
    priority: string;
    category: string;
  }[];
  deleteTask: (id: number) => void;
  CheckTaskStatus: (id: number) => void;
};

type taskProps = {
  text: string;
  id: number;
  state: boolean;
  createdAt: string;
  deleteTask: (id: number) => void;
  CheckTaskStatus: (id: number) => void;
  priority: string;
  category: string;
};

function Todo({
  text,
  id,
  state,
  createdAt,
  deleteTask,
  CheckTaskStatus,
  priority,
  category,
}: taskProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const handleCheck = () => {
    CheckTaskStatus(id);
  };

  const handleDelete = () => {
    deleteTask(id);
    setIsConfirming(false);
  };
  const getRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();

    // Remove the time so we're only comparing dates
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const taskDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diff =
      (todayOnly.getTime() - taskDay.getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;

    return date.toLocaleDateString();
  };
  if (isConfirming) {
    return (
      <div className="Todo">
        <div className="confirmDeleteWrapper">
          <span className="confirmText">Delete task?</span>
          <button className="confirmBtn yesBtn" onClick={handleDelete}>
            Yes
          </button>
          <button
            className="confirmBtn noBtn"
            onClick={() => setIsConfirming(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`Todo ${state ? 'checked' : ''}`}>
      <div className="CustomCheckbox" onClick={handleCheck}>
        {state && <img src="/check.svg" alt="checked" />}
      </div>
      <div className="todoMid">
        <p className="todoText"> {text}</p>
        <div className="todoMidBottom">
          <div className={`priorityDisplay ${priority}`}>
            <span className={`dot ${priority}`}></span>
            {priority}
          </div>
          <CategoryDisplay category={category} />
          <div className="createdAtDiv">
            <img src="/calendar.svg" alt="" />
            <p className="todoDate">{getRelativeDate(createdAt)}</p>
          </div>
        </div>
      </div>

      <button className="TodoButton" onClick={() => setIsConfirming(true)}>
        <img src="/trash.svg" alt="delete" />
      </button>
    </div>
  );
}
function TodoDiv({ tasks, deleteTask, CheckTaskStatus }: tasksProps) {
  const mapedTasks = tasks.map((task) => {
    return (
      <Todo
        text={task.text}
        id={task.id}
        CheckTaskStatus={CheckTaskStatus}
        state={task.completed}
        deleteTask={deleteTask}
        key={task.id}
        createdAt={task.createdAt}
        priority={task.priority}
        category={task.category}
      />
    );
  });

  return <div className="TodosDiv">{mapedTasks}</div>;
}

export default TodoDiv;
