import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { Layout } from "~/components";
import { ErrorPage, NotFound } from "~/erros";

const High = lazy(() => import("~/pages/High/High"));
const MovieTable = lazy(() => import("~/pages/MovieTable/MovieTable"));
const Movie = lazy(() => import("~/pages/Movie/Movie"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <High />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
      },
      {
        path: "tabela-de-filmes",
        element: <MovieTable />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
