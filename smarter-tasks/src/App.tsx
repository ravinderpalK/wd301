import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import router from "./routes"
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";

const App = () => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${currentTheme.theme === "dark" ? "dark" : ""}`}>
      <ProjectsProvider>
        <MembersProvider>
          <CommentProvider>
            <RouterProvider router={router} />
          </CommentProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
}
export default App;