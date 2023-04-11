interface IAddListAction {
  type: 'ADD_LIST';
  payload: string;
}

interface IAddTaskAction {
  type: 'ADD_TASK';
  payload: { text: string; listId: string; }
}

export type Action = IAddListAction | IAddTaskAction;

export const addTask = (text: string, listId: string): Action => {
  return {
    type: 'ADD_TASK',
    payload: {
      text,
      listId
    }
  }
}

export const addList = (text: string): Action => {
  return {
    type: 'ADD_LIST',
    payload: text,
  }
}

