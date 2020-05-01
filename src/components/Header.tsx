import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

interface Props {
  links?: Array<JSX.Element>;
}

const Header: React.FC<Props> = ({ links = [] }) => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary-vivid">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src="/usdr_logo_white.png" alt="USDR Logo" /> Business Assistant
      </Link>
      {links.length > 0 && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {links.map((link) => (
                <li className="nav-item">{link}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  </nav>
);

export default Header;
