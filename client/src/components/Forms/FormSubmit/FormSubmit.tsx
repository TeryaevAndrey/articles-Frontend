import React from 'react';
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  min-height: 70px;
  background-color: #fff;
  border: 1px solid #4D3D3D;
  color: #4D3D3D;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
`;

interface FormSubmitProps {
  type: string;
  title: string;
}

function FormSubmit({type, title}: FormSubmitProps) {
  return (
    <Btn>
      {title}
    </Btn>
  );
}

export default FormSubmit;