import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>  
    <h3>this is ParentComponent</h3>
      <div style={{ backgroundColor: "green", padding: "10px" }}>
        <ChildComponent>
          <h4>this is child part from parent</h4>
        </ChildComponent>
      </div>
    </div>
  );
};

export default ParentComponent;
