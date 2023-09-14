import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
const ProtectedRoute = () => {
  const auth = localStorage.getItem("token");
  console.log(auth);
  return (
    <div>
      {auth ? (
        <>
          <Sidebar>
            <Outlet />
          </Sidebar>
        </>
      ) : (
        <Navigate to="login" />
      )}
    </div>
  );
};

export default ProtectedRoute;
