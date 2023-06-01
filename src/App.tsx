import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactList from "./screen/ContactList";
import ContactAdd from "./screen/ContactAdd";
import ContactDetails from "./screen/ContactDetails";
import Dashboard from "./screen/Dashboard";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <ContactList />,
        path: "/",
      },
      {
        element: <ContactAdd />,
        path: "/add",
      },
      {
        element: <ContactDetails />,
        path: "/details/:id",
      },
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
