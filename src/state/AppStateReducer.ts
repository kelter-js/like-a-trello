import { Action } from "./actions";
import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { ColumnDragItem } from "../dragItem";

export interface ITask {
  id: string;
  text: string;
}

export interface IList extends ITask {
  tasks: ITask[],
}

export type AppState = {
  lists: IList[]
  draggedItem: ColumnDragItem | null;
}

const appStateReducer = (draft: AppState, action: Action): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: []
      });

      break;
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetListId = findItemIndexById(draft.lists, listId);

      draft.lists[targetListId].tasks.push({
        id: nanoid(),
        text
      });

      break;
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);

      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex) as IList[];
      break;
    }
    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload;
      break;
    }

    default:
      return draft;
  }
};

export default appStateReducer;