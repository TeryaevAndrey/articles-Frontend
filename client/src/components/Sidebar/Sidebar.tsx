import React from 'react';
import styled from "styled-components";
import Filters from './Filters/Filters';
import Search from '../Search/Search';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { changeValue } from '../../store/SearchSlice';

const SidebarStyled = styled.div`
  max-width: 385px;
  min-height: 510px;
  background-color: #FBF4F4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(225, 204, 204, 0.25);
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const changeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  }

  return (
    <SidebarStyled>
      <Search onChange={changeSearchHandler} value={searchValue} width={"100%"} />
      <Filters />
    </SidebarStyled>
  );
}

export default Sidebar;