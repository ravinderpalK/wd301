import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import router from "./routes"
import { ProjectsProvider } from "./context/projects/context";

const App = () => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${currentTheme.theme === "dark" ? "dark" : ""}`}>
      <ProjectsProvider>
        <RouterProvider router={router} />
      </ProjectsProvider>
    </div>
  );
}
export default App;