import axios from "axios";

export const getSubCategory = () => {
  return (dispatch) => {
    dispatch({ type: "get_subcategory_pending" });
    axios
      .get("http://localhost:8001/subcategory/get-allSubCategory")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "get_subcategory_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "get_subcategory_failed", payload: error.message });
      });
  };
};

export const addSubCategory = (data) => {
  return (dispatch) => {
    dispatch({ type: "add_subcategory_pending" });
    return axios
      .post("http://localhost:8001/subcategory/addSubCategory", data)
      .then((res) => {
        dispatch({ type: "add_sucategory_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "add_subcategory_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const editSubCategory = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "edit_subcategory_pending" });
    return axios
      .put(`http://localhost:8001/subcategory/updateSubCategory/${id}`, data)
      .then((res) => {
        dispatch({ type: "edit_subcategory_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "edit_subcategory_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const getSingleSubCategory = (id) => {
  return (dispatch) => {
    dispatch({ type: "get_singlesubcategory_pending" });
    return axios
      .get(`http://localhost:8001/subcategory/get-singleSubCategory/${id}`)
      .then((res) => {
        dispatch({
          type: "get_singlesubcategory__success",
          payload: res.data,
        });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({
          type: "get_singlesubcategory_failed",
          payload: err.message,
        });
        return Promise.reject();
      });
  };
};

export const deleteSubCategory = (id) => {
  return (dispatch) => {
    dispatch({ type: "delete_subcategory_pending" });
    return axios
      .delete("http://localhost:8001/subcategory/deleteSubCategory/" + id)
      .then((res) => {
        dispatch({ type: "delete_subcategory_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "delete_subcategory_failed", payload: error.message });
        return Promise.reject();
      });
  };
};
