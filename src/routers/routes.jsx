import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import registerAction from "./actions/registerAction";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    
  },
]);

export default router;