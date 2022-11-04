import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import axios from "axios";
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

const Wrapper = styled.div`
  position: relative;
  width: 705px;
  min-height: 80vh;
  height: 100%;
  margin: 0 auto;

  @media(max-width: 800px) {
    width: 100%;
  }
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
  const [date, setDate] = React.useState<string>("");

  React.useEffect(() => {
    setLoading(true);
    axios.get(`/api/posts/${id}`).then((res) => {
      setPostInfo(res.data);
      setDate(new Date(res.data.date).toLocaleDateString());
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <>
    <Header />
    <Wrapper>
      {loading && <Loader />}
      {
        postInfo.banner ? (
          <ArticleBriefly className={"static"} banner={`http://localhost:3000/${postInfo.banner}`} title={postInfo.title} text={postInfo.text} date={date} />
        ) : (
          <ArticleBriefly className={"static"} title={postInfo.title} text={postInfo.text} date={date} />
        )
      }
    </Wrapper>
    </>
  );
}

export default Post;