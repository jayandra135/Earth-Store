const initialState = {
  products: [],
  product: {},
  success: false,
  error: null,
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case " get_product_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_product_success":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "get_product_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //add product
    case "add_product_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_product_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_product_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //edit product
    case "edit_product_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "edit_product_success":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        success: true,
      };
    case "edit_product_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //delete category

    case "delete_product_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "delete_product_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "delete_product_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    //single product
    case "getSingle_product_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "getSingle_product_success":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        success: true,
      };
    case "getSingle_product_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case " get_productbyname_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_productbyname_success":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "get_productbyname_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case " get_productbysubcat_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_productbysubcat_success":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "get_productbysubcat_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
