import React, { useReducer } from "react";
import "./Usereducer.css";
import formReducer from "../reducers/formReducer";
import TransitionsModal from "./Model";
import { initialState } from "../reducers/formReducer";

function Usereducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleTextChange = (e) => {
    // Call Dispatch
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  if (state.barcode === false) {
    state.barcode = "";
  } else if (state.barcode === true) {
    state.barcode = "Select";
  }

  return (
    <div>
      <div>
        <center>
          <h1>UseReducer</h1>
        </center>
      </div>
      {/* Form Display */}
      <section>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Title*</h3>
              <p>
                Mention the title of the product that you want to display to the
                customers on the Amazon marketplace.
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="title"
                className="inputField"
                placeholder="title..."
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Description</h3>
              <p>
                Mention a detailed yet precise product description embedded with
                'Keywords' that know more about Amazon's product define the
                product appropriately here. To description policy, click on the
                link HERE!
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="description"
                className="inputField"
                placeholder="description..."
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Handling Time*</h3>
              <p>
                Mention the title of the product that you want to display to the
                customers on the Amazon marketplace.
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="handling_time"
                className="inputField"
                placeholder="handling..."
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Barcode/GTIN Exemption</h3>
              <p>
                Enable the checkbox to upload products with Barcode exemption on
                Amazon.
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({
                    type: "HANDLE_CHECKBOX",
                  })
                }
                name="barcode"
                id="vehicle1"
                value={state.barcode}
              />
              <label htmlFor="vehicle1"> Barcode/GTIN Exemption</label>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Add Amazon Category</h3>
              <p>
                Set Amazon Category/Browse Node for a product, to set the
                Searchability & browsing hierarchy on Amazon Marketplace.
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="category"
                className="inputField"
                placeholder="category..."
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="rowContainer1">
          <div className="column1">
            <div>
              <h3>Image Selection</h3>
              <p>
                Select the best image combinations or add new images (a maximum
                of 9) for your product displayed as part of the product images
                when it gets uploaded on Amazon.
              </p>
            </div>
          </div>
          <div className="column2">
            <div className="inputDiv">
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="image_select"
                type="radio"
                id="html"
                value="Set Product Images On Spotify"
              />
                <label htmlFor="html">Set Product Images On Spotify</label>
              <br></br>
              <br></br> {" "}
              <input
                onChange={(e) => {
                  handleTextChange(e);
                }}
                name="image_select"
                type="radio"
                id="css"
                value="Set Custom Amazon Images"
              />
                <label htmlFor="css">Set Custom Amazon Images</label>
              <br></br>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <center>
            {/* Pass state value using props */}
            <TransitionsModal data={state} />
          </center>
        </div>
      </section>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default Usereducer;
