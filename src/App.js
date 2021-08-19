import React, { useState } from "react";
import "./styles.css";

var songsDictinary = {
  oldSongs: [
    { name: "Mera dil bhi kitna pagal hai", rating: "10/10" },
    { name: "Aankhon ki gustakhiyan", rating: "9.5/10" },
    { name: "Kuch kuch hota hai", rating: "9/10" }
  ],
  punjabi: [
    { name: "Lehanga", rating: "10/10" },
    { name: "Sakhiyaan", rating: "9.5/10" },
    { name: "Prada", rating: "9/10" }
  ],
  melody: [
    { name: "Ranjha", rating: "10/10" },
    { name: "Bekhayali", rating: "9.5/10" },
    { name: "Tera ban jaunga", rating: "9.5/10" }
  ]
};

export default function App() {
  var [item, setItem] = useState("punjabi");

  function clickHandler(item) {
    setItem(item);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>🎶 Good Music</h1>
        <h3>Checkout my favorite Songs. Select a genre to get started!</h3>
        <div>
          {Object.keys(songsDictinary).map((item) => {
            return <button onClick={() => clickHandler(item)}>{item}</button>;
          })}
        </div>
        <hr />
        <div className="details">
          <ul>
            {songsDictinary[item].map((song) => {
              return (
                <li key={song.name}>
                  <div style={{ marginBottom: ".2rem" }}>{song.name}</div>
                  <div>
                    <small>{song.rating}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
