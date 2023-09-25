import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MemberState, MembersAction } from "./reducer";

const MembersStateContext = createContext<MemberState | undefined>(undefined);
type MembersDispatch = React.Dispatch<MembersAction>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  )
}

export const useMemberState = () => useContext(MembersStateContext);
export const useMemberDispatch = () => useContext(MembersDispatchContext);


