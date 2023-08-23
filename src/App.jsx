import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Post, { loader as postsLoader } from "./pages/Post";
import CreatePost, { action as postFormAction } from "./pages/CreatePost";
import PostDetails, {
    action as postDeleteAction,
    loader as postDetailsLoader,
} from "./pages/PostDetails";
import EditPost from "./pages/EditPost";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Post />,
                loader: postsLoader,
            },
            {
                path: "/details/:id",
                element: <PostDetails />,
                loader: postDetailsLoader,
                action: postDeleteAction,
            },
            {
                path: "/create",
                element: <CreatePost />,
                action: postFormAction,
            },
            {
                path: "/edit/:id",
                element: <EditPost />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
