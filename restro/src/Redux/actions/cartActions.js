import axios from "axios";

export const asyncGetCart = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:3001/cart", {
      headers: {
        Authorization: token,
      },
    });
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

export const asyncAddToCart = (formData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.post("http://localhost:3001/addToCart", formData, {
      headers: {
        Authorization: token,
      },
    });
    res.data.hasOwnProperty("success") ? dispatch(asyncGetCart()) : null;
  };
};

export const asyncDeleteItem = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`http://localhost:3001/cart/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

export const asyncDeleteCart = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`http://localhost:3001/emptyCart`, {
      headers: {
        Authorization: token,
      },
    });
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

export const asyncDeleteCartItem = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`http://localhost:3001/cartItem/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

export const asyncIncreaseQuantity = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `http://localhost:3001/incQuantity/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

export const asyncDecreaseQuantity = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `http://localhost:3001/decQuantity/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    res.data.hasOwnProperty("success")
      ? dispatch(Success(res.data.success))
      : dispatch(Fail(res.data));
  };
};

const Success = (response) => {
  return {
    type: "CART_SUCCESS",
    payload: response,
  };
};

const Fail = (response) => {
  return {
    type: "CART_FAIL",
    payload: response,
  };
};
