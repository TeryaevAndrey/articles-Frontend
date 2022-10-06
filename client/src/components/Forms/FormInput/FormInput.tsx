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
  transition: all 0.3s ease;

  &::placeholder {
    color: #4D3D3D;
  }

  &:focus {
    border-bottom: 1px solid #31A54B;
  }

  &.error::placeholder {
    color: red;
  }

  &.error {
    border-bottom: 1px solid red;
  }
`;

interface FormInputProps {
  type: string;
  placeholder: string;
  name?: string,
  onChange?: React.ChangeEventHandler,
  value?: string;
  className?: string;
}

function FormInput({type, placeholder, name, onChange, value, className}: FormInputProps) {
  return (
    <Wrapper className={className} onChange={onChange} value={value} type={type} placeholder={placeholder} name={name} />
  );
}

export default FormInput;