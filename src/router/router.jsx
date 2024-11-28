
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage";
import ServicePage from "../Pages/ServicePage";
import SingleHealthPage from "@/Pages/SingleHealthPage";
import DashboardLayout from '@/layout/DashboardLayout';
import UserDashboardHome from '@/Pages/Dashboard/User/UserDashboardHome';
import UserDashboardOrder from '@/Pages/Dashboard/User/UserDashboardOrder';
import UserDashboardPayments from '@/Pages/Dashboard/User/UserDashboardPayments';
import UserDashboardProfile from '@/Pages/Dashboard/User/UserDashboardProfile';

import AssessmentPage from "@/Pages/AssessmentPage";
import MedicineDetailsPage from "@/Pages/MedicineDetailsPage";
import CheckoutPage from "@/Pages/CheckoutPage";
import LoginPage from "@/Pages/Auth/LoginPage";
import SignupPage from "@/Pages/Auth/SignupPage";
import AuthLayout from "@/layout/AuthLayout";

// Breadcrumb configuration
const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/service', breadcrumb: 'Service' },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/service',
        element: <ServicePage />,
      },
      {
        path: '/service/:name',
        element: <SingleHealthPage />,
      },
      {

        path: '/assessment',
        element: <AssessmentPage></AssessmentPage>
      },
      {
        path: '/medicine-details',
        element: <MedicineDetailsPage></MedicineDetailsPage>
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      }
      
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/signup',
        element: <SignupPage></SignupPage>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children:[

      // user dashboard:
      {
        path:"/dashboard/user-homepage",
        element:<UserDashboardHome/>
      },
      {
        path:"/dashboard/user-order-history",
        element:<UserDashboardOrder/>
      },
      {
        path:"/dashboard/user-payments",
        element:<UserDashboardPayments/>
      },
      {
        path:"/dashboard/user-profile",
        element:<UserDashboardProfile/>
      },

    ]
  },
]);

export { routes };
export default router;
