const initialState = {
  categories: [],
  category: {},
  success: false,
  error: null,
  isLoading: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case " get_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_category_success":
      return {
        ...state,
        isLoading: false,

        categories: action.payload,
      };
    case "get_category_failed":
      return {
        ...state,
        isLoading: false,

        error: action.payload,
      };

    //add category
    case "add_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_category_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_category_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //edit category
    case "edit_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_category_success":
      return {
        ...state,
        isLoading: false,
        category: action.payload,
        success: true,
      };
    case "edit_category_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //delete category

    case "delete_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "delete_category_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "delete_category_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //single category
    case "getSingleCategory_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "getSingleCategory_category_success":
      return {
        ...state,
        isLoading: false,
        category: action.payload,
        success: true,
      };
    case "getSingleCategory_category":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
