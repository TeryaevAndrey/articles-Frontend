import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAppSelector } from '../../store/Hooks';
import { Articles } from '../Main/Main';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

function PostByTag() {
  const navigate = useNavigate();
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const {tag} = useParams();
  const [allPosts, setAllPosts] = React.useState<any>([]);
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`/api/posts/postsByTag?tag=${tag}`).then((res) => setPosts(res.data.posts));
    setLoading(false);
  }, [tag]);

  React.useEffect(() => {
    axios.get(`/api/posts`).then((res) => setAllPosts(res.data.posts));
  }, []);

  interface Post {
    _id: string;
    banner?: string;
    title: string;
    text: string;
    date: string;
  }

  const filterPosts = posts.filter((post: Post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

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
          {
            loading && <Loader />
          }

          {
            searchValue.length > 0 ? (
              filterPosts.map((post: Post) => {
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
              })
            ) : (
              resultPosts && resultPosts
            )
          }
        </Articles>
        <Sidebar posts={allPosts} />
        <ScrollBtn />
      </Container>
    </>
  );
}

export default PostByTag;