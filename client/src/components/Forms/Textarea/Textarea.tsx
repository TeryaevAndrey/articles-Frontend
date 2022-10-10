import React from 'react';
import styled from "styled-components";

const TextareaStyled = styled.textarea`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  outline: none;
  padding: 20px 35px;
  font-size: 16px;
  color: #4D3D3D;
  min-height: ${(props: {minHeight: string}) => props.minHeight};

  &::placeholder {
    color: #4D3D3D;
    font-weight: 600;
  }
`;

interface TextareaProps {
  minHeight: string;
  placeholder: string;
  name?: string;
  onChange: React.ChangeEventHandler;
  value?: string;
}

function Textarea({minHeight, placeholder, name, onChange, value}: TextareaProps) {
  return (
    <TextareaStyled minHeight={minHeight} placeholder={placeholder} name={name} onChange={onChange} value={value} />
  );
}

export default Textarea;