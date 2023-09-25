import MembersList from "./MembersList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <>
      <div className="flex justify-between ">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <MembersList />
    </>
  )
}
export default Members;