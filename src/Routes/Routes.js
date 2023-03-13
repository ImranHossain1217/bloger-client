import { createBrowserRouter } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import Main from "../Layout/Main";
import Blog from "../pages/Blog";
import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPost from "../pages/MyPost";
import SignUp from "../pages/SignUp";
import UpdatePost from "../pages/UpdatePost";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/create-post",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "my-posts/update-post/:id",
        element: <UpdatePost />,
        loader: ({ params }) =>
          fetch(`https://bloger-server.vercel.app/posts/${params.id}`),
      },
      {
        path: "/post-details/:id",
        element: <PostDetails />,
        loader: ({ params }) =>
          fetch(`https://bloger-server.vercel.app/posts/${params.id}`),
      },
      {
        path: "/my-posts",
        element: <MyPost />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
