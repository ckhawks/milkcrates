// prettier-ignore
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const FormCreateCrate = (props) => {
  // const crates = props.crates;
  // console.log("crates", crates.crates);
  // const crates = (await getCrates()) || [];

  // const [crateSelected, setCrateSelected] = useState(0);
  const [crateName, setCrateName] = useState("");

  const handleCrateSubmission = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // console.log("form", form);
    // console.log("formData", formData);
    // You can pass formData as a fetch body directly:
    fetch("/api/crates", { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    // console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    // console.log("formData.entries()", [...formData.entries()]);
  };

  return (
    <>
      {/* <!-- Basic HTML Form --> */}
      <h1>Label Crate</h1>
      <form
        method="post"
        className={"submitCrateForm"}
        onSubmit={handleCrateSubmission}
      >
        <div className="f-row">
          <div className="f-col">
            <label htmlFor="crate-name">Name</label>
            <input
              type="text"
              id="crate-name"
              name="name"
              value={crateName}
              onChange={(e) => setCrateName(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <button type="submit" className="btn-default">
            <span style={{ marginRight: "10px" }}>Form crate</span>
            <FontAwesomeIcon icon={faHammer} />
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCreateCrate;
