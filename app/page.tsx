'use client';
import Title from './components/Title';
import TaskInput from './components/TaskInput';
import TodoDiv from './components/Todos';
import { DoneTasks } from './components/DoneTasks';
import { useState } from 'react';
import { Denk_One } from 'next/font/google';
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTask] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTask([...tasks, task]);
  };
  const deleteTask = (id: number) => {
    setTask(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  const CheckTaskStatus = (id: number) => {
    setTask(
      tasks.map((task) => {
        const NewTaskState =
          task.id === id ? { ...task, completed: !task.completed } : task;
        return NewTaskState;
      })
    );
  };
  return (
    <div className="pageDiv">
      <div className="todoContainer">
        <Title />
        <TaskInput onAddTask={addTask} />
        <TodoDiv
          tasks={tasks}
          deleteTask={deleteTask}
          CheckTaskStatus={CheckTaskStatus}
        />
        <DoneTasks tasks={tasks} />
      </div>
    </div>
  );
}
