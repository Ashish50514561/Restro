import React from "react";
import Drawer from "react-modern-drawer";
import Categories from "../FoodItems/Categories";
import "../../../node_modules/react-modern-drawer/dist/index.css";

export default function Sidedrawer(props) {
  const { drawer, handleDrawer } = props;

  const toggleDrawer = () => {
    handleDrawer();
  };
  return (
    <div>
      <Drawer open={drawer} onClose={toggleDrawer} direction="left">
        <div>
          <Categories handleDrawer={handleDrawer} />
        </div>
      </Drawer>
    </div>
  );
}
