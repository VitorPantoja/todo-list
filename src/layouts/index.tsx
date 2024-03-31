import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import type { Task } from '../const-dev';
import { LayoutContainer } from './styles';

type Props = {
  onCreateTask: (task: Task) => void;
};

export const DefaultLayout: React.FC<Props> = ({ onCreateTask }) => {
  const handleCreateTask = (task: Task) => {
    onCreateTask(task);
  };
  return (
    <LayoutContainer>
      <Header onCreateTask={handleCreateTask} />
      <Outlet />
    </LayoutContainer>
  );
};
