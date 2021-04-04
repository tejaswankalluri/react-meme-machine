import React, { useState, useEffect } from "react";
import "../css/style.css";
import "../css/card.css";
export default function Grid() {
  const [memes, setmemes] = useState([]);

  useEffect(() => {
    fetch("https://meme-api.herokuapp.com/gimme/50")
      .then((res) => res.json())
      .then((data) => {
        setmemes(data.memes);
        console.log(data.memes)
      });
  },[]);

  const grids = memes.map((meme,i) => (
    <li className="cards__item" key={i}>
      <div className="card">
        <img src={meme.preview[2]} alt={i} />
        <div className="card__content">
          <a href={meme.preview[2]} download>
            <button className="btn btn--block card__btn">Download</button>
          </a>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="carrr">
      <ul className="cards">{grids}</ul>
    </div>
  );
}
