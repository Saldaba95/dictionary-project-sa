import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="">
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                {" "}
                <img src={photo.src.landscape} />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
