// prettier-ignore
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const FormCreateBottle = (props) => {
  const crates = props.crates;
  // console.log("crates", crates.crates);
  // const crates = (await getCrates()) || [];

  const [crateSelected, setCrateSelected] = useState(0);
  const [bottleMessage, setBottleMessage] = useState("");

  const handleBottleSubmission = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    console.log("form", form);
    console.log("formData", formData);
    // You can pass formData as a fetch body directly:
    fetch("/api/bottles", { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    // console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    console.log("formData.entries()", [...formData.entries()]);
  };

  return (
    <>
      {/* <!-- Basic HTML Form --> */}
      <h1>Write Milk Bottle</h1>
      <form
        // action="/api/bottles"
        method="post"
        className={"submitBottleForm"}
        onSubmit={handleBottleSubmission}
      >
        <div className="f-row">
          <div className="f-col">
            <label htmlFor="crate-select">Crate</label>

            <select
              name="crates"
              id="crate-select"
              style={{ maxWidth: "200px" }}
              value={crateSelected}
              onChange={(e) => setCrateSelected(e.target.value)}
            >
              {/* <option value="random">Random</option> */}
              {crates.map((crate) => {
                return (
                  <option value={crate.id} key={crate.id}>
                    {crate.name}
                  </option>
                );
              })}
            </select>
            {/* <label for="first">First Name</label>
  <input type="text" id="first" name="first" /> */}

            <label htmlFor="bottle-message">Message in the milk bottle</label>
            <textarea
              placeholder="What do you want to say?"
              id="bottle-message"
              name="bottle-message"
              rows="5"
              cols="60"
              width={"100%"}
              value={bottleMessage}
              onChange={(e) => setBottleMessage(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn-default">
            <span style={{ marginRight: "10px" }}>Send away</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCreateBottle;
