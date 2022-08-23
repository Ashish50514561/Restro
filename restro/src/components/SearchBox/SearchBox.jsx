import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncSearchFoodItems,
  asyncSearchDrinkItems,
} from "../../Redux/actions/foodActions";

export default function SearchBoxx() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const foods = useSelector((state) => state.changeReducer);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    foods
      ? dispatch(asyncSearchFoodItems(search))
      : dispatch(asyncSearchDrinkItems(search));
  }, [search]);

  return (
    <div className="search" style={{ marginRight: "20px" }}>
      <input
        onChange={handleChange}
        value={search}
        type="text"
        placeholder="search"
      />
    </div>
  );
}
