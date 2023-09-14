import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/authRoutes/ProtectedRoute";
import PublicRoute from "./components/authRoutes/PublicRoute";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import axios from "axios";
import UserList from "./components/UserComponent/UserList";
import Adduser from "./components/UserComponent/Adduser";
import EditUser from "./components/UserComponent/EditUser";

import CategoryList from "./components/CategoryComponent/CategoryList";
import AddCategory from "./components/CategoryComponent/AddCategory";
import EditCategory from "./components/CategoryComponent/EditCategory";
import SubCatList from "./components/SubCategoryComponent/SubCatList";
import AddSubCat from "./components/SubCategoryComponent/AddSubCat";
import EditSubCat from "./components/SubCategoryComponent/EditSubCat";
import ProductList from "./components/ProductComponent/ProductList";
import HomePage from "./components/users/HomePageComponent/HomePage";
import ShopPage from "./components/users/ShopPageComponent/ShopPage";
import AddProduct from "./components/ProductComponent/AddProduct";
import ProductDetail from "./components/users/ShopPageComponent/ProductDetail";
import { ViewCart } from "./components/users/CartComponent/ViewCart";

//const axiosInstance = axios.create();

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `${localStorage.getItem("token")}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Token expired or user not authenticated
      localStorage.removeItem("token"); // Clear the token
      // Redirect to login page or perform other logout actions
    }
    return Promise.reject(error);
  }
);

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/editcategory/:id" element={<EditCategory />} />
            <Route path="/subcategorylist" element={<SubCatList />} />
            <Route path="/addsubcategory" element={<AddSubCat />} />
            <Route path="/editsubcategory/:id" element={<EditSubCat />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/userhome" element={<HomePage />} />
            <Route path="/products" element={<ShopPage />} />
            <Route path="/productdetails/:id" element={<ProductDetail />} />

            <Route path="/cartview" element={<ViewCart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
