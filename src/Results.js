import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>

          <Phonetic phonetic={props.results.phonetic} />
        </section>

        <section>
          <Meaning meaning={props.results.meaning} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
