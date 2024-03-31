import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Notes } from './components/Notes';
import { tasks, type Task } from './const-dev';
import { DefaultLayout } from './layouts';

export const Router: React.FC<{}> = () => {
  const [taskList, setTaskList] = React.useState<Task[]>(tasks);

  const handleCreateTask = (task: Task) => {
    console.log('opa routes ');
    console.log({ task });
    const newTasksList = [...taskList, task];
    setTaskList(newTasksList);
  };

  const handleMarkTaskAsDone = (id: string): void => {
    const task = taskList.find(task => task.id === id);
    console.log('routes');
    if (task) {
      task.done = !task.done;
      const newTasksList = taskList.map(t => (t.id === id ? task : t));
      setTaskList(newTasksList);
    }
  };

  const handleRemoveTask = (id: string): void => {
    const newTasksList = taskList.filter(task => task.id !== id);
    setTaskList(newTasksList);
  };
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout onCreateTask={handleCreateTask} />}>
        <Route path="/" element={<Home tasksList={taskList} onMarkTaskAsDone={handleMarkTaskAsDone} onRemoveTask={handleRemoveTask} />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
    </Routes>
  );
};
