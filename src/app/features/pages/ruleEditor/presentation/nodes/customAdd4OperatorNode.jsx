import React from "react";
import "../../../../../common/styles/commonNodeStyle.css";
import { Handle, Position } from "reactflow";

const CustomAdd4OperatorNode = ({ data, isConnectable }) => {
  return (
    <div className="customOperatorContainer">
      <div className="customNodeHeading">{data.label}</div>
      <div className="customNodeContent">
        <Handle
          type="target"
          position={Position.Left}
          id="INP0"
          style={{ top: 30 }}
          isConnectable={isConnectable}
          className="customHandle"
        />
        <Handle
          type="target"
          position={Position.Left}
          id="INP1"
          style={{ top: 50 }}
          isConnectable={isConnectable}
          className="customHandle"
        />
        <Handle
          type="target"
          position={Position.Left}
          id="IN2"
          style={{ top: 70 }}
          isConnectable={isConnectable}
          className="customHandle"
        />
        <Handle
          type="target"
          position={Position.Left}
          id="IN3"
          style={{ top: 90 }}
          isConnectable={isConnectable}
          className="customHandle"
        />
        <Handle
          type="source"
          position={Position.Right}
          id="OUT"
          isConnectable={isConnectable}
          className="customHandle"
        />
        {/* <span className="handle-label">
          <b>IN0: </b>
          {data?.IN0?.toFixed(2)}
        </span>
        <div className="handle-with-label">
          <Handle
            type="target"
            position={Position.Left}
            id="IN1"
            style={{ top: 40 }}
            isConnectable={isConnectable}
            className="custom-handle"
          />
          <span className="handle-label">
            <b>IN1: </b>
            {data?.IN1?.toFixed(2)}
          </span>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="OUT"
          isConnectable={isConnectable}
          className="custom-handle"
        /> */}
      </div>
    </div>
  );
};

export default CustomAdd4OperatorNode;
