import React from "react";

import "./header.scss";

interface Props {
  links?: Array<JSX.Element>;
}

const Header: React.FC<Props> = ({ links = [] }) => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary-vivid">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="/usdr_logo_white.png" alt="USDR Logo" />
      </a>
      Built by&nbsp;
      <a href="https://www.usdigitalresponse.org/" target="_blank">
        United States Digital Response
      </a>
      , a non-partisan effort to assist the U.S. government
      {links.length && (
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
