import React, { useCallback, useState } from "react";
import Child1 from "./Child1";

function Parent() {
  // Parent Component
  const [count, setCount] = useState("");
  const [decrement, setDecrement] = useState("");

  const incrementHandler = () => {
    setCount((val) => ++val);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const decremenetHandler = useCallback(() => {
    setDecrement((val) => --val);
  }, [decrement]);
  console.log("Parent");

  return (
    <div>
      <section>
        <center>
          <div>
            <h1>UseCallback</h1>
          </div>
          <div>
            <button className="submitBtn" onClick={incrementHandler}>
              Parent
            </button>
            <br></br>
          </div>
          {count}
        </center>
        <Child1 data={decrement} addData={decremenetHandler} />
      </section>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default Parent;
