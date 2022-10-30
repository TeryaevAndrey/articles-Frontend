import React from 'react';
import styled from "styled-components";
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';

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

function Post({banner, title, text, date}: PostProps) {
  return (
    <Wrapper>
      <ArticleBriefly banner={banner} title={title} text={text} date={date} />
    </Wrapper>
  );
}

export default Post;