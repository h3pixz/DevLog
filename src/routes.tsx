import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage"
import SignIn from "./pages/SignIn";
import FeedPage from "./pages/FeedPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/reg",
        Component: RegisterPage,
    },
    {
        path: "/signin",
        Component: SignIn,
    },
    {
        path: "/feed",
        Component: FeedPage,
    },
])
