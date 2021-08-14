const initialState = {
  items: [],
  loading: true,
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case "form/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "form/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "form/post/pending":
      return {
        ...state,
        loading: true,
      };
    case "form/post/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };

    case "form/edit/pending":
      return {
        ...state,
        editing: true,
      };
    case "form/edit/fulfilled":
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
    case "form/delete/pending":
      return {
        ...state,
        editing: true,
      };
    case "form/delete/fulfilled":
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

export const loadForm = () => {
  return async (dispatch) => {
    dispatch({type:"form/load/pending"})
    const response = await fetch(
      `http://localhost:4000/form`      /*"http://localhost:4000/form/${id}" */
    );
    const json = await response.json();

    dispatch({
      type:"form/load/fulfilled",
      payload: json,
    });
  }
};

export const postForm = (data) => {
  return async (dispatch) => {
    dispatch({ type: "form/create/pending" });
    const response = await fetch("http://localhost:4000/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text:data.text,
        user:data.user,
        child:data.child,
        event:data.event

      }),
    });
    const json = await response.json();
    dispatch({
      type: "form/create/fulfilled",
      payload: json,
    });
    //window.location.reload();
  };
};












