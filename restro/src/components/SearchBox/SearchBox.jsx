import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncSearchFoodItems } from "../../Redux/actions/foodActions";

export default function SearchBoxx() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(asyncSearchFoodItems(search));
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
