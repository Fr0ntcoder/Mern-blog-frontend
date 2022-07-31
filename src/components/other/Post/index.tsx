import React from "react";
import styles from "./Post.module.scss";
import { UserInfo } from "../..";
import { FaPen, FaTimes, FaEye, FaComment } from "react-icons/fa";
type PostType = {
  avatarUrl: string;
  fullName: string;
};
interface PostTypeProps {
  _id?: number;
  title: string;
  createdAt: string;
  imageUrl: string;
  user: PostType;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  children?: React.ReactNode;
  isFullPost?: string;
  isLoading?: boolean;
  isEditable: boolean;
}
export const Post: React.FC<PostTypeProps> = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  return (
    <div className={styles.post}>
      {isEditable && (
        <div className={styles.edit}>
          <a href="#">
            <FaPen />
          </a>
          <a href="#">
            <FaTimes />
          </a>
        </div>
      )}
      {imageUrl && (
        <div className={styles.img}>
          <img src={imageUrl} alt="" />
        </div>
      )}
      <UserInfo {...user} createData={createdAt} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.tagList}>
          {tags.map((item, i) => (
            <li className={styles.tagItem} key={i}>
              #{item}
            </li>
          ))}
        </ul>
        {children && <div className={styles.text}>{children}</div>}
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
