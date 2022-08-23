import axios from "axios";

export const asyncGetFoodItems = (category = "Indian") => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`
    );

    if (res.status === 200) {
      const newData = res.data.meals.slice(0, 15).map((item) => {
        return { ...item, price: Math.floor(Math.random() * 500) };
      });
      dispatch(Success(newData));
    } else {
      dispatch(Fail(res.data));
    }
  };
};

export const asyncGetDrinkItems = (category = "Shake") => {
  return async (dispatch) => {
    console.log({ category });
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    console.log(res);
    if (res.status === 200) {
      const newData = res.data.drinks.slice(0, 15).map((item) => {
        return { ...item, price: Math.floor(Math.random() * 500) };
      });
      console.log({ newData });
      dispatch(Success(newData));
    } else {
      dispatch(Fail(res.data));
    }
  };
};

export const asyncSearchFoodItems = (val) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
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
