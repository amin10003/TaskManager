export const initialState = {
  user: null,
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    case "RESTORE_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}