import axios from "axios";

export const asyncPostUser = (formData) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/signup", formData);
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data))
      : dispatch(Fail(res.data));
  };
};

export const asyncLoginUser = (formData) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3001/login", formData);
    if (res.data.hasOwnProperty("successToken")) {
      localStorage.setItem("token", res.data.successToken);
      dispatch(Success(res.data));
    } else {
      dispatch(Fail(res.data));
    }
  };
};

const Success = (response) => {
  return {
    type: "SUCCESS",
    payload: response,
  };
};

const Fail = (response) => {
  return {
    type: "Fail",
    payload: response,
  };
};
