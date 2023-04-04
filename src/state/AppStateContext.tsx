import { ReactNode, createContext, useContext } from 'react';

type Task = {
  id: string;
  text: string;
}

type List = {
  id: string;
  text: string;
  tasks: Task[];
}

export type AppState = {
  lists: List[];
}

interface IContextProps {
  lists: List[];
  getTaskByListId: (id: string) => Task[];
}

interface AppStateProvider {
  children: ReactNode;
}

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: "c3", text: "Begin to use static types" }],
    },
  ],
}

const AppStateContext = createContext<IContextProps>({} as IContextProps);

export const useAppContext = () => useContext(AppStateContext);

const AppStateProvider = ({ children }: AppStateProvider): JSX.Element => {
  const { lists } = appData;

  const getTaskByListId = (id: string) => {
    return lists.find(list => list.id === id)?.tasks || [];
  }

  return (
    <AppStateContext.Provider value={{ lists, getTaskByListId }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;