export interface Member {
  id: number;
  name: string;
  email: string;
}
export interface MemberState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
export const initialState: MemberState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
}
export type MembersAction =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBERS_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBERS_SUCCESS" }


export const reducer = (state: MemberState = initialState, action: MembersAction): MemberState => {
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload
      };
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      }
    case "ADD_MEMBERS_SUCCESS":
      return {
        ...state,
        members: [...state.members, action.payload]
      }
    case "DELETE_MEMBERS_SUCCESS":
      return {
        ...state
      }
    default:
      return state;
  }
}