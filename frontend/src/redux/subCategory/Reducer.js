const initialState = {
  subcategories: [],
  subcategory: {},
  success: false,
  error: null,
  isLoading: false,
};

const SubCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case " get_subcategory_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_subcategory_success":
      return {
        ...state,
        isLoading: false,

        subcategories: action.payload,
      };
    case "get_subcategory_failed":
      return {
        ...state,
        isLoading: false,

        error: action.payload,
      };
    //add category
    case "add_subcategory_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_subcategory_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_subcategory_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //edit category
    case "edit_subcategory_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_subcategory_success":
      return {
        ...state,
        isLoading: false,
        subcategory: action.payload,
        success: true,
      };
    case "edit_subcategory_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //single subcategory
    case "get_singlesubcategory_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_singlesubcategory__success":
      return {
        ...state,
        isLoading: false,
        subcategory: action.payload,
        success: true,
      };
    case "get_singlesubcategory_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //delete category

    case "delete_subcategory_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "delete_subcategory_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "delete_subcategory_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SubCategoryReducer;
