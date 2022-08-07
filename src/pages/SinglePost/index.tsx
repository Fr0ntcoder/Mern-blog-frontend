import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { fetchPost } from "../../redux/posts/fetchPost/asyncActions";
import { selectorPostItem } from "../../redux/posts/fetchPost/selectors";
import { Post, CommentsBlock, CommentsForm } from "../../components";

const comments = [
  {
    user: {
      fullName: "Вася Пупкин",
      avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    text: "Это тестовый комментарий",
  },
  {
    user: {
      fullName: "Иван Иванов",
      avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
    },
    text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
  },
];
const SinglePost: React.FC = () => {
  const { item, status } = useSelector(selectorPostItem);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isLoading = status === "loading";
  React.useEffect(() => {
    dispatch(fetchPost(id));
  }, []);
  if (isLoading) {
    return <Post isLoading={isLoading} />;
  }

  return (
    <>
      <Post {...item} isFullPost commentsCount={3}></Post>
      <CommentsBlock commentsList={comments} isLoading={false}>
        <CommentsForm />
      </CommentsBlock>
    </>
  );
};

export default SinglePost;
