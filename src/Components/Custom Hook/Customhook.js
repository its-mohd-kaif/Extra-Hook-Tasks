import React, { useState } from "react";
import useFetch from "./useFetch";
// Custom Hook Function
function Customhook() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  const [display, setDisplay] = useState([]);

  const fetchDataHandler = () => {
    setDisplay(data.splice(0, 5));
  };
  return (
    <div>
      <section>
        <div>
          <center>
            <h1>Custom Hook</h1>
            <button className="submitBtn" onClick={fetchDataHandler}>
              Fetch Api
            </button>
          </center>
        </div>
        <div>
          <center>
            <table>
              <tbody>
                {display.map((val) => (
                  <tr>
                    <td>{val.id}</td>
                    <td>{val.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
        </div>
      </section>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default Customhook;
