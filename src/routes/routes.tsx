import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import CreateAdmin from "../pages/admin/CreateAdmin.js";
import CreateStudent from "../pages/admin/CreateStudent.js";
import CreateFaculty from "../pages/admin/CreateFaculty.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import AdminDashboard from "../pages/admin/AdminDashboard.js";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <AdminDashboard></AdminDashboard>,
            },
            {
                path: "dashboard",
                element: <AdminDashboard></AdminDashboard>,
            },
            {
                path: "createStudent",
                element: <CreateStudent></CreateStudent>,
            },
            {
                path: "createFaculty",
                element: <CreateFaculty></CreateFaculty>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
]);
