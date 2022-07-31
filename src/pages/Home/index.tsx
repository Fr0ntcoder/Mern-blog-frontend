import React from "react";
import { Tabs, Post } from "../../components";
import styles from "../../components/other/Post/Post.module.scss";
const arr = [
  {
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
  },
  {
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
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Tabs />
      <div className={styles.list}>
        {arr.map((item, i) => (
          <Post {...item} key={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
