import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Register from "../pages/Register";
import registerAction from "./actions/registerAction";

import Login from "../pages/Login.jsx";
import loginAction from "./actions/loginAction";

import registerLoader from "./loaders/registerLoader.js";
import loginLoader from "./loaders/loginLoader.js";

import ResetLink from "../pages/ResetLink.jsx";
import resetLinkAction from "./actions/resetLinkAction.js";

import ResetPassword from "../pages/ResetPassword.jsx";
import resetPasswordAction from "./actions/resetPasswordAction.js";
import resetLinkLoader from "./loaders/resetLinkLoader.js";
import resetPasswordLoader from "./loaders/resetPasswordLoader.js";
import appLoader from "./loaders/appLoader.js";
import appAction from "./actions/appAction.jsx";
import Conversation from "../pages/Conversation.jsx";
import conversationLoader from "./loaders/conversationLoader.js";
import conversationAction from "./actions/conversationAction.jsx";
import ConversationError from "../pages/ConversationError.jsx";
import RootError from "../pages/RootError.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    action: appAction,
    errorElement: <RootError />,
    children: [
      {
        path: "/:conversationId",
        element: <Conversation />,
        loader: conversationLoader,
        action: conversationAction,
        errorElement: <ConversationError />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
    action: loginAction, 
  },
  {
    path: "/reset-link",
    element: <ResetLink />, 
    loader: resetLinkLoader,
    action: resetLinkAction
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    loader: resetPasswordLoader,
    action: resetPasswordAction
  }
]);

export default router;