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
            onDragStart={(e) =>
              view === "View" ? null : handleDragStartCanvas(e, item)
            }
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleReorderWidgets(index, parseInt(e.target.id.split("-")[1]));
            }}
          >
            {view === "View" ? (
              <div>{componentMapping[item.id]}</div>
            ) : (
              <Resizable >
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
        <div className="canvasEditViewBtn" onClick={handleEdit}>
          Edit
        </div>
      ) : (
        <div className="canvasEditViewBtn" onClick={handleView}>
          View
        </div>
      )}
    </div>
  );
};

export default Canvas;

/* <button onClick={onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout
          onLayoutChange={(layout) => console.log(layout)}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          className="gridLayout"
        >
          {items.map((el) => createElement(el))}
        </ResponsiveReactGridLayout> */
