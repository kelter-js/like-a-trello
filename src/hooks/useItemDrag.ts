import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { ColumnDragItem } from '../dragItem';
import { setDraggedItem } from '../state/actions';
import { getEmptyImage } from 'react-dnd-html5-backend';

const useItemDrag = (item: ColumnDragItem) => {
  const { dispatch } = useAppState();

  const [_, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview]);

  return { drag }
}

export default useItemDrag;