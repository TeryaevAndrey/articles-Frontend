import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 705px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.015);
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 405px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 20px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 25px;
  line-height: 30px;
  margin-top: 15px;
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

const Like = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;

  & path {
    transition: all 0.2s ease;
  }

  &:hover path {
    fill: #BF2512;
  }
`;

interface ArticleBrieflyProps {
  onClick?: React.MouseEventHandler;
  likeClick?: React.MouseEventHandler;
  banner?: string;
  title: string;
  text: string;
  date: string;
}

function ArticleBriefly({onClick, likeClick, banner, title, text, date }: ArticleBrieflyProps) {
  return (
    <Wrapper onClick={onClick}>
      {
        banner && (
          <Banner src={banner} alt={title} />
        )
      }
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Footer>
        <Date>{date}</Date>
        {/* <Like
          onClick={likeClick}
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
        </Like> */}
      </Footer>
    </Wrapper>
  );
}

export default ArticleBriefly;
