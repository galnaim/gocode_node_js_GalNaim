import React from "react";
import { Link } from "react-router-dom";

export default function About() {

  return (
    <React.Fragment className="aboutFather">
      <div className="aboutLink">About my site....</div>
      <br />
      <Link className="homeLink" to="/">
        Home Page
      </Link>
    </React.Fragment>
  );
}