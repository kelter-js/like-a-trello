import { useCallback, useRef, useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';

import { useAppState } from './state/AppStateContext';
import { moveList, addTask } from './state/actions';
import useItemDrag from './hooks/useItemDrag';
import Card from './Card';
import AddNewItem from './AddNewItem';
import isHidden from './utils/isHidden';
import * as S from './styles';

type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
}

const Column = ({ text, id, isPreview }: ColumnProps): JSX.Element => {
  const { draggedItem, getTaskByListId, dispatch } = useAppState();

  const columnElement = useRef<HTMLDivElement>(null);
  const [_, drop] = useDrop({
    accept: 'COLUMN',
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  const { drag } = useItemDrag({ type: 'COLUMN', id, text });

  const tasks = getTaskByListId(id);

  const renderTasks = () => tasks.map((task) => <Card text={task.text} key={task.id} id={task.id} />);

  const handleAdd = useCallback((text: string) => dispatch(addTask(text, id)), [id]);

  drag(drop(columnElement));

  const isItemHidden = useMemo(() => {
    return isHidden(draggedItem, 'COLUMN', id, isPreview);
  }, [draggedItem, id]);

  return (
    <S.ColumnContainer isPreview={isPreview} ref={columnElement} isHidden={isItemHidden}>
      <S.ColumnTitle>{text}</S.ColumnTitle>
      {renderTasks()}

      <AddNewItem
        toggleButtonText='+ Add another card'
        onAdd={handleAdd}
        dark
      />
    </S.ColumnContainer>
  );
}

export default Column;