import React, { useState } from 'react'
import logo from "../../images/logo_black.png";
import "./Navbar.css";
function Navbar() {

const [checked,setchekced]=useState(true);

function handlechecked()
{
  setchekced(!checked);
}
    return (
      <div className='Navbar_container'>
        <div className='logo_container'>
          <img src={logo} alt='logo' />
          <h1>Riteesh</h1>
        </div>
        <div
          className={
            checked
              ? 'Navbar_links_container'
              : 'Navbar_links_container_checked'
          }>
          <ul className='Navbar_links'>
            <li>Home</li>
            <li>Resources</li>
            <li>Services</li>
            <li>Contact</li>
            <button>
              <b>Book a demo call!</b>
            </button>
          </ul>
        </div>
        {checked ? (
          <img
            alt='burger'
            className='small_navbar_links'
            src='https://img.icons8.com/material-sharp/24/000000/menu--v3.png'
            onClick={handlechecked}
          />
        ) : (
          <img
            alt='cross'
            onClick={handlechecked}
            className='small_navbar_links'
            src='https://img.icons8.com/material-sharp/30/000000/delete-sign.png'
          />
        )}
      </div>
    );
}

export default Navbar;
