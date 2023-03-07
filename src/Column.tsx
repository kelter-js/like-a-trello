import React from 'react';
import * as S from './styles';
import Card from './Card';

type ColumnProps = {
  text: string;
}

const Column = ({ text }: ColumnProps): JSX.Element => {
  return (
    <S.ColumnContainer>
      <S.ColumnTitle>{text}</S.ColumnTitle>
      <Card text='Generate App scaffold' />
      <Card text='Learn TypeScript' />
      <Card text='Begin to use static typing' />
    </S.ColumnContainer>
  );
}

export default Column;