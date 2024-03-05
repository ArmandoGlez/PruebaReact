import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Productos from "./components/products.jsx";
import Error404 from "./components/error404.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/products",
    element: <Productos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
