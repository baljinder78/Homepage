import React, { useState } from "react";
import "./Navbar.css";
import Button from "../Button";

function Navbar() {
  const [checked, setChecked] = useState(true);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div className="Navbar_container">
      <div className="logo_container">
        <h1>Muskan</h1>
      </div>
      <div
        className={
          checked ? "Navbar_links_container" : "Navbar_links_container_checked"
        }
      >
        <ul className="Navbar_links">
          <li>Home</li>
          <li>Resources</li>
          <li>Services</li>
          <li>Contact</li>
          <Button content="Book a demo call!" />
        </ul>
      </div>
      {checked ? (
        <img
          alt="burger"
          className="small_navbar_links"
          src="https://img.icons8.com/material-sharp/24/000000/menu--v3.png"
          onClick={handleChecked}
        />
      ) : (
        <img
          alt="cross"
          onClick={handleChecked}
          className="small_navbar_links"
          src="https://img.icons8.com/material-sharp/30/000000/delete-sign.png"
        />
      )}
    </div>
  );
}

export default Navbar;
