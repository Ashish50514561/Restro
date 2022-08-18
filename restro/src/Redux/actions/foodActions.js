import axios from "axios";

export const asyncGetFoodItems = (category = "Indian") => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
    );

    if (res.status === 200) {
      const newData = res.data.meals.map((item) => {
        return { ...item, price: Math.floor(Math.random() * 500) };
      });
      dispatch(Success(newData));
    } else {
      dispatch(Fail(res.data));
    }
  };
};

const Success = (response) => {
  return {
    type: "GETFOOD",
    payload: response,
  };
};

const Fail = (response) => {
  return {
    type: "FOODFAIL",
    payload: response,
  };
};