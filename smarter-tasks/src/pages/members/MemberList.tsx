import React, { useEffect } from "react"
import MembersListitems from "./MemberListItems";
import { useMemberDispatch } from "../../context/members/context";
import { fetchMembers } from "../../context/members/actions";

const MembersList: React.FC = () => {

  const dispatchMember = useMemberDispatch();
  console.log(dispatchMember);
  useEffect(() => {
    fetchMembers(dispatchMember);
  }, [])
  return (
    <>
      <div className="grid gap-4 grid-cols-3 mt-5">
        <MembersListitems />
      </div>
    </>
  )
}

export default MembersList;