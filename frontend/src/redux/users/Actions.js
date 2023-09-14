import axios from "axios";
export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: "get_user_pending" });
    axios
      .get("http://localhost:8001/user/get-usersAll")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "get_user_success", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "get_user_failed", payload: err.message });
      });
  };
};

export const addUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "add_user_pending" });
    return axios
      .post("http://localhost:8001/user/addUser", data)
      .then((res) => {
        dispatch({ type: "add_user_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "add_user_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const editUser = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "edit_user_pending" });
    return axios
      .put(`http://localhost:8001/user/updateUser/${id}`, data)
      .then((res) => {
        dispatch({ type: "edit_user_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "edit_user_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch({ type: "delete_user_pending" });
    return axios
      .delete(`http://localhost:8001/user/deleteUser/${id}`)
      .then((res) => {
        dispatch({ type: "delete_user_success", payload: res.id });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "delete_user_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const getSingleUser = (id) => {
  return (dispatch) => {
    dispatch({ type: "getSingleUser_user_pending" });
    return axios
      .get(`http://localhost:8001/user/get-singleUser/${id}`)
      .then((res) => {
        dispatch({ type: "getSingleUser_user_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "getSingleUser_user_failed", payload: err.message });
        return Promise.reject();
      });
  };
};
