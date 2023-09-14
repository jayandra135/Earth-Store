import axios from "axios";

export const getCategory = () => {
  return (dispatch) => {
    dispatch({ type: "get_category_pending" });
    axios
      .get("http://localhost:8001/category/get-categoryAll")
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "get_category_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "get_category_failed", payload: error.message });
      });
  };
};

export const addCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: "add_category_pending" });
    return axios
      .post("http://localhost:8001/category/addCategory", data)
      .then((res) => {
        dispatch({ type: "add_category_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "add_category_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const editCategory = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "edit_category_pending" });
    return axios
      .put(`http://localhost:8001/category/updateCategory/${id}`, data)
      .then((res) => {
        dispatch({ type: "edit_category_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "edit_category_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    dispatch({ type: "delete_category_pending" });
    return axios
      .delete("http://localhost:8001/category/deleteCategory/" + id)
      .then((res) => {
        dispatch({ type: "delete_category_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "delete_category_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const getSingleCategory = (id) => {
  return (dispatch) => {
    dispatch({ type: "getSingleCategory_category_pending" });
    return axios
      .get(`http://localhost:8001/category/get-singleCategory/${id}`)
      .then((res) => {
        dispatch({
          type: "getSingleCategory_category_success",
          payload: res.data,
        });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "getSingleCategory_category", payload: err.message });
        return Promise.reject();
      });
  };
};
