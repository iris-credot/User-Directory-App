import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import type { User } from "../types/user";

type State = {
  users: User[];
};

type Action = { type: "ADD_USER"; payload: User };

const initialState: State = {
  users: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
}

export const UserContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
