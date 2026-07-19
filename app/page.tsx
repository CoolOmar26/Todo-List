'use client';
import Title from './components/Title';
import TaskInput from './components/TaskInput';
import TodoDiv from './components/Todos';
import { DoneTasks } from './components/DoneTasks';
import { useState } from 'react';
import { useEffect } from 'react';
import { readRouteCacheEntry } from 'next/dist/client/components/segment-cache/cache';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTask] = useState<Task[]>([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTask(JSON.parse(savedTodos));
    }
  }, []);
  useEffect(() => {
    console.log('Saving:', tasks);
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);
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

  const CheckIfNoTask = () => {
    if (tasks.length === 0) {
      return (
        <p className="NoTasksText">All caught up! Add a task to get started</p>
      );
    }
  };
  return (
    <div className="pageDiv">
      <div className="todoContainer">
        <Title />
        <TaskInput onAddTask={addTask} />
        {CheckIfNoTask()}
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
