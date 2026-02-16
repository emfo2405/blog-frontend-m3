import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/LogIn";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
    {
        path: "/",
        element: <Blog />,
        children: [{
            path: ":id",
            element: <BlogPost />
        }
        ]
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/login",
        element: <Login />
    }
        ]
    }

])

export default router;