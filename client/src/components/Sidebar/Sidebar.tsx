import React from 'react';
import styled from "styled-components";
import Filters from './Filters/Filters';
import Search from '../Search/Search';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { changeValue } from '../../store/SearchSlice';
import ArrowBottomImg from "../../img/arrow-bottom.svg";
import { Post } from '../../interfaces';

const SidebarStyled = styled.div`
  max-width: 385px;
  min-height: 510px;
  background-color: #FBF4F4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(225, 204, 204, 0.25);
  padding: 25px 20px;
  display: flex;
  flex-direction: column;

  @media(max-width: 890px) {
    min-height: max-content;
  }

  @media(max-width: 480px) {
    max-width: 100%;
    width: 100%;
  }
`;

const FilterBtnImg = styled.img`
  padding-bottom: 2px;
  margin: 7px auto 0 auto;
  width: 35px;
  height: 35px;
`;

interface SidebarProps {
  posts: Post[];
}

function Sidebar({posts}: SidebarProps) {
  const [isOpenFilters, setIsOpenFilters] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.searchValue);

  const changeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(event.target.value));
  }

  const openFiltersHandler = () => {
    setIsOpenFilters(!isOpenFilters);
  }

  return (
    <SidebarStyled>
      <Search onChange={changeSearchHandler} value={searchValue} width={"100%"} />
      {
        window.innerWidth <= 890 ? <FilterBtnImg onClick={openFiltersHandler} src={ArrowBottomImg} /> : <Filters posts={posts} />
      }

      {
        isOpenFilters && <Filters posts={posts} />
      }
      
    </SidebarStyled>
  );
}

export default Sidebar;