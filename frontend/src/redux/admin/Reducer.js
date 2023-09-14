const initialState = {
  admins: [],
  admin: {},

  success: false,
  error: null,
  isLoading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // get user
    case "get_adminlogin_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_adminlogin_success":
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        admin: action.payload,
        success: true,
      };
    case "get_adminlogin_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
