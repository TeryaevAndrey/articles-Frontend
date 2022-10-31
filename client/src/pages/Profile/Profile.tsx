import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TitleFilter } from '../../App';
import ArticleBriefly from '../../components/ArticlePost/ArticlePost';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import ScrollBtn from '../../components/ScrollBtn/ScrollBtn';
import Search from '../../components/Search/Search';
import { AuthContext } from '../../context/auth.context';
import { Articles } from '../Main/Main';

function Profile() {
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [fetching, setFetching] = React.useState<boolean>(true);
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const limitCount = 3;
  const navigate = useNavigate();
  const auth = React.useContext(AuthContext);

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
    if(fetching) {
      setLoading(true);

    axios.get(`/api/posts/userPosts?limit=${limitCount}&page=${currentPage}`, {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    }).then((res) => {
        setTotalCount(res.data.total);
        setPosts([...posts, ...res.data.posts]);
        setCurrentPage((prev) => prev + 1);

        setLoading(false);
      })
      .finally(() => setFetching(false));
    }
  }, [auth.token, fetching]);

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
      <Articles>
        <TitleFilter>Мои статьи</TitleFilter>
        <Search width={"230px"} />
        {
          resultPosts.length > 0 ? resultPosts : <span>У вас нет постов...</span>
        }

        {loading && <Loader />}
      </Articles>
      <ScrollBtn />
    </>
  );
}

export default Profile;