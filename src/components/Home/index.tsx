import React from 'react';

import type { Task } from '../../const-dev';
import { CommonContainer } from '../common/index.styles';
import { TaskList } from './task-list';
import { TaskProgress } from './task-progress';

type Props = {
  tasksList?: Task[];
  onMarkTaskAsDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
};

export const Home: React.FC<Props> = ({ tasksList, onMarkTaskAsDone, onRemoveTask }) => {
  const handleMarkTaskAsDone = (id: string): void => {
    onMarkTaskAsDone(id);
  };

  const handleRemoveTask = (id: string): void => {
    console.log('opa home');
    onRemoveTask(id);
  };

  return (
    <CommonContainer>
      <div style={{ margin: '3%', width: '50%' }}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '2%'
          }}
        >
          <TaskProgress tittle="Tarefas criadas" color="blue" />
          <TaskProgress tittle="Concluídas" color="purpleDark" />
        </div>
        <TaskList color="gray-300" tasksList={tasksList} onRemoveTask={handleRemoveTask} onMarkTaskAsDone={handleMarkTaskAsDone} />
      </div>
    </CommonContainer>
  );
};
