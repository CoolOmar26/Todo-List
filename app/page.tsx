'use client';
import Title from './components/Title';
import TaskInput from './components/TaskInput';
import TodoDiv from './components/Todos';
import { useState } from 'react';
import { useEffect } from 'react';
import SideBar from './components/SideBar';
import FilterButtons from './components/FilterButtons';

type Task = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  priority: 'Low' | 'Medium' | 'High';
};

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTask] = useState<Task[]>([]);
  const [sort, setSort] = useState('PriorityHigh');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTask(JSON.parse(savedTodos));
    }
  }, []);
  useEffect(() => {
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  const priorityValue = {
    Low: 1,
    Medium: 2,
    High: 3,
  };
  const SortedTasks = filteredTasks.sort((a, b) => {
    if (sort == 'PriorityHigh')
      return priorityValue[b.priority] - priorityValue[a.priority];
    if (sort == 'PriorityLow')
      return priorityValue[a.priority] - priorityValue[b.priority];
    if (sort == 'Newest')
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    if (sort == 'Oldest')
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return 0;
  });
  const tasksCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed === true).length;
  return (
    <div className="pageDiv">
      <div className="todoContainer">
        <SideBar />
        <div className="MainPart">
          <Title tasksCount={tasksCount} completedCount={completedCount} />
          <TaskInput onAddTask={addTask} />
          <FilterButtons
            checkFilter={setFilter}
            selected={filter}
            sort={sort}
            setSort={setSort}
          />
          {CheckIfNoTask()}
          <TodoDiv
            tasks={SortedTasks}
            deleteTask={deleteTask}
            CheckTaskStatus={CheckTaskStatus}
          />
        </div>
      </div>
    </div>
  );
}
