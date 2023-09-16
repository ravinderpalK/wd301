import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/Notfound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App