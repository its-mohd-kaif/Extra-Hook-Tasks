import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
// Custom Hook Function
function Customhook() {
  // UseCustom Hook
  const { data, extractDataFromApi } = useFetch();
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    // Call Mehod and pass url link as a parameter
    extractDataFromApi("https://jsonplaceholder.typicode.com/todos");
  }, []);

  const fetchDataHandler = () => {
    // Set Value Of Data Into Display State
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
