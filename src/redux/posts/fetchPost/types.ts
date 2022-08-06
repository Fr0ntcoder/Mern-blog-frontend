export type Author = {
  _id?: string;
  createdAt?: string;
  email?: string;
  fullName?: string;
  updatedAt?: string;
  avatarUrl?: string;
  createData?: string;
};

export interface PostItem {
  _id?: number;
  title?: string;
  text?: string;
  createdAt?: string;
  imageUrl?: string;
  author?: Author;
  viewsCount?: number;
  commentsCount?: number;
  tags?: string[];
  children?: React.ReactNode;
  isFullPost?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
}

export interface PostsSliceProps {
  items: PostItem[];
  status: string;
}

export interface PostSliceProps {
  item: object;
  status: string;
}
