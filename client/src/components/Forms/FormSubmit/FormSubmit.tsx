import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  min-height: 70px;
  background-color: #fff;
  border: 1px solid #4d3d3d;
  color: #4d3d3d;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.13);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

interface FormSubmitProps {
  type: string;
  title: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

function FormSubmit({ type, title, onClick, disabled }: FormSubmitProps) {
  return (
    <Btn onClick={onClick} disabled={disabled}>
      {title}
    </Btn>
  );
}

export default FormSubmit;
