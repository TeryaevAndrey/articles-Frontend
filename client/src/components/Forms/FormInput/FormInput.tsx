import React from 'react';
import styled from "styled-components";

const Wrapper = styled.input`
  width: 100%;
  min-height: 70px;
  background-color: #fff;
  padding: 25px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #4D3D3D;
  border-radius: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #4D3D3D;

  &::placeholder {
    color: #4D3D3D;
  }
`;

interface FormInputProps {
  type: string;
  placeholder: string;
}

function FormInput({type, placeholder}: FormInputProps) {
  return (
    <Wrapper type={type} placeholder={placeholder} />
  );
}

export default FormInput;