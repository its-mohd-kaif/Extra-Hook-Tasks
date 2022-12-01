import React, { memo } from "react";
// Child 2 Component
function Child2({ value, addCount }) {
  console.log("Child 2");
  return (
    <div>
      <button className="submitBtn" onClick={addCount}>
        Child 2
      </button>
      <br></br>
      {value}
    </div>
  );
}

export default memo(Child2);
