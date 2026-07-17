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
  const handleCheck = () => {
    CheckTaskStatus(id);
    console.log(state);
  };
  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <div className={`Todo ${state ? 'checked' : ''}`}>
      <div className="TodoLeft">
        <div className="CustomCheckbox" onClick={handleCheck}>
          {state && <img src="/check.svg" alt="checked" />}
        </div>
        <p> {text}</p>
      </div>

      <button className="TodoButton">
        <img src="/trash.svg" onClick={handleDelete} />
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
