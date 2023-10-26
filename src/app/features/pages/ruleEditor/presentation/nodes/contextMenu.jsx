import React, { useCallback } from "react";
import { useReactFlow } from "reactflow";
import "../../../../../common/styles/contextMenuStyle.css";

export default function ContextMenu({ id, top, left, ...props }) {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id);
    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };
    addNodes({
      ...node,
      id: `${node.id}-${props.nodeCount}`,
      position,
    });
  }, [getNode, id, addNodes, props.nodeCount]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div style={{ top, left }} className="context-menu" {...props}>
      <p style={{ margin: "0.5em" }}>
        <small>node: {id}</small>
      </p>
      <div className="contextMenu_btns">
        <button onClick={duplicateNode}>Duplicate</button>
        <button onClick={deleteNode}>Delete</button>
      </div>
    </div>
  );
}
