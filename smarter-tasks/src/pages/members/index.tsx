import React, { Suspense } from "react";
import MembersList from "./MemberList";
import ErrorBoundary from "../../components/ErrorBoundary";
const NewMember = React.lazy(() => import("./NewMember"));

const Members = () => {
  return (
    <>
      <div className="flex justify-between ">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
            <NewMember />
          </Suspense>
        </ErrorBoundary>
      </div>
      <MembersList />
    </>
  )
}
export default Members;