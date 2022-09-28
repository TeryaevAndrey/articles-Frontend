import React from 'react';
import styled from "styled-components";
import { TitleFilter } from '../../App';
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import BannerImg from "../../img/bannerExample.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Articles = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-bottom: 35px;
`;

function Main() {
  return (
    <>
      <Header />
      <Container>
        <Articles>
          <TitleFilter>Статьи</TitleFilter>
          <ArticleBriefly img={BannerImg} title="Title" text="Lörem ipsum pens lyktiga, diligt inklusive autoråktigt. Intryckssanera råskade, lysade ena. Manga digyn inte lans. Mism juskap, därför att intrasm presat. Dide telefili fotosion. " date="25.09.22" />
          <ArticleBriefly img={BannerImg} title="Title" text="Lörem ipsum pens lyktiga, diligt inklusive autoråktigt. Intryckssanera råskade, lysade ena. Manga digyn inte lans. Mism juskap, därför att intrasm presat. Dide telefili fotosion. " date="25.09.22" />
        </Articles>
        <Sidebar />
        <ScrollBtn />
      </Container>
    </>
  );
}

export default Main;