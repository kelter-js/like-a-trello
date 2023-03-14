import React, { ChangeEvent, useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";
import useFocus from "./hooks/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const setTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const addTask = () => {
    onAdd(text);
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={setTextHandler}
      />
      <NewItemButton onClick={addTask}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;