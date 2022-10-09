import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../../context/auth.context";
import ExitImg from "../../../../img/exit.svg";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;

const ExitWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const ExitText = styled.span`
    display: inline-block;
    font-size: 12px;
    color: #4D3D3D;

    &:hover {
        border-bottom: 1px solid #4D3D3D;
    }
`;

const Name = styled.span`
    ${ExitText}
`;

interface ExitProps {
    name: string | undefined;
}

function Exit({name}: ExitProps) {
    const {logout} = React.useContext(AuthContext); 
    const navigate = useNavigate();

    const exit = () => {
        logout();
        navigate("/");
    };

    return(
        <Wrapper>
            <Name onClick={() => navigate("/profile")}>{name}</Name>
            <ExitWrapper onClick={exit}>
                <Icon src={ExitImg} alt="exit" />
                <ExitText>Выход</ExitText>
            </ExitWrapper>
        </Wrapper>
    );
}

export default Exit;