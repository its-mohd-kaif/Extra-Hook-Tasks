import React, { useMemo, useState } from "react";
import "./Usememo.css";
// Usememo Component
function Usememo() {
  // State for number adding
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  // State For Color Theme
  const [color, setColor] = useState("white");
  // State For Result
  const [sum, setSum] = useState("");
  function expensive() {
    let num1 = 2852895625892572975;
    let num2 = 27362772683;

    let res = num1 * num2;
    console.log("Expensive Function");

    return res;
  }
  const memofun = useMemo(() => expensive(), []);
  const num1Handler = (e) => {
    setNum1(e.target.value);
  };

  const num2Handler = (e) => {
    setNum2(e.target.value);
  };

  const addHandler = () => {
    setSum(Number(num1) + Number(num2));
  };

  const colorHandler = () => {
    if (color === "white") {
      setColor("black");
    } else if (color === "black") {
      setColor("white");
    }
  };

  return (
    <div className={color}>
      <center>
        {memofun}
        <section>
          <div>
            <h1>useMemo</h1>
          </div>
          <div>
            <div>
              <input
                className="inputBox"
                onChange={num1Handler}
                type={"number"}
              />
            </div>
            <div>
              <input
                className="inputBox"
                onChange={num2Handler}
                type={"number"}
              />
            </div>
            <button className="submitBtn" onClick={addHandler}>
              Add
            </button>

            <button
              style={{ marginLeft: "1%" }}
              onClick={colorHandler}
              className="submitBtn"
            >
              Color
            </button>
          </div>
          <h1>{sum}</h1>
        </section>
        <hr></hr>
        <hr></hr>
      </center>
    </div>
  );
}

export default Usememo;
