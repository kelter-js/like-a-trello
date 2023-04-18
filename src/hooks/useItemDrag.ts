import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { ColumnDragItem } from '../dragItem';
import { setDraggedItem } from '../state/actions';

const useItemDrag = (item: ColumnDragItem) => {
  const { dispatch } = useAppState();
  
  const [_, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  return { drag }
}

export default useItemDrag;