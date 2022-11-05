import styled from "styled-components";

const LoaderStyled = styled.div`
  display: block;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #c95514 #0000;
  animation: s1 1s infinite;
  margin: 30px auto 0 auto;

  @keyframes s1 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;

interface LoaderProps {
  style?: object;
}

function Loader({ style }: LoaderProps) {
  return <LoaderStyled style={style} />;
}

export default Loader;
