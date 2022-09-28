import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const EntranceLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 12px;

  &:hover {
    border-bottom: 1px solid #4D3D3D;
  }
`;

interface EntranceItemProps {
  to: string;
  icon: string;
  title: string;
}

function EntranceItem({to, icon, title}: EntranceItemProps) {
  return (
    <EntranceLink as={NavLink} to={to}>
      <Icon src={icon} alt={title} />
      <Title>{title}</Title>
    </EntranceLink>
  );
}

export default EntranceItem;