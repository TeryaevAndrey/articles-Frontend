import React from 'react';
import styled from "styled-components";
import Filter from './Filter/Filter';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 15px;
`;

const Title = styled.span`
  display: inline-block;
  text-align: center;
`;

function Filters() {
  return (
    <Wrapper>
      <Title>Фильтровать по:</Title>
      <Filter title="Наука" />
      <Filter title="Программирование" />
      <Filter title="Искусство" />
      <Filter title="Новости" />
    </Wrapper>
  );
}

export default Filters;