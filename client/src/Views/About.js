import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  let [show, setShow] = useState(true);

  // function togglePic() {
  //   show = false;
  // }

  return (
    <div className="aboutFather">
      <div className="aboutLink">About my site....</div>
      <br />
      <Link className="homeLink" to="/">
        Home Page
      </Link>

      <button onClick={()=>setShow(!show)}>Egg</button>

      {show && (
        <img
          className="eggPic"
          src="/images/Egg.jpg"
          alt="an egg"
          width="300px"
        />
      )}
    </div>
  );
}
