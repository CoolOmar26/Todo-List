'use client';
import { useState } from 'react';
import { ChangeEvent } from 'react';
type TaskInputProps = {
  onAddTask: (task: Task) => void;
};
type Task = {
  id: number;
  text: string;
  completed: boolean;
};
function TaskInput({ onAddTask }: TaskInputProps) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setInput('');
    onAddTask(newTask);
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="inputDiv">
      <input
        type="text"
        placeholder="Add a new task..."
        onChange={handleInput}
        value={input}
      />
      <button type="button" onClick={handleClick}>
        <img src="/plus.svg" alt="add" />
      </button>
    </div>
  );
}

export default TaskInput;
