import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "../src/error-page.jsx";
import Homepage from "./components/Homepage.jsx";
import About from "../src/components/About.jsx";
import Transcriptions from "./components/Transcriptions.jsx";
import Media from "./components/Media.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/transcriptions",
        element: <Transcriptions />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "*", element: <Homepage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
