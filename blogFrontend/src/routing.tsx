import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Blog />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/BlogPost",
        element: <BlogPost />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;