const initialState = {
  items: [],
  loading: false,
  currentUser: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "users/load/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "usersById/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "usersById/load/fulfilled":
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "users/load/pending" });

    const res = await fetch("/users");
    const json = await res.json();

    dispatch({ type: "users/load/fulfilled", payload: json });
  };
};


