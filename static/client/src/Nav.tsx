import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Link to="/">
        Home
      </Link>
      &nbsp;/&nbsp;
      <Link to="/browse">
        Browse
      </Link>
      &nbsp;/&nbsp;
      <Link to="/search">
        Search
      </Link>
      &nbsp;/&nbsp;
      <Link to="/splash">
        Splash
      </Link>
      &nbsp;/&nbsp;
      <Link to="/edit-song">
        Edit Song
      </Link>
      &nbsp;/&nbsp;
      <Link to="/config">
        Config
      </Link>
    </nav>
  );
}
