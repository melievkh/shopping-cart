import authApi from "../../api/authApi";
import swal from "sweetalert";

const login = (data) => (dispatch) => {
  authApi
    .login(data)
    .then((res) => {
      dispatch({ type: "LOGIN", payload: res.data.user });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.user.token);
    })
    .catch((err) => swal("", err.response.data.message, "error"));
};

export default login;
