import { Navigate, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AccountLayout from "../layouts/account";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import { MembersProvider } from "../context/members/context";
import { NotFound } from "../pages/Notfound";
import ProtectedRoutes from "./ProtectedRoutes";
import ProjectContainer from "../pages/projects/ProjectContainer";
import ProjectDetails from "../pages/project_details";
import NewTask from "../pages/tasks/NewTask";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "logout",
    element: <Logout />
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/account",
    element: (
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" replace /> },
                  { path: "new", element: <NewTask /> },
                  {
                    path: ":taskID",
                    children: [{ index: true, element: <TaskDetailsContainer /> }],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "members",
        element: (
          <MembersProvider>
            <Members />
          </MembersProvider>
        )
      },
    ],
  },
]);
export default router;