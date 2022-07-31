import React, { useState } from "react";
import { ButtonFile, ButtonDefault } from "../../components";
import styles from "./AddPost.module.scss";
import SimpleMDE from "react-simplemde-editor";
const AddPost: React.FC = () => {
  const imageUrl = "";
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const handleChangeFile = () => {};
  const onClickLoad = () => {};
  const onClickRemoveImage = () => {};
  const onClickAdd = () => {};
  const onClickCancel = () => {};
  const onChange = React.useCallback((value: string) => {
    setValue(value);
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
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <ButtonFile handler={onClickLoad} title={"Загрузить превью"} />
        <input type="file" hidden onChange={handleChangeFile} />
        {imageUrl && (
          <ButtonFile handler={onClickRemoveImage} title={"Удалить"} />
        )}
        {imageUrl && (
          <img
            src={`http://localhost:3000${imageUrl}`}
            alt=""
            className={styles.img}
          />
        )}
      </div>
      <input
        className={styles.title}
        type="text"
        value={title}
        placeholder="Заголовок статьи..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles.tags}
        type="text"
        value={tags}
        placeholder="Тэги"
        onChange={(e) => setTags(e.target.value)}
      />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <div className={styles.bootom}>
        <ButtonDefault handler={onClickAdd} title={"Опубликовать"} />
        <button onClick={onClickCancel} className={styles.btnCancel}>
          Отмена
        </button>
      </div>
    </div>
  );
};

export default AddPost;
