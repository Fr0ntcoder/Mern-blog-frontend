import React from "react";
import { Post, CommentsBlock, CommentsForm } from "../../components";
const obj = {
  _id: 1,
  title: "Roast the code #1 | Rock Paper Scissors",
  imageUrl: "https://content.markdowner.net/pub/nMmrOQ-V1XOk6q",
  user: {
    avatarUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
    fullName: "Keff",
  },
  createdAt: "12 июня 2022 г.",
  viewsCount: 150,
  commentsCount: 3,
  tags: ["react", "fun", "typescript"],
  isEditable: false,
};
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
  return (
    <>
      <Post {...obj}>
        <p>
          Hey there! 👋 I'm starting a new series called "Roast the Code", where
          I will share some code, and let YOU roast and improve it. There's not
          much more to it, just be polite and constructive, this is an exercise
          so we can all learn together. Now then, head over to the repo and
          roast as hard as you can!!
        </p>
      </Post>
      <CommentsBlock commentsList={comments} isLoading={false}>
        <CommentsForm />
      </CommentsBlock>
    </>
  );
};

export default SinglePost;
