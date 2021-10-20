import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ toggledBtn, setToggledBtn }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button
          className="btn btn-primary"
          id="menu-toggle"

          onClick={() => setToggledBtn(!toggledBtn)}
        >
          Sj-Tools
        </button>
        {/*  <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Singout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
