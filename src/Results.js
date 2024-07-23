import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <br />
        <Phonetic phonetic={props.results.phonetic} />

        <Meaning meaning={props.results.meaning} />
      </div>
    );
  } else {
    return null;
  }
}
