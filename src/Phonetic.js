import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <em>
          <h5>{props.phonetic} </h5>
        </em>
      </div>
    );
  }
}
