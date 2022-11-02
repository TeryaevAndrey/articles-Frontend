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

const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 15px;
  max-height: 500px;
`;

interface FiltersProps {
  posts: [];
}

interface Post {
  _id: string;
  banner?: string;
  title: string;
  text: string;
  date: string;
  tag: string;
}

function Filters({posts}: FiltersProps) {
  const filters: string[] = [];

  posts.forEach((post: Post) => {
    if(post.tag.length !== 0) {
      filters.push(post.tag);
    }
  });

  const filtersWithoutDublicate = Array.from(new Set(filters));

  const resultFilters = filtersWithoutDublicate.map((filter) => {
    return <Filter title={filter} key={filter} />
  });

  return (
    <Wrapper>
      {
        filters.length > 0 && <Title>Фильтровать по:</Title>
      }
      
      <FiltersStyled>
        {
          resultFilters
        }
      </FiltersStyled>
    </Wrapper>
  );
}

export default Filters;