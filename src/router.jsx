import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Projects from "./Pages/Projects";
import Login from "./admin/auth/Login";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./admin/admin_pages/Dashboard";
import Data from "./admin/admin_pages/Data";
import Information from "./admin/admin_pages/Information";
import InformationForm from "./admin/admin_pages/InformationForm";
import Skills from "./Pages/Skills";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Navbar wraps all pages
        children: [
            { path: "/", element: <Portfolio /> },
            { path: "/services", element: <Services /> },
            { path: "/projects", element: <Projects /> },
            { path: "/login", element: <Login /> },
            { path: "/skills", element: <Skills /> },
            { path: "/contact", element: <Contact /> },

        ],
    },
    // Admin pages (protected)
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "projects", element: <Data /> },
            { path: "informations", element: <Information /> },
            {
                path: "informations/:id",
                element: <InformationForm key="informationsUpdate" />,
            },
        ],
    },
]);
export default router;
