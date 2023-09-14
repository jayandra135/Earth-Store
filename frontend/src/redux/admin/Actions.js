import axios from "axios";
export const getAdminLogin = (data) => {
  return (dispatch) => {
    dispatch({ type: "get_adminlogin_pending" });
    return axios
      .post("http://localhost:8001/admin/login", data)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: "get_adminlogin_success", payload: res.data });
        localStorage.setItem("token", res.data.token);
        return Promise.resolve();
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 401) {
          return dispatch({
            type: "get_adminlogin_failed",
            payload: err.response,
          });
        } //else {
        //   return dispatch({
        //     type: "get_adminlogin_failed",
        //     payload: err.message,
        //   });
        //}

        return Promise.reject();
      });
  };
};
