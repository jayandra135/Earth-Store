const initialState = {
  users: [],
  user: {},
  login: {},
  success: false,
  error: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // get user
    case "get_user_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_user_success":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "get_user_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // add user
    case "add_user_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_user_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_user_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // edit user
    case "edit_user_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_user_success":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        success: true,
      };
    case "edit_user_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // delete user
    case "delete_user_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "delete_user_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "delete_user_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // get single user
    case "getSingleUser_user_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "getSingleUser_user_success":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        success: true,
      };
    case "getSingleUser_user_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "get_login_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_login_success":
      return {
        ...state,
        isLoading: false,
        login: action.payload,
      };
    case "get_login_failed":
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
