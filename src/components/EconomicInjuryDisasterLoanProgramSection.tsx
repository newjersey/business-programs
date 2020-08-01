import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./new_results.scss";

const EIDLProgramSection: React.FC = () => {

  return (
    <div className="loan-container">
      <label className="top-label">
        Apply by Dec 31, 2020
      </label>
      <h2 className="title">
        Economic Injury Disaster Loan Program
      </h2>
      <p className="loan-description">
        This low-interest loan from the Small Business Administration provides up to $10,000 of economic relief to businesses that are experiencing temporary difficulties.
      </p>
      <p>
        These lenders are online and you can apply right now.
      </p>
      <div className="eidl-terms">
        <ul>
          <li>
          Advance/grant of up to $10K, within days after receipt of application
          </li>
          <li>
          Interest rate ~3.75% (~2.75% for nonprofits)
          </li>
          <li>
          Up to a 30-year maximum term
          </li>
          <li>
          Can defer first payment for up to 1 year
          </li>
          <li>
          No personal guarantee required below $200K
          </li>
          <li>
          This loan advance will not have to be repaid
          </li>
        </ul>
      </div>
      <p>Complete your application on the SBA EIDL site</p>
      <button
        className="usa-button eidl-cta"
        data-ga-label="Print this report"
        onClick={(e) => {
          e.preventDefault();
          window.open('https://covid19relief.sba.gov/', '_blank')
          }}
        type="button"
      >
        Apply Now
      </button>
    </div>
              
  );
};

export default EIDLProgramSection;

