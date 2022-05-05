import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((dir, index) => {
      return <div key={index}>
        <h2>{dir.name}</h2>
        <ul>
          {dir.movies.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>
    })}
  </div>;
}

export default Directors;
