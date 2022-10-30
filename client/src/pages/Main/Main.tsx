import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [posts, setPosts] = React.useState<[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  interface Post {
    _id: string;
    banner?: string;
    title: string;
    text: string;
    date: string;
  }

  const resultPosts = posts.map((post: Post) => {
    const text = post.text.slice(0, 100) + "...";
    const date = new Date(post.date).toLocaleDateString();

    return <ArticleBriefly onClick={() => navigate(`/api/posts/:${post._id}`)} banner={`http://localhost:3000/${post.banner}`} title={post.title} text={text} date={date} key={post._id} />
  });

  return (
    <>
      <Header />
      <Container>
        <Articles>
          <TitleFilter>Статьи</TitleFilter>
          {
            resultPosts
          }
        </Articles>
        <Sidebar />
        <ScrollBtn />
      </Container>
    </>
  );
}

export default Main;