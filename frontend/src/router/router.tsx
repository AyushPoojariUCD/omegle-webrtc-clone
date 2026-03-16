import Home from "../pages/Home";
import About from "../pages/About";
import Room from "../pages/Room";
import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        index: true,
        path: "/about",
        element: <About />
      },
      {
        index: true,
        path: "/room",
        element: <Room />
      }
    ]
  }
]);