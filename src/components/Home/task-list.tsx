import React from 'react';

import clipboard from '../../assets/clipboard.svg';
import type { Task } from '../../const-dev';
import { defaultTheme } from '../../styles/theme/default';
import { TaskItem } from './task-item';

type Props = {
  color: keyof typeof defaultTheme;
  tasksList?: Task[];
  onMarkTaskAsDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
};

export const TaskList: React.FC<Props> = ({ tasksList = [], onMarkTaskAsDone, onRemoveTask }) => {
  const handleMarkTaskAsDone = (id: string): void => {
    console.log('opa tasklit');
    onMarkTaskAsDone(id);
  };

  const handleRemoveTask = (id: string): void => {
    console.log('opa tasklit');
    onRemoveTask(id);
  };

  return (
    <>
      {tasksList.length > 0 ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: 'solid 2px',
            borderColor: defaultTheme['gray-400'],
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: '100%',
            gap: '0.5rem',
            flexDirection: 'column',
            padding: '2% 0'
          }}
        >
          {tasksList.map(task => (
            <TaskItem key={task.id} task={task} onMarkAsDone={handleMarkTaskAsDone} onRemoveTask={handleRemoveTask} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: 'solid 2px',
            borderColor: defaultTheme['gray-400'],
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            width: '100%',
            gap: '0.5rem',
            flexDirection: 'column',
            height: '25vh'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'column'
            }}
          >
            <img src={clipboard} width={62} height={72} />
            <span style={{ color: defaultTheme.blue, fontSize: '16px' }}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </span>
            <span style={{ color: defaultTheme.blueDark, fontSize: '16px' }}>
              <strong>Crie tarefas e organize seus itens a fazer</strong>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
