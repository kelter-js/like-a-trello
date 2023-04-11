import { useCallback } from 'react';

import { useAppState } from './state/AppStateContext';
import { addTask } from './state/actions';
import * as S from './styles';
import Card from './Card';
import AddNewItem from './AddNewItem';

type ColumnProps = {
  text: string;
  id: string;
}

const Column = ({ text, id }: ColumnProps): JSX.Element => {
  const { getTaskByListId, dispatch } = useAppState();

  const tasks = getTaskByListId(id);

  const renderTasks = () => tasks.map((task) => <Card text={task.text} key={task.id} id={task.id} />);

  const handleAdd = useCallback((text: string) => dispatch(addTask(text, id)), [id]);

  return (
    <S.ColumnContainer>
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