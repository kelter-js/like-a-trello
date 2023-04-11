import { Action } from "./actions";
import { AppState } from "./AppStateContext";
import { nanoid } from "nanoid";
import { findItemIndexById } from "../utils/arrayUtils";

export interface ITask {
  id: string;
  text: string;
}

export interface IList extends ITask {
  tasks: ITask[],
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

    default:
      return draft;
  }
};

export default appStateReducer;