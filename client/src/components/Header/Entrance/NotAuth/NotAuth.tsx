import styled from "styled-components";
import EntranceItem from '../EntranceItem/EntranceItem';
import UserImg from "../../../../img/user.svg";
import UserAddImg from "../../../../img/userAdd.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.div`
  display: block;
  width: 1px;
  height: 20px;
  background-color: #4D3D3D;
`;

function NotAuth() {
  return (
    <Wrapper>
      <EntranceItem to="/login" icon={UserImg} title="Вход" />
      <Line />
      <EntranceItem to="/reg" icon={UserAddImg} title="Регистрация" />
    </Wrapper>
  );
}

export default NotAuth;
