import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Movies } from "./pages/Movies";
import { Watchlist } from "./pages/Watchlist";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
