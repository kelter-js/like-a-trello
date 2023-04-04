import * as S from './styles';
import Card from './Card';
import AddNewItem from './AddNewItem';
import { useAppContext } from './state/AppStateContext';

type ColumnProps = {
  text: string;
  id: string;
}

const Column = ({ text, id }: ColumnProps): JSX.Element => {
  const { getTaskByListId } = useAppContext();

  const tasks = getTaskByListId(id);

  const renderTasks = () => tasks.map(task => <Card text={task.text} key={task.id} id={task.id} />);

  return (
    <S.ColumnContainer>
      <S.ColumnTitle>{text}</S.ColumnTitle>
      {renderTasks()}

      <AddNewItem
        toggleButtonText='+ Add another card'
        onAdd={console.log}
        dark
      />
    </S.ColumnContainer>
  );
}

export default Column;