import React, { useState } from 'react';
import { AddItemButton } from './styles';
import NewItemForm from './NewItemForm';

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps): JSX.Element => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => setShowForm((state) => !state);

  const onAddHandler = (text: string) => {
    onAdd(text);
    setShowForm(false);
  }

  return (
    showForm ? (
      <NewItemForm onAdd={onAddHandler} />
    ) : (
      <AddItemButton dark={dark} onClick={handleClick}>
        {toggleButtonText}
      </AddItemButton >
    )
  );
}

export default AddNewItem;