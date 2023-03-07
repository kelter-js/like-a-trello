import React, { useState } from 'react';
import { AddItemButton } from './styles';

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps): JSX.Element => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => setShowForm((state) => !state);

  return (
    <AddItemButton dark={dark} onClick={handleClick}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;