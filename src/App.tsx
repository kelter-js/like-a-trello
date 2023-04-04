import { AppContainer } from './styles';
import Column from './Column';
import AddNewItem from './AddNewItem';
import { useAppContext } from './state/AppStateContext';

const App = () => {
  const { lists } = useAppContext();

  const renderLists = () => lists.map(list => <Column text={list.text} key={list.id} id={list.id} />)

  return (
    <AppContainer>
      {renderLists()}
      
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={console.log}
      />
    </AppContainer>
  );
};

export default App;
