import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage";
import ServicePage from "../Pages/ServicePage";
import SingleHealthPage from "@/Pages/SingleHealthPage";
import CheckoutPage from "@/Pages/CheckoutPage";

// Breadcrumb configuration
const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/service", breadcrumb: "Service" },
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/service/:name",
        element: <SingleHealthPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      }
    ],
  },
]);

export { routes };
export default router;
