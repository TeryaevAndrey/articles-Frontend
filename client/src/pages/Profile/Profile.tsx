import React from 'react';
import { TitleFilter } from '../../App';
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import Search from '../../components/Search/Search';
import BannerImg from "../../img/bannerExample.svg";
import { Articles } from '../Main/Main';

function Profile() {
  return (
    <>
      <Header />
      <Articles>
        <TitleFilter>Мои статьи</TitleFilter>
        <Search width={"230px"} />
        <ArticleBriefly banner={BannerImg} title="Title" text="Lörem ipsum pens lyktiga, diligt inklusive autoråktigt. Intryckssanera råskade, lysade ena. Manga digyn inte lans. Mism juskap, därför att intrasm presat. Dide telefili fotosion. " date="25.09.22" />
      </Articles>
      <ScrollBtn />
    </>
  );
}

export default Profile;