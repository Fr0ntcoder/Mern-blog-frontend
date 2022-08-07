import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { fetchRemovePost } from "../../../redux/posts/fetchPosts/asyncActions";
import { selectUserData } from "../../../redux/Auth/selectors";
import { Author } from "../../../redux/posts/fetchPost/types";
import { PostItem } from "../../../redux/posts/fetchPost/types";
import { dataFormat } from "../../../utils/dataFormat";
import { UserInfo, PostSkeleton } from "../../../components";
import ReactMarkdown from "react-markdown";
import { FaPen, FaTimes, FaEye, FaComment } from "react-icons/fa";
import styles from "./Post.module.scss";

export const Post: React.FC<PostItem> = ({
  _id,
  title,
  text,
  createdAt,
  imageUrl,
  author,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
}) => {
  const dispatch = useAppDispatch();
  const userData: Author = useSelector(selectUserData);
  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить статью")) {
      dispatch(fetchRemovePost(_id));
    }
  };
  if (isLoading) {
    return <PostSkeleton />;
  }

  return (
    <div className={styles.post}>
      {userData?._id === author?._id && isFullPost && (
        <div className={styles.edit}>
          <Link to={`posts/${_id}/edit`}>
            <FaPen />
          </Link>
          <a href="#" onClick={onClickRemove}>
            <FaTimes />
          </a>
        </div>
      )}
      <div className={styles.img}>
        {imageUrl ? (
          <img src={`${process.env.REACT_APP_API_URL}${imageUrl}`} alt="" />
        ) : (
          <img src={require("../../../assets/img/empty.jpeg")} alt="" />
        )}
      </div>
      {author && <UserInfo {...author} createData={dataFormat(createdAt)} />}
      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link to={`/posts/${_id}`}>{title}</Link>
        </h3>
        <ul className={styles.tagList}>
          {tags &&
            tags.map((item, i) => (
              <li className={styles.tagItem} key={i}>
                #{item}
              </li>
            ))}
        </ul>
        {text && isFullPost && (
          <div className={styles.text}>
            <ReactMarkdown children={text} />
          </div>
        )}
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <FaEye />
            <span>{viewsCount}</span>
          </li>
          <li className={styles.infoItem}>
            <FaComment />
            <span>{commentsCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
