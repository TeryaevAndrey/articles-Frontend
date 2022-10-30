import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import axios from "axios";
import Header from '../../components/Header/Header';

const Wrapper = styled.div`
  max-width: 705px;
  min-height: 100vh;
  margin: 0 auto;
`;

interface PostProps {
  banner?: string;
  title: string;
  text: string;
  date: string;
}

function Post() {
  const {id} = useParams();
  const [postInfo, setPostInfo] = React.useState<PostProps>({
    title: "",
    text: "",
    date: "",
  });

  React.useEffect(() => {
    axios.get(`/api/posts/${id}`).then((res) => setPostInfo(res.data));
  }, []);

  const date = new Date(postInfo.date).toLocaleDateString();

  return (
    <>
    <Header />
    <Wrapper>
      <ArticleBriefly banner={`http://localhost:3000/${postInfo.banner}`} title={postInfo.title} text={postInfo.text} date={date} />
    </Wrapper>
    </>
  );
}

export default Post;