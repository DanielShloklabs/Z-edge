import React from "react";
import { FaSave } from "react-icons/fa";
import { TbGitBranchDeleted } from "react-icons/tb";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import "../../../../../common/styles/ruleCanvasStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import ContextMenu from "../nodes/contextMenu";

const RuleCanvas = ({
  nodes,
  edges,
  edgeOptions,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onInit,
  nodeTypes,
  onDrop,
  onDragOver,
  connectionLineStyle,
  openSavePopup,
  clearNodes,
  onPaneClick,
  onNodeContextMenu,
  reactFlowWrapper,
  contextMenu,
  nodeCount,
  closeContextMenu,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`ruleCanvas ${isDarkMode ? "dark" : ""}`}
      ref={reactFlowWrapper}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultEdgeOptions={edgeOptions}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          connectionLineStyle={connectionLineStyle}
          minZoom={0.5}
          maxZoom={1.3}
          onPaneClick={onPaneClick}
          onNodeContextMenu={onNodeContextMenu}
          fitView
        >
          <MiniMap zoomable pannable position="top-right" className="minimap" />
          <Panel>
            <div
              className={`ruleCanvasSaveBtn ${isDarkMode ? "dark" : ""}`}
              onClick={(e) => {
                openSavePopup();
              }}
            >
              <FaSave />
            </div>
            <div
              className={`ruleCanvasClearNodesBtn ${isDarkMode ? "dark" : ""}`}
              onClick={(e) => {
                clearNodes();
              }}
            >
              <TbGitBranchDeleted />
            </div>
          </Panel>
          <Controls position="top-left" className="ruleCanvasControls"></Controls>
          <Background
            variant="dots"
            gap={20}
            size={2}
            color={`${isDarkMode ? "white" : "var(--dark-secondary-color)"}`}
          />
          {contextMenu && (
            <ContextMenu
              id={contextMenu.id}
              top={contextMenu.top}
              left={contextMenu.left}
              nodeCount={nodeCount}
              onClick={closeContextMenu}
            />
          )}
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default RuleCanvas;
