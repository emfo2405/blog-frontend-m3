import { createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/LogIn";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/blog",
        element: <Blog />,
        children: [{
            path: ":id",
            element: <BlogPost />
        }
        ]
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
              <Admin />  
            </ProtectedRoute>
        )
        
    },
    {
        path: "/login",
        element: <Login />
    }
        ]
    }

])

export default router;