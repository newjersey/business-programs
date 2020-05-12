import React from "react";

import "./footer.scss";

const Footer: React.FC = () => (
  <footer className="no-print">
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="/usdr_logo_dark.png" alt="USDR Logo" />
          Built by&nbsp;
          <a href="https://www.usdigitalresponse.org/" target="_blank">
            United States Digital Response
          </a>
          , a non-partisan effort to assist the U.S. government
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="d-inline">
            <img src="/twitter_logo.png" alt="Twitter logo" />
            <a target="_blank" href="https://twitter.com/USDResponse">
              @USDResponse
            </a>
          </p>
          <p className="d-inline">
            <a href="mailto:info@usdigitalresponse.org">
              info@usdigitalresponse.org
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
