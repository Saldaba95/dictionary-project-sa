import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "d44bo97ccfe0cbf0e78f5498fb0fa93t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      {" "}
      <form onSubmit={search}>
        {" "}
        <input className="input" type="search" onChange={handleKeywordChange} />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>{" "}
      <div className="hint">
        {" "}
        <small>e.g. : bird, plant, car, flower....</small>{" "}
      </div>
      <br />
      <Results results={results} />
    </div>
  );
}
