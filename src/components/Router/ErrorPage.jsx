import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-page">
      <h1 className="error-page__title">Упс!</h1>
      <h3 className="error-page__text">Простите, произошла ошибка</h3>
      <p className="error-page__error">
        <i>Ошибка: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}