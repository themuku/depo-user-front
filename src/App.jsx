import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Layout from "./CustomLayout";
import ErrorPage from "./ErrorPage";

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
          },
          {
            path: ":productName",
            element: <ProductDetailsPage />,
          },
        ],
      },
    ],
  },
]);

// absolute path
// relative
// dynamic params

export default function App() {
  return <RouterProvider router={router} />;
}
