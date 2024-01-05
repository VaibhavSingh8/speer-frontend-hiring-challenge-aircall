import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Ooops!</h1>
      <h2>Something went wrong.</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorComponent;
