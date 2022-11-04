import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EditImg from "../../img/edit.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 705px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.015);
  }

  &.static {
    cursor: default;
  }

  &.static:hover {
    transform: none;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  font-size: 25px;
  line-height: 30px;
  margin-top: 15px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Date = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`;

const Icon = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;

  & path {
    transition: all 0.2s ease;
  }

  &:hover path {
    fill: #bf2512;
  }
`;

interface ArticleBrieflyProps {
  onClick?: React.MouseEventHandler;
  likeClick?: React.MouseEventHandler;
  banner?: string;
  title: string;
  text: string;
  date: string;
  className?: string;
  isAuth?: boolean;
  _id?: string;
}

function ArticleBriefly({
  onClick,
  className,
  banner,
  title,
  text,
  date,
  isAuth,
  _id
}: ArticleBrieflyProps) {
  const navigate = useNavigate(); 

  const editHandler = (event: React.MouseEvent, id: string | undefined) => {
    event.stopPropagation();
    
    navigate(`/edit/${id}`);
  }

  return (
    <Wrapper onClick={onClick} className={className}>
      {banner && <Banner src={banner} alt={title} />}
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Footer>
        <Date>{date}</Date>
        {/* <Icon
          onClick={likeHandler}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3_156)">
            <path
              d="M12.425 5.063C13.434 2.6715 15.739 1.0005 18.42 1.0005C22.0315 1.0005 24.6325 4.09 24.9595 7.772C24.9595 7.772 25.136 8.686 24.7475 10.3315C24.2185 12.5725 22.975 14.5635 21.2985 16.083L12.425 24L3.701 16.0825C2.0245 14.5635 0.781001 12.572 0.252001 10.331C-0.136499 8.6855 0.0400011 7.7715 0.0400011 7.7715C0.367001 4.0895 2.968 1 6.5795 1C9.261 1 11.416 2.6715 12.425 5.063Z"
              fill="#DECCCA"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_156">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </Icon> */}

        {isAuth && (
          <Icon onClick={(event) => editHandler(event, _id)}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_173)">
              <path
                d="M5.68164 13.6364V18.1818C5.68164 18.8094 6.19043 19.3182 6.818 19.3182H11.3635C11.6648 19.3182 11.9538 19.1984 12.1669 18.9853L24.6669 6.4853C25.1107 6.04152 25.1107 5.32205 24.6669 4.87826L20.1214 0.332803C19.9085 0.119773 19.6194 0 19.318 0C19.0166 0 18.7275 0.119773 18.5145 0.332879L6.01452 12.8329C5.80134 13.0459 5.68164 13.335 5.68164 13.6364ZM7.95437 14.107L19.318 2.74341L22.2564 5.68182L10.8928 17.0455H7.95437V14.107Z"
                fill="#4D3D3D"
              />
              <path
                d="M23.8636 11.3637C23.2361 11.3637 22.7273 11.8725 22.7273 12.5001V22.7273H2.27273V2.27273H12.5C13.1276 2.27273 13.6364 1.76394 13.6364 1.13636C13.6364 0.508788 13.1276 0 12.5 0H1.13636C0.508788 0 0 0.508788 0 1.13636V23.8636C0 24.4912 0.508788 25 1.13636 25H23.8636C24.4912 25 25 24.4912 25 23.8636V12.5001C25 11.8724 24.4912 11.3637 23.8636 11.3637Z"
                fill="#4D3D3D"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_173">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </Icon>
        )}
      </Footer>
    </Wrapper>
  );
}

export default ArticleBriefly;
