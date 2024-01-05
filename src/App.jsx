import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import Archive from "./components/Archive.jsx";
import ActivityDetail from "./components/ActivityDetail.jsx";
import Nav from "./components/Nav.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ActivityFeed />,
      },
      {
        path: "/archived",
        element: <Archive />,
      },
      {
        path: "/:id",
        element: <ActivityDetail />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
