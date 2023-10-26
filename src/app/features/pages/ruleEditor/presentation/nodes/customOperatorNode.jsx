import React from "react";
import "../../../../../common/styles/commonNodeStyle.css";
import { Handle, Position } from "reactflow";

const CustomOperatorNode = ({ data, isConnectable }) => {
  return (
    <div className="customOperatorContainer">
      <div className="customNodeHeading">{data.label}</div>
      <div className="customNodeContent">
        <Handle
          type="target"
          position={Position.Left}
          id="IN0"
          style={{ top: 40 }}
          isConnectable={isConnectable}
          className="customHandle"
        />
        {/* <span className="handle-label">
          <b>IN0: </b>
          {data?.IN0?.toFixed(2)}
        </span> */}
        <div className="handleWithLabel">
          <Handle
            type="target"
            position={Position.Left}
            id="IN1"
            style={{ top: 40 }}
            isConnectable={isConnectable}
            className="customHandle"
          />
          {/* <span className="handle-label">
            <b>IN1: </b>
            {data?.IN1?.toFixed(2)}
          </span> */}
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="OUT"
          isConnectable={isConnectable}
          className="customHandle"
        />
      </div>
    </div>
  );
};

export default CustomOperatorNode;
