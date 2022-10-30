import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import axios from "axios";
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Wrapper = styled.div`
  position: relative;
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
  const [loading, setLoading] = React.useState<boolean>(false);
  const {id} = useParams();
  const [postInfo, setPostInfo] = React.useState<PostProps>({
    title: "",
    text: "",
    date: "",
  });

  React.useEffect(() => {
    setLoading(true);
    axios.get(`/api/posts/${id}`).then((res) => {
      setPostInfo(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const date = new Date(postInfo.date).toLocaleDateString();

  return (
    <>
    <Header />
    <Wrapper>
      {loading && <Loader style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />}
      {
        postInfo.banner ? (
          <ArticleBriefly banner={`http://localhost:3000/${postInfo.banner}`} title={postInfo.title} text={postInfo.text} date={date} />
        ) : (
          <ArticleBriefly title={postInfo.title} text={postInfo.text} date={date} />
        )
      }
    </Wrapper>
    </>
  );
}

export default Post;