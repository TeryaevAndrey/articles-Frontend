import React from "react";
import styled from "styled-components";
import SearchImg from "../../img/search.svg";
import ClearImg from "../../img/clear.svg";
import { useAppDispatch } from "../../store/Hooks";
import { changeValue } from "../../store/SearchSlice";

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
  color: #4d3d3d;
  border: none;
  outline: none;
  margin-right: 10px;
  width: 100%;

  &::placeholder {
    color: #4d3d3d;
  }
`;

const ClearBtn = styled.img`
  width: 20px;
  height: 20px;
  ibject-fit: contain;
  cursor: pointer;
`;

interface SearchProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width: string;
  value?: string;
}

function Search({ onChange, width, value }: SearchProps) {
  const dispatch = useAppDispatch();

  const clearSearchValue = () => {
    dispatch(changeValue(""));
  };

  return (
    <SearchWrapper width={width}>
      <Icon src={SearchImg} alt="search" />
      <SearchInput onChange={onChange} value={value} placeholder="Поиск..." />
      <ClearBtn onClick={clearSearchValue} src={ClearImg} alt="clear" />
    </SearchWrapper>
  );
}

export default Search;
