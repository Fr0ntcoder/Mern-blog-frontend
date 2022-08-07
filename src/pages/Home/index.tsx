import React from "react";
import { useSelector } from "react-redux";
import { fetchPosts } from "../../redux/posts/fetchPosts/asyncActions";
import { selectorPostItems } from "../../redux/posts/fetchPosts/selectors";
import { useAppDispatch } from "../../redux/store";

import { Tabs, Post } from "../../components";

import { PostItem } from "../../redux/posts/fetchPost/types";
import styles from "../../components/other/Post/Post.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectorPostItems);
  const isPostLoading = status === "loading";
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <Tabs />
      <div className={styles.list}>
        {(isPostLoading ? [...Array(5)] : items).map(
          (item: PostItem, i: React.Key) => (
            <Post
              {...item}
              commentsCount={3}
              isLoading={isPostLoading}
              key={i}
            />
          )
        )}
      </div>
    </>
  );
};

export default Home;
