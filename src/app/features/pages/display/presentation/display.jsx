import React from "react";
import DisplayNavigator from "./components/displayNavigator";
import Canvas from "./components/canvas";
import "../../../../common/styles/display.css"
import Widgets from "./components/widgets";
import MiniWidgets from "./components/miniWidgets";

const Display = () => {
const dashboardList = ['Dashboard1', 'Dashboard2', 'Dashboard3', 'DashBoard4', 'DashBoard5'];
  return (
    <div className="display">
      <DisplayNavigator list={dashboardList} />
      <Canvas />
      <Widgets />
      <MiniWidgets />
    </div>
  );
};

export default Display;
