import React, { useState } from "react";
import { BsBarChartLineFill, BsFillImageFill, BsTable } from "react-icons/bs";
import { FaChartPie, FaGaugeHigh, FaLink } from "react-icons/fa6";
import { HiCommandLine } from "react-icons/hi2";
import { IoIosSwitch } from "react-icons/io";
import { LuLineChart } from "react-icons/lu";
import { PiGauge } from "react-icons/pi";
import { Tb123, TbAbc } from "react-icons/tb";
import "../../../../common/styles/display.css";
import Canvas from "./components/canvas";
import BarChart from "./components/charts/barChart";
import GuageChart from "./components/charts/guageChart";
import HyperLink from "./components/charts/hyperLink";
import KPIChart from "./components/charts/kpiChart";
import LineChart from "./components/charts/lineChart";
import NumericWidget from "./components/charts/numericWidget";
import PieChart from "./components/charts/pieChart";
import StateChart from "./components/charts/stateChart";
import TableWidget from "./components/charts/tableWidget";
import TextWidget from "./components/charts/textWidget";
import DisplayNavigator from "./components/displayNavigator";
import MiniWidgets from "./components/miniWidgets";
import Widgets from "./components/widgets";
import { useEffect } from "react";

const Dashboardwidgets = [
  {
    id: "bar",
    icon: BsBarChartLineFill,
    label: "Bar",
    component: <BarChart />,
  },
  { id: "kpi", icon: FaGaugeHigh, label: "KPI", component: <KPIChart /> },
  { id: "line", icon: LuLineChart, label: "Line", component: <LineChart /> },
  { id: "gauge", icon: PiGauge, label: "Gauge", component: <GuageChart /> },
  { id: "pie", icon: FaChartPie, label: "Pie", component: <PieChart /> },
  { id: "table", icon: BsTable, label: "Table", component: <TableWidget /> },
  {
    id: "numeric",
    icon: Tb123,
    label: "Numeric",
    component: <NumericWidget />,
  },
  {
    id: "state",
    icon: IoIosSwitch,
    label: "State",
    component: <StateChart />,
  },
  { id: "command", icon: HiCommandLine, label: "Command", component: null },
  { id: "text", icon: TbAbc, label: "Text", component: <TextWidget /> },
  {
    id: "hyperlink",
    icon: FaLink,
    label: "Hyperlink",
    component: <HyperLink />,
  },
  { id: "image", icon: BsFillImageFill, label: "Image", component: null },
];

const Display = () => {
  const dashboardList = [
    "Dashboard1",
    "Dashboard2",
    "Dashboard3",
    "DashBoard4",
    "DashBoard5",
  ];
  const [draggedItem, setDraggedItem] = useState(null);
  const [widgetContainerDragStarted, setWidgetContainerDragStarted] =
    useState(false);
  const [droppedItems, setDroppedItems] = useState([]);
  const [deviceList, setDeviceList] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [newDashboardName, setNewDashboardName] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [view, setView] = useState("Edit");

  const serverEndpoint = process.env.REACT_APP_SERVER_ENDPOINT;

  useEffect(() => {
    const savedDashboards =
      JSON.parse(localStorage.getItem("dashboards")) || [];
    setDashboards(savedDashboards);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        setIsPopupOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleReorderWidgets = (dragIndex, dropIndex) => {
    const updatedItems = [...droppedItems];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setDroppedItems(updatedItems);
  };
  const handleSaveDashboard = () => {
    const newDashboard = {
      name: newDashboardName,
      widgets: droppedItems,
    };
    console.log(newDashboard);
    const updatedDashboards = [...dashboards, newDashboard];
    localStorage.setItem("dashboards", JSON.stringify(updatedDashboards));
    setDashboards(updatedDashboards);
    setNewDashboardName("");
    setView("View");
    setIsPopupOpen(false);
  };
  const handleLoadDashboard = (dashboard) => {
    setDroppedItems(dashboard.widgets);
  };

  const handleDragStartWidgetContainer = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    setDraggedItem(item);
    setWidgetContainerDragStarted(true);
  };

  const handleDragStartCanvas = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
    setDraggedItem(item);
    setWidgetContainerDragStarted(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleCanvasDropOrDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));
    const newItemKey = `${item.id}-${Date.now()}`;
    const newItem = { ...item, key: newItemKey };
    if (widgetContainerDragStarted) {
      handleDrop(e);
    } else {
      handleCanvasDrop(e);
    }
    setWidgetContainerDragStarted(false);
  };
  const handleCanvasDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));
    console.log(item);
    if (!droppedItems.some((widget) => widget.id === item.id)) {
      setDroppedItems([...droppedItems, item]);
      setDraggedItem(null);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item"));
    console.log(item);
    const newItemKey = `${item.id}-${Date.now()}`;
    const newItem = { ...item, key: newItemKey };
    setDroppedItems([...droppedItems, newItem]);
    setDraggedItem(null);
  };
  const componentMapping = {
    bar: <BarChart />,
    kpi: <KPIChart view={view} />,
    line: <LineChart />,
    gauge: <GuageChart />,
    numeric: <NumericWidget />,
    pie: <PieChart />,
    hyperlink: <HyperLink view={view} dashboards={dashboards} />,
    state: <StateChart view={view} />,
    table: <TableWidget view={view} />,
    text: <TextWidget view={view} />,
  };
  const handleDelete = (index) => {
    const updatedDroppedItems = [...droppedItems];
    updatedDroppedItems.splice(index, 1);
    setDroppedItems(updatedDroppedItems);
  };
  return (
    <div className="display">
      <DisplayNavigator
        dashboards={dashboards}
        handleLoadDashboard={handleLoadDashboard}
      />

      <Canvas
        handleCanvasDropOrDrop={handleCanvasDropOrDrop}
        handleDragOver={handleDragOver}
        componentMapping={componentMapping}
        droppedItems={droppedItems}
        handleDragStartCanvas={handleDragStartCanvas}
        handleDelete={handleDelete}
        view={view}
        setView={setView}
        handleReorderWidgets={handleReorderWidgets}
      />
      {view === "View" ? null : (
        <>
          <Widgets
            Dashboardwidgets={Dashboardwidgets}
            handleDragStartWidgetContainer={handleDragStartWidgetContainer}
          />
          <MiniWidgets />
        </>
      )}

      {isPopupOpen ? (
        <div className="saveDialog">
          <div className="saveHeading">Save Dashboard</div>
          <input
            type="text"
            name="saveDashboard"
            id="saveDashboard"
            onChange={(e) => setNewDashboardName(e.target.value)}
          />
          <div className="saveDialogBtns">
            <div onClick={() => handleSaveDashboard()}>Save</div>
            <div onClick={() => setIsPopupOpen(false)}>Cancel</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Display;
