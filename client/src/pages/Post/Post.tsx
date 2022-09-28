import React from 'react';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import BannerImg from "../../img/bannerExample.svg";

const Wrapper = styled.div`
  max-width: 705px;
  min-height: 100vh;
  margin: 0 auto;
`;

function Post() {
  return (
    <Wrapper>
      <ArticleBriefly img={BannerImg} title="Title" text="Lörem ipsum pens lyktiga, diligt inklusive autoråktigt. Intryckssanera råskade, lysade ena. Manga digyn inte lans. Mism juskap, därför att intrasm presat. Dide telefili fotosion. " date="25.09.22" />
    </Wrapper>
  );
}

export default Post;