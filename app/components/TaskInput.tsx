'use client';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import PriorityButtons from './PriorityButtons';
import CategorySelect from './CategorySelect';
type TaskInputProps = {
  onAddTask: (task: Task) => void;
  category: string;
  setCategory: (category: string) => void;
};
type Task = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  priority: 'Low' | 'Medium' | 'High';
  category: string;
};
function TaskInput({ onAddTask, category, setCategory }: TaskInputProps) {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleClick = () => {
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toISOString(),
      priority: priority,
      category: category,
    };

    setInput('');
    onAddTask(newTask);
    console.log(newTask);
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="inputDiv">
      <div className="textInputDiv">
        <input
          type="text"
          placeholder="Add a new task..."
          onChange={handleInput}
          value={input}
        />
        <button type="button" onClick={handleClick} className="addTaskButton">
          <img src="/plus.svg" alt="add" />
        </button>
      </div>
      <div className="inputBottomDiv">
        <div className="priority">
          <p>Priority</p>
          <PriorityButtons priority={priority} setPriority={setPriority} />
        </div>
        <div className="Category">
          <p>Category</p>
          <CategorySelect category={category} setCategory={setCategory} />
        </div>
      </div>
    </div>
  );
}

export default TaskInput;
