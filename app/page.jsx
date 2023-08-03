// import { useState } from "react";
import Link from "next/link";

import Footer from "../components/Footer";
import Header from "../components/Header";
import IconButton from "../components/IconButton";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  // const [crates, setCrates] = useState([]);
  const crates = [{ name: "crate 1" }, { name: "crate 2" }];

  return (
    <div className={"page"}>
      <div className={"container"}>
        <Header />

        <p>Crates</p>
        <ul>
          {crates.map((crate) => {
            return (
              <li>
                <Link href={"crates/" + crate.slug}>{crate.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* <!-- Basic HTML Form --> */}
        <form action="/api/bottle" method="post" className={"submitBottleForm"}>
          <div className="f-row">
            <div className="f-col">
              <label for="crate-select">Crate</label>

              <select
                name="crates"
                id="crate-select"
                style={{ maxWidth: "200px" }}
              >
                <option value="random">Random</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
              {/* <label for="first">First Name</label>
          <input type="text" id="first" name="first" /> */}

              <label for="bottle-message">Message in the milk bottle</label>
              <textarea
                placeholder="What do you want to say?"
                id="bottle-message"
                name="bottle-message"
                rows="5"
                cols="60"
                width={"100%"}
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
        <IconButton icon={faArrowRight} color={"blue"} />

        <Footer />
      </div>
    </div>
  );
}
