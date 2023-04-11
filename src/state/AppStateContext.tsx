import { ReactNode, createContext, useContext, Dispatch } from 'react';
import appStateReducer, { IList, ITask } from './AppStateReducer';
import { Action } from './actions';
import { useImmerReducer } from 'use-immer';

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
  dispatch: Dispatch<Action>;
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
      tasks: [{ id: "c1", text: "Learn Typescript" }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: "c2", text: "Begin to use static types" }],
    },
  ],
}

const AppStateContext = createContext<IContextProps>({} as IContextProps);

export const useAppState = () => useContext(AppStateContext);

const AppStateProvider = ({ children }: AppStateProvider): JSX.Element => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists } = state;

  const getTaskByListId = (id: string) => {
    return lists.find(list => list.id === id)?.tasks || [];
  }

  return (
    <AppStateContext.Provider value={{ lists, getTaskByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export default AppStateProvider;