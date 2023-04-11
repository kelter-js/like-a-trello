import { useCallback } from 'react';

import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';
import { AppContainer } from './styles';
import Column from './Column';
import AddNewItem from './AddNewItem';

const App = () => {
  const { lists, dispatch } = useAppState();

  const renderLists = () => lists.map(list => <Column text={list.text} key={list.id} id={list.id} />);

  const handleAdd = useCallback((text: string) => dispatch(addList(text)), []);

  return (
    <AppContainer>
      {renderLists()}

      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={handleAdd}
      />
    </AppContainer>
  );
};

export default App;
