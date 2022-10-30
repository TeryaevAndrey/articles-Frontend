import axios from "axios";
import React, { EventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TitleFilter } from "../../App";
import ArticleBriefly from "../../components/ArticlePost/ArticlePost";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import Sidebar from "../../components/Sidebar/Sidebar";
import BannerImg from "../../img/bannerExample.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Articles = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-bottom: 35px;
`;

function Main() {
  const [posts, setPosts] = React.useState<any>([]);
  const limitCount: number = 2;
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const scrollHandler = React.useCallback(
    (e: any) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        posts.length < totalCount
      ) {
        setFetching(true);
      }
    },
    [posts.length, totalCount]
  );

  React.useEffect(() => {
    if (fetching) {
      setLoading(true);
      axios
        .get(`/api/posts?limit=${limitCount}&page=${currentPage}`)
        .then((res) => {
          setTotalCount(res.data.total);
          setPosts([...posts, ...res.data.posts]);
          setCurrentPage((prev) => prev + 1);
          
          setLoading(false);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

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

    if (!post.banner) {
      return (
        <ArticleBriefly
          onClick={() => navigate(`/api/posts/${post._id}`)}
          title={post.title}
          text={text}
          date={date}
          key={post._id}
        />
      );
    }

    return (
      <ArticleBriefly
        onClick={() => navigate(`/api/posts/${post._id}`)}
        banner={`http://localhost:3000/${post.banner}`}
        title={post.title}
        text={text}
        date={date}
        key={post._id}
      />
    );
  });

  return (
    <>
      <Header />
      <Container>
        <Articles>
          <TitleFilter>Статьи</TitleFilter>
          {resultPosts ? resultPosts : <span>Пока что постов нет...</span>}
          {loading && <Loader />}
        </Articles>
        <Sidebar />
        <ScrollBtn />
      </Container>
    </>
  );
}

export default Main;
