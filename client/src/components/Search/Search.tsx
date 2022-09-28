import React from 'react';
import styled from "styled-components";
import SearchImg from "../../img/search.svg";
import ClearImg from "../../img/clear.svg";

interface SearchProps {
  width: string
}

const SearchWrapper = styled.div`
  width: ${(props: SearchProps) => props.width};
  min-height: 45px;
  background-color: #fff;
  padding: 13px 25px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  font-size: 13px;
  font-weight: 600;
  color: #4D3D3D;
  border: none;
  outline: none;
  margin-right: 10px;
  width: 100%;

  &::placeholder {
    color: #4D3D3D;
  }
`;

const ClearBtn = styled.img`
  width: 20px;
  height: 20px;
  ibject-fit: contain;
  cursor: pointer;
`;

function Search({width}: SearchProps) {
  return (
    <SearchWrapper width={width}>
      <Icon src={SearchImg} alt="search" />
      <SearchInput placeholder="Поиск..." />
      <ClearBtn src={ClearImg} alt="clear" />
    </SearchWrapper>
  );
}

export default Search;