import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage, { detailsLoader } from "./pages/ProductDetailsPage";
import Layout from "./CustomLayout";
import ErrorPage from "./ErrorPage";
import { productsLoader } from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetailsPage />,
            loader: detailsLoader,
          },
        ],
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
