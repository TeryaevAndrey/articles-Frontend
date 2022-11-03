import React from 'react';
import styled from "styled-components";

const FilterBtn = styled.button`
  width: 100%;
  min-height: 45px;
  background-color: #fff;
  padding: 15px 40px;
  font-size: 13px;
  font-weight: 600;
  color: #4D3D3D;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #4D3D3D;
  }

  &.active {
    border-bottom: 1px solid #4D3D3D;
  }
`;

interface FilterProps {
  title: string;
  onClick: React.MouseEventHandler;
  className: string;
}

function Filter({title, onClick, className}: FilterProps) {
  return (
    <FilterBtn onClick={onClick} className={className}>
      {title}
    </FilterBtn>
  );
}

export default Filter;