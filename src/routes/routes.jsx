import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import MyBookings from "../components/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:id", element: <EventDetails /> },
      { path: "/my-bookings", element: <MyBookings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
