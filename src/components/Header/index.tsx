import React from 'react';

import button from '../../assets/button.svg';
import logo from '../../assets/logo.svg';
import type { Task } from '../../const-dev';
import { ContainerInput, Input, HomeButton } from '../Home/styles';
import { HeaderContainer } from './styles';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  onCreateTask?: (task: Task) => void;
};

export const Header: React.FC<Props> = ({ onCreateTask }) => {
  const [taskDescription, setTaskDescription] = React.useState<string>();

  const handleSetTaskDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onCreateTask(task);
    event.preventDefault();
    setTaskDescription(event.target.value);
  };

  const handleCreateTask = () => {
    if (onCreateTask) onCreateTask({ id: uuidv4(), done: false, description: taskDescription, title: 'teste' } as Task);
  };

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
      <ContainerInput>
        <form
          action="/"
          style={{ display: 'flex', width: '100%', alignContent: 'center', justifyContent: 'space-between', gap: '0.5rem' }}
          onSubmit={handleCreateTask}
        >
          <Input placeholder="Adicione um nova tarefa" onChange={handleSetTaskDescription} />
          <HomeButton type="submit" style={{ padding: '12px' }}>
            <a style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', gap: '0.5rem', cursor: 'pointer' }}>
              Criar <img src={button} alt="" />
            </a>
          </HomeButton>
        </form>
      </ContainerInput>
    </>
  );
};
