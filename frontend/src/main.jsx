import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/client.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Home from "./routes/home.jsx";
import Product from "./routes/product.jsx";
import { CartProvider } from "../contexts/CartContext.jsx";
import Cart from "./routes/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ApolloProvider>
  </React.StrictMode>
);
