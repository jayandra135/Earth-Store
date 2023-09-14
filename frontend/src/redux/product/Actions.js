import axios from "axios";

export const getProduct = () => {
  return (dispatch) => {
    dispatch({ type: "get_product_pending" });
    axios
      .get("http://localhost:8001/product/get-allProducts")
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "get_product_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "get_product_failed", payload: error.message });
      });
  };
};

export const getProductByName = (text) => {
  return (dispatch) => {
    dispatch({ type: "get_productbyname_pending" });
    return axios
      .get(`http://localhost:8001/product/get-allProducts?q=${text}`)
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "get_productbyname_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "get_productbyname_failed", payload: error.message });
      });
  };
};

export const getProductBySubCat = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch({ type: "get_productbysubcat_pending" });
    return axios
      .get(`http://localhost:8001/product/get-productbysubCat/${id}`)
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "get_productbysubcat_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({
          type: "get_productbysubcat_failed",
          payload: error.message,
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: "add_product_pending" });
    return axios
      .post("http://localhost:8001/product/addProduct", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "add_product_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "add_product_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const editProduct = (id, data) => {
  return (dispatch) => {
    dispatch({ type: "edit_product_pending" });
    return axios
      .put(`http://localhost:8001/product/updateProduct/${id}`, data)
      .then((res) => {
        dispatch({ type: "edit_product_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "edit_product_failed", payload: err.message });
        return Promise.reject();
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: "delete_product_pending" });
    return axios
      .delete("hhttp://localhost:8001/product/deleteProduct/" + id)
      .then((res) => {
        dispatch({ type: "delete_product_success", payload: res.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "delete_product_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const getSingleProduct = (id) => {
  return (dispatch) => {
    dispatch({ type: "getSingle_product_pending" });
    return axios
      .get(`http://localhost:8001/product/get-singleProduct/${id}`)
      .then((res) => {
        dispatch({
          type: "getSingle_product_success",
          payload: res.data,
        });
        return Promise.resolve();
      })
      .catch((err) => {
        dispatch({ type: "getSingle_product_failed", payload: err.message });
        return Promise.reject();
      });
  };
};
