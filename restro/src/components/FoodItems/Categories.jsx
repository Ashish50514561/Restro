import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { asyncGetFoodItems } from "../../Redux/actions/foodActions";

export default function Categories(props) {
  const navigate = useNavigate();
  const { handleDrawer, totalBill } = props;
  const dispatch = useDispatch();

  const handleCart = () => {
    navigate(`/cart`);
  };

  const handleCategory = (e) => {
    dispatch(asyncGetFoodItems(e.target.name));
    handleDrawer();
  };
  return (
    <div className="categories">
      <h5 style={{ marginBottom: "30px" }}>Categories </h5>
      <span id="drawerCart" onClick={handleCart}>
        <FontAwesomeIcon fontSize="20px" icon={faFaceSmile} />
      </span>
      <div
        onClick={handleCategory}
        class="btn-group-vertical"
        style={{ width: "80%" }}
      >
        <button onClick={handleCategory} class="btn" name="Indian">
          Indian
        </button>
        <button onClick={handleCategory} class="btn" name="French">
          French
        </button>

        <button onClick={handleCategory} class="btn" name="Chinese">
          Chinese
        </button>
        <button onClick={handleCategory} class="btn" name="Italian">
          Italian
        </button>
        <button onClick={handleCategory} class="btn" name="Indian">
          Indian
        </button>

        <button onClick={handleCategory} class="btn" name="Mexican">
          Mexican
        </button>
        <button onClick={handleCategory} class="btn" name="Turkish">
          Turkish
        </button>
        <button onClick={handleCategory} class="btn" name="Mexican">
          Mexican
        </button>

        <button onClick={handleCategory} class="btn" name="Canadian">
          Canadian
        </button>
        <button onClick={handleCategory} class="btn" name="American">
          American
        </button>
      </div>
    </div>
  );
}
