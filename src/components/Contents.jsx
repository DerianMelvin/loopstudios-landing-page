import React, { useState } from "react";

const Contents = () => {
  const [list, setList] = useState([
    "Deep Earth",
    "Night Arcade",
    "Soccer Team VR",
    "The Grid",
    "From Up Above VR",
    "Pocket Borealis",
    "The Curiosity",
    "Make It Fisheye",
  ]);

  return (
    <section id="contents">
      <h1 id="contents-heading">Our Creations</h1>

      <button id="contents-button">
        <h4>See All</h4>
      </button>

      <ul id="contents-list">
        {list.map((item, i) => {
          return (
            <li id={`item-${i + 1}`} className="item">
              <h4>{item}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contents;
