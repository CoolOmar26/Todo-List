import { useState } from 'react';

type tasksProps = {
  tasks: { id: number; text: string; completed: boolean }[];
  deleteTask: (id: number) => void;
  CheckTaskStatus: (id: number) => void;
};

type taskProps = {
  text: string;
  id: number;
  state: boolean;
  deleteTask: (id: number) => void;
  CheckTaskStatus: (id: number) => void;
};

function Todo({ text, id, state, deleteTask, CheckTaskStatus }: taskProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleCheck = () => {
    CheckTaskStatus(id);
  };

  const handleDelete = () => {
    deleteTask(id);
    setIsConfirming(false);
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
      <div className="TodoLeft">
        <div className="CustomCheckbox" onClick={handleCheck}>
          {state && <img src="/check.svg" alt="checked" />}
        </div>
        <p> {text}</p>
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
      />
    );
  });

  return <div className="TodosDiv">{mapedTasks}</div>;
}

export default TodoDiv;
