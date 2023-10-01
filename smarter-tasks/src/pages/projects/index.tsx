
import React, { Suspense } from "react";
const ProjectList = React.lazy(() => import("./ProjectList"));
const NewProject = React.lazy(() => import("./NewProject"));
import ErrorBoundary from "../../components/ErrorBoundary";
const Projects = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <NewProject />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default Projects;