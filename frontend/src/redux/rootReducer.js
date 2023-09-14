import { combineReducers } from "redux";

import userReducer from "../redux/users/Reducer";
import categoryReducer from "./category/Reducer";
import SubCategoryReducer from "./subCategory/Reducer";
import productReducer from "./product/Reducer";
import cartReducer from "./cart/Reducer";
import adminReducer from "./admin/Reducer";

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  subCategory: SubCategoryReducer,
  product: productReducer,
  cart: cartReducer,
  admin: adminReducer,
});

export default rootReducer;
