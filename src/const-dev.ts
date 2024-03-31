export type Task = {
  id: number | string;
  title: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  done: boolean;
};
// preciso gerar 10 tasks
export const tasks: Task[] = [
  {
    id: 1,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente X aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaXXXXXXXXXXXXX
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  },
  {
    id: 2,
    title: 'Criar um novo projeto2',
    description: `Criar um novo projeto para o cliente2`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  },
  {
    id: 3,
    title: 'Criar um novo projeto3',
    description: `Criar um novo projeto para o cliente3`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: true
  },
  {
    id: 4,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente4`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: true
  },
  {
    id: 5,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente5`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  },
  {
    id: 6,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente6`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  },
  {
    id: 7,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente7`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: true
  },
  {
    id: 8,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente8`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: true
  },
  {
    id: 9,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente9`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  },
  {
    id: 10,
    title: 'Criar um novo projeto',
    description: `Criar um novo projeto para o cliente10`,
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false
  }
];
