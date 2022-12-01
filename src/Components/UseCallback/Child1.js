import React, { useCallback, useState, memo } from "react";
import Child2 from "./Child2";
// Child 1 Component
function Child1({ data, addData }) {
  const [count, setCount] = useState("");
  const decremenetHandler = useCallback(() => {
    setCount((val) => --val);
  }, [count]);
  console.log("Child 1");
  return (
    <div>
      <center>
        <div>
          <button className="submitBtn" onClick={addData}>
            Child 1
          </button>
          <br></br>
          {data}
        </div>
        <Child2 value={count} addCount={decremenetHandler} />
      </center>
    </div>
  );
}

export default memo(Child1);
