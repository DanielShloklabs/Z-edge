import { Resizable } from "re-resizable";
import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "../../../../../common/styles/canvasStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const Canvas = ({
  handleDragOver,
  handleCanvasDropOrDrop,
  droppedItems,
  view,
  setView,
  componentMapping,
  handleDelete,
  setDroppedItems,
  handleDragStartCanvas,
  handleReorderWidgets,
}) => {
  const { isDarkMode } = useTheme();
  const handleEdit = () => {
    setView("Edit");
  };
  const handleView = () => {
    setView("View");
  };

  const handleWidgetDrag = (e, item) => {
    e.preventDefault();
    if (view === "Edit") {
      handleDragStartCanvas(e, item);
    }
  };

  const handleWidgetDrop = (e, index, itemId) => {
    e.preventDefault();
    if (view === "Edit") {
      handleReorderWidgets(index, parseInt(itemId.split("-")[1]));
    }
  };

  const handleWidgetResize = (e, index, d, item) => {
    const newItem = { ...item };
    newItem.size = {
      width: item.size.width + d.width,
      height: item.size.height + d.height,
    };

    const updatedItems = [...droppedItems];
    updatedItems[index] = newItem;
    setDroppedItems(updatedItems);
  };

  return (
    <div className={`canvas ${isDarkMode ? "dark" : ""}`}>
      <div
        className="canvasContent"
        onDragOver={handleDragOver}
        onDrop={handleCanvasDropOrDrop}
      >
        {droppedItems.map((item, index) => (
          <div
            className="droppedItem"
            key={index}
            draggable={view === "View" ? false : true}
            id={`widget-${item.id}`}
            onDragStart={(e) => handleWidgetDrag(e, item)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleWidgetDrop(e, index, `widget-${item.id}`)}
          >
            {view === "View" ? (
              <div>{componentMapping[item.id]}</div>
            ) : (
              <Resizable className="widgetComponent">
                <button
                  className="displayRemoveWidget"
                  onClick={() => handleDelete(index)}
                >
                  <TiDeleteOutline size={32} color="red" />
                </button>
                {componentMapping[item.id]}
              </Resizable>
            )}
          </div>
        ))}
      </div>
      {view === "View" ? (
        <div
          className={`canvasEditViewBtn ${isDarkMode ? "dark" : ""}`}
          onClick={handleEdit}
        >
          Edit
        </div>
      ) : (
        <div
          className={`canvasEditViewBtn ${isDarkMode ? "dark" : ""}`}
          onClick={handleView}
        >
          View
        </div>
      )}
    </div>
  );
};

export default Canvas;
