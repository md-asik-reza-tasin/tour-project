import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainContent from "./Components/MainContent";
import Login from "./Pages/Login";
import Signin from "./Components/Signin";
import Register from "./Components/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainContent></MainContent>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    children: [
      {
        path: "login",
        element: <Signin></Signin>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
