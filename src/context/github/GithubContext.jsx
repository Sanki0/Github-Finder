import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{ //pass to the value in order to pass through the global state
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )

}

export default GithubContext