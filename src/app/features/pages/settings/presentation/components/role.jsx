import React from "react";
import "../../../../../common/styles/roleStyle.css";

const Role = ({ roleName }) => {
  return (
    <div className="role">
      <div className="roleName">{roleName}</div>
      <div className="roleCheckBoxes">
        <div className="roleReadWrite">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div className="roleReadWrite">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div className="roleReadWrite">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div className="roleReadWrite">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>

        <div className="roleReadWrite">
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Role;
