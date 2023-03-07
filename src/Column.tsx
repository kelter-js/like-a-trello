import React from 'react';
import * as S from './styles';

type ColumnProps = {
  text: string;
}

const Column = ({ text }: ColumnProps): JSX.Element => {
  return (
    <S.ColumnContainer>
      <S.ColumnTitle>{text}</S.ColumnTitle>
      <S.CardContainer>Generate App scaffold</S.CardContainer>
      <S.CardContainer>Learn TypeScript</S.CardContainer>
      <S.CardContainer>Begin to use static typing</S.CardContainer>
    </S.ColumnContainer>
  );
}

export default Column;