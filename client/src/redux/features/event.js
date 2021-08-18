const initialState = {
  items: [],
  loading: true,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "event/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "event/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "event/post/pending":
      return {
        ...state,
        loading: true,
      };
    case "event/post/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };

    case "event/edit/pending":
      return {
        ...state,
        editing: true,
      };
    case "event/edit/fulfilled":
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
    case "event/delete/pending":
      return {
        ...state,
        editing: true,
      };
    case "event/delete/fulfilled":
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

export const loadEvent = () => {
  return async (dispatch) => {
    dispatch({ type: "event/load/pending" });

    const response = await fetch(`http://localhost:4000/events`);
    const json = await response.json();

    dispatch({
      type: "event/load/fulfilled",
      payload: json,
    });
  };
};

export const postEvent = (data,id) => {
  return async (dispatch, getState) => {
    dispatch({ type: "event/create/pending" });
    const state = getState();
    const response = await fetch(`http://localhost:4000/event/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${state.application.token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: data.text,
        child: data.id
      }),
    });
    const json = await response.json();
    dispatch({
      type: "event/post/fulfilled",
      payload: json,
    });
    window.location.reload();
  };
};

export const deleteEvent = (id) => {
  return async (dispatch) => {
    dispatch({ type: "event/delete/pending" });

    await fetch(`http://localhost:4000/events/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "event/delete/fulfilled", payload: id });
  };
};
