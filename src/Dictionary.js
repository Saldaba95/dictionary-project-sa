import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    let apiKey = "d44bo97ccfe0cbf0e78f5498fb0fa93t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "BvBZxuwDgZR2bQ4bcLKqKORDNzdfSxB0mZVmdkka1jIGGgW3G4hoFnz0";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;

    let headers = { Authorization: `  Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        {" "}
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            className="input"
            type="search"
            onChange={handleKeywordChange}
          />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>{" "}
        <div className="hint">
          {" "}
          <small>e.g. : bird, plant, car, flower....</small>{" "}
        </div>
        <br />
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
