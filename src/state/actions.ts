import { ColumnDragItem } from "../dragItem";

interface IAddListAction {
  type: 'ADD_LIST';
  payload: string;
}

interface IAddTaskAction {
  type: 'ADD_TASK';
  payload: { text: string; listId: string; }
}

interface IMoveListAction {
  type: 'MOVE_LIST';
  payload: { draggedId: string; hoverId: string; }
}

interface ISetDraggedItemAction {
  type: 'SET_DRAGGED_ITEM';
  payload: ColumnDragItem | null;
}

export type Action = IAddListAction | IAddTaskAction | IMoveListAction | ISetDraggedItemAction;

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

export const moveList = (draggedId: string, hoverId: string): Action => {
  return {
    type: 'MOVE_LIST',
    payload: {
      draggedId,
      hoverId
    },
  }
}

export const setDraggedItem = (draggedItem: ColumnDragItem | null): Action => {
  return {
    type: 'SET_DRAGGED_ITEM',
    payload: draggedItem
  }
}

