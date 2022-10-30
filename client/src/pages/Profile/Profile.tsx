import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleFilter } from '../../App';
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import Header from '../../components/Header/Header';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import Search from '../../components/Search/Search';
import { AuthContext } from '../../context/auth.context';
import BannerImg from "../../img/bannerExample.svg";
import { Articles } from '../Main/Main';

function Profile() {
  const [posts, setPosts] = React.useState<any>([]);
  const navigate = useNavigate();
  const auth = React.useContext(AuthContext);

  React.useEffect(() => {
    axios.get("/api/posts/userPosts", {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    }).then((res) => {
        setPosts(res.data);
      });
  }, [auth.token]);

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
      <Articles>
        <TitleFilter>Мои статьи</TitleFilter>
        <Search width={"230px"} />
        {
          resultPosts.length > 0 ? resultPosts : <span>У вас нет постов...</span>
        }
      </Articles>
      <ScrollBtn />
    </>
  );
}

export default Profile;