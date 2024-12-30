import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login.jsx";
import registerAction from "./actions/registerAction";
import loginAction from "./actions/loginAction";
import registerLoader from "./loaders/registerLoader.js";
import loginLoader from "./loaders/loginLoader.js";
import ResetLink from "../pages/ResetLink.jsx";
import resetLinkAction from "./actions/resetLinkAction.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    action: resetLinkAction
  },
]);

export default router;