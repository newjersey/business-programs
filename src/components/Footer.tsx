import React from "react";

import "./footer.scss";

const Footer: React.FC = () => (
  <footer className="no-print bg-primary-vivid">
    <div className="container">
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
              info@usdigitalresponse.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
