import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((dir, index) => {
      return <div key={index}>
        <h2>{dir.name}</h2>
        <ul>
          {dir.movies.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>
    })}
  </div>;
}

export default Actors;
