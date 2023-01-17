import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../hooks/auth.hook";
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
  white-space: pre-line;

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

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
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
  deleteHandler?: React.MouseEventHandler;
}

function ArticleBriefly({
  onClick,
  className,
  banner,
  title,
  text,
  date,
  isAuth,
  _id,
  deleteHandler,
}: ArticleBrieflyProps) {
  const navigate = useNavigate();

  const editHandler = (event: React.MouseEvent, id: string | undefined) => {
    event.stopPropagation();

    navigate(`/edit/${id}`);
  };

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
          <IconWrapper>
            <Icon
              onClick={(event) => editHandler(event, _id)}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_173)">
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
            <Icon
              onClick={deleteHandler}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2643 12.6637C16.1935 12.6637 14.5088 14.3484 14.5088 16.4192C14.5088 18.49 16.1935 20.1747 18.2643 20.1747C20.335 20.1747 22.0197 18.49 22.0197 16.4192C22.0197 14.3484 20.3351 12.6637 18.2643 12.6637ZM20.1068 17.4588C20.3284 17.6805 20.3284 18.0399 20.1068 18.2617C19.9959 18.3725 19.8505 18.428 19.7053 18.428C19.5601 18.428 19.4148 18.3725 19.3039 18.2617L18.2643 17.2221L17.2248 18.2617C17.1139 18.3725 16.9686 18.428 16.8234 18.428C16.6781 18.428 16.5328 18.3725 16.4219 18.2617C16.2003 18.04 16.2003 17.6806 16.4219 17.4588L17.4615 16.4192L16.4218 15.3796C16.2001 15.1579 16.2001 14.7985 16.4218 14.5767C16.6435 14.3551 17.0029 14.3551 17.2247 14.5767L18.2643 15.6163L19.3038 14.5767C19.5255 14.3551 19.885 14.3551 20.1068 14.5767C20.3284 14.7984 20.3284 15.1578 20.1068 15.3796L19.0672 16.4192L20.1068 17.4588Z"
                fill="#4D3D3D"
              />
              <path
                d="M19.1376 5.03636C19.1375 4.12542 18.3964 3.38434 17.4854 3.38434H4.63249C3.72155 3.38434 2.98047 4.12542 2.98047 5.03636V6.57205H19.1377V5.03636H19.1376Z"
                fill="#4D3D3D"
              />
              <path
                d="M18.2643 11.5284C18.3681 11.5284 18.4709 11.5327 18.573 11.5391L18.8017 7.7074H14.8145V12.9558C15.6996 12.0742 16.9192 11.5284 18.2643 11.5284Z"
                fill="#4D3D3D"
              />
              <path
                d="M8.74481 1.13535H13.3736V2.24891H14.509V0.567677C14.509 0.254125 14.2548 0 13.9413 0H8.17705C7.8635 0 7.60938 0.254125 7.60938 0.567677V2.24891H8.74473V1.13535H8.74481Z"
                fill="#4D3D3D"
              />
              <path
                d="M14.8144 23.0428C14.8144 23.4967 14.4464 23.8646 13.9925 23.8646C13.5385 23.8646 13.1706 23.4967 13.1706 23.0428V7.7074H8.9473V23.0428C8.9473 23.4967 8.57928 23.8646 8.12541 23.8646C7.67146 23.8646 7.30353 23.4967 7.30353 23.0428V7.7074H3.31641L4.31649 24.4662C4.33442 24.766 4.58274 25 4.88307 25H17.2348C17.5353 25 17.7836 24.766 17.8015 24.4662L17.9903 21.3019C16.7541 21.2333 15.639 20.7039 14.8144 19.8826V23.0428Z"
                fill="#4D3D3D"
              />
            </Icon>
          </IconWrapper>
        )}
      </Footer>
    </Wrapper>
  );
}

export default ArticleBriefly;
