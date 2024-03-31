import React from 'react';

import check from '../../assets/check.svg';
import marked from '../../assets/marked.svg';
import trash from '../../assets/trash.svg';
import type { Task } from '../../const-dev';
import { defaultTheme } from '../../styles/theme/default';

type Props = {
  task: Task;
  onMarkAsDone: (id: string) => void;
  onRemoveTask: (id: string) => void;
};

export const TaskItem: React.FC<Props> = ({ task, onMarkAsDone, onRemoveTask }) => {
  const handlemarkAsDoneItem = () => {
    console.log('opa taskitem');
    onMarkAsDone(task.id as string);
  };
  const handleRemoveTaskItem = () => {
    console.log('opa taskitem');
    onRemoveTask(task.id as string);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <a style={{ cursor: 'pointer' }} onClick={handlemarkAsDoneItem}>
        <img src={task.done ? marked : check} alt="" />
      </a>
      <span style={{ textDecoration: 'line-through', color: defaultTheme['gray-300'], fontSize: '16px', maxWidth: '90%', wordWrap: 'break-word' }}>
        {task.description}
      </span>
      <a style={{ cursor: 'pointer' }} onClick={handleRemoveTaskItem}>
        <img src={trash} alt="" />
      </a>
    </div>
  );
};
