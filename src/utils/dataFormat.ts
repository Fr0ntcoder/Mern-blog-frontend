export const dataFormat = (value: any) => {
  interface DataProps {
    day: "numeric" | "2-digit";
    month: "numeric" | "2-digit" | "long" | "short" | "narrow";
    year: "numeric" | "2-digit";
  }
  const options: DataProps = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
};
