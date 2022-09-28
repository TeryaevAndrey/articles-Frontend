import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  position: relative;
`;

const Input = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  color: #4D3D3D;
  border-radius: 10px;
  border: 1px solid #4D3D3D;
  cursor: pointer;
`;

function AddImg() {
  return (
    <Wrapper>
      <Input type="file" id="downloadBanner" />
      <Label htmlFor="downloadBanner">Загрузить баннер</Label>
    </Wrapper>
  );
}

export default AddImg;