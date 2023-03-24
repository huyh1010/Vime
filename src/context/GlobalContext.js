import React, { createContext, useReducer, useEffect } from "react";

//initial state
const initialState = {
  favorite: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
};
//reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [action.payload, ...state.favorite],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
}

//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(state.favorite));
  }, [state]);

  const addFavorite = (movie) => {
    dispatch({ type: "ADD_FAVORITE", payload: movie });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorite: state.favorite,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
