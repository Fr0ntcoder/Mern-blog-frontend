import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { selectIsAuth } from "../../redux/Auth/selectors";
import api from "../../services/api";

import SimpleMDE from "react-simplemde-editor";
import { ButtonFile, ButtonDefault } from "../../components";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const isAuth = useSelector(selectIsAuth);
  const [loading, setLoading] = useState(false);
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const [fields, setFields] = useState({
    title: "",
    text: "",
    tags: "",
    imageUrl: "",
  });

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await api.post("/upload", formData);
      setFields((prev) => ({ ...prev, imageUrl: data.url }));
    } catch (error) {
      console.log("Ошибка при загрузке файла!");
    }
  };

  const onClickLoad = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  const onClickRemoveImage = () => {
    setFields((prev) => ({ ...prev, imageUrl: "" }));
  };

  const onClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFields((prev) => ({
      ...prev,
      title: "",
      text: "",
      tags: "",
      imageUrl: "",
    }));
  };

  const onChange = (e: any) => {
    if (e.target.name) {
      setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const onChangeEditor = React.useCallback((value: string) => {
    setFields((prev) => ({ ...prev, text: value }));
  }, []);

  const onSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const field = {
        title: fields.title,
        text: fields.text,
        tags: fields.tags.split(","),
        imageUrl: fields.imageUrl,
      };
      const { data } = isEditing
        ? await api.patch(`/posts/${id}`, field)
        : await api.post("/posts", field);

      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (error) {
      console.warn(error);
    }
  };

  type Author = {
    createdAt?: string;
    email?: string;
    fullName?: string;
    passwordHash?: string;
    updatedAt?: string;
    __v?: 0;
    _id?: string;
  };
  interface DataType {
    author?: Author;
    createdAt?: string;
    imageUrl?: string;
    tags?: string[];
    text?: string;
    title?: string;
    updatedAt?: "string";
    viewsCount?: number;
    __v?: number;
    _id?: "string";
  }

  React.useEffect(() => {
    if (id) {
      api
        .get<DataType>(`/posts/${id}`)
        .then(({ data }) => {
          setFields((prev) => ({
            ...prev,
            title: data.title,
            text: data.text,
            tags: data.tags.join(","),
            imageUrl: data.imageUrl,
          }));
        })
        .catch((err) => {
          console.warn(err);
          alert("Ошибка при получении статьи!");
        });
    }
  }, []);

  interface SimpleMdeReactProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    id?: string;
    onChange?: (value: string) => void;
    value?: string;
    extraKeys?: any;
    options?: SimpleMDE.Options;
    events?: any;
    getMdeInstance?: (instance: SimpleMDE) => void;
    getCodemirrorInstance?: (codemirror: any) => void;
    getLineAndCursor?: (position: any) => void;
  }

  const options = React.useMemo<SimpleMdeReactProps>(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form className={styles.form}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <ButtonFile handler={onClickLoad} title={"Загрузить превью"} />
          <input
            type="file"
            ref={inputFileRef}
            hidden
            onChange={handleChangeFile}
          />
          {fields.imageUrl && (
            <ButtonFile handler={onClickRemoveImage} title={"Удалить"} />
          )}
        </div>
        {fields.imageUrl && (
          <div className={styles.img}>
            <img src={`http://localhost:7777${fields.imageUrl}`} alt="" />
          </div>
        )}
        <input
          className={styles.title}
          name="title"
          type="text"
          value={fields.title}
          placeholder="Заголовок статьи..."
          onChange={onChange}
        />
        <input
          className={styles.tags}
          name="tags"
          type="text"
          value={fields.tags}
          placeholder="Тэги"
          onChange={onChange}
        />
        <SimpleMDE
          className={styles.editor}
          value={fields.text}
          onChange={onChangeEditor}
          options={options}
        />
        <div className={styles.bottom}>
          <ButtonDefault
            handler={onSubmit}
            color={"blue"}
            title={isEditing ? "Сохранить" : "Опубликовать"}
          />
          <button onClick={onClickCancel} className={styles.btnCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
