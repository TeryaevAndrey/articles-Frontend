import React from 'react';
import styled from "styled-components";
import { useAppSelector } from '../../store/Hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  position: absolute;
  right: -100%;
  top: 0;
  min-width: 230px;
  min-height: 40px;
  padding: 15px 30px;
  background-color: #31A54B;
  transition: all 0.3s ease;
  opacity: 0;
  border-radius: 0 0 0 20px;

  &.active {
    right: 0;
    opacity: 1;
  }
`;

interface MessageProps {
  text: string;
}

function Message({text}: MessageProps) {
  const [active, setActive] = React.useState<string>("");
  const message = useAppSelector(state => state.main.message);

  const changeState = () => {
    if(text.length > 0) {
      setActive("active");
    }

    setTimeout(() => {
      setActive("");
    }, 2000);
  };

  React.useEffect(() => {
    changeState();
  }, [message]);

  return (
    <Wrapper className={active}>
      <span>{text}</span>
    </Wrapper>
  );
}

export default Message;