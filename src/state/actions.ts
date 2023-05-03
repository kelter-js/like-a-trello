import { DragItem } from "../dragItem";

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
  payload: DragItem | null;
}

interface IMoveTaskAction {
  type: 'MOVE_TASK';
  payload: {
    draggedItemId: string;
    hoveredItemId: string | null;
    sourceColumnId: string;
    targetColumnId: string;
  }
}

export type Action = IAddListAction | IAddTaskAction | IMoveListAction | ISetDraggedItemAction | IMoveTaskAction;

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

export const setDraggedItem = (draggedItem: DragItem | null): Action => {
  return {
    type: 'SET_DRAGGED_ITEM',
    payload: draggedItem
  }
}

export const moveTask = (draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string,
): Action => {
  return {
    type: 'MOVE_TASK',
    payload: {
      draggedItemId,
      hoveredItemId,
      sourceColumnId,
      targetColumnId,
    }
  }
}

