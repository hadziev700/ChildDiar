const initialState = {
  items: [],
  loading: true,
};

export default function childReducer(state = initialState, action) {
  switch (action.type) {
    case "child/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "child/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "child/post/pending":
      return {
        ...state,
        loading: true,
      };
    case "child/post/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };

    case "child/edit/pending":
      return {
        ...state,
        editing: true,
      };
    case "child/edit/fulfilled":
      return {
        ...state,
        editing: false,
        items: state.items.map((report) => {
          if (report.id === action.payload.id) {
            return {
              ...report,
              ...action.payload.data,
            };
          }
          return report;
        }),
      };
    case "child/delete/pending":
      return {
        ...state,
        editing: true,
      };
    case "child/delete/fulfilled":
      return {
        ...state,
        editing: false,
        items: state.items.map((report) => {
          if (report.id === action.payload.id) {
            return {
              ...report,
              ...action.payload.data,
            };
          }
          return report;
        }),
      };
    default:
      return state;
  }
}

export const loadChild = () => {
  return async (dispatch) => {
    dispatch({type:"child/load/pending"})

    const response = await fetch(
      `http://localhost:4000/child`
    );
    const json = await response.json();

    dispatch({
      type:"child/load/fulfilled",
      payload: json,
    });
  }
};



export const postChild = (data) => {
  return async (dispatch, getState) => {
    dispatch({ type: "child/create/pending" });
    const state = getState();
    const response = await fetch('http://localhost:4000/child', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        imageURL: data.imageURL,
        name: data.name,
        age:data.age,
        gender:data.gender,
        //user:req.body.user
      }),
    });
    const json = await response.json();
    dispatch({
      type: "child/create/fulfilled",
      payload: json,
    });
    window.location.reload();
  };
};

export const deleteChild = (id) => {
  return async (dispatch) => {
    dispatch({ type: "child/delete/pending" });

    await fetch(`http://localhost:4000/child/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "child/delete/fulfilled", payload: id });
  };
};


