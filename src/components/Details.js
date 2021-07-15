import React from "react";
import '../styles/Details.css'

function Details(props) {
  return (
    <div className="player__details">
      <div className="details__img">
        <img src={props.song.img_src} alt="" />
      </div>
      <h1 className="details__title">{props.song.title}</h1>
      <p className="details__artist">{props.song.artist}</p>
    </div>
  );
}

export default Details;