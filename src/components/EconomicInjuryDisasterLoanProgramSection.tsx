import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./new_results.scss";

const pppLenders = [
  {
    name: 'BlueVine',
    subtext: ''
  },
  {
    name: 'Funding Circle',
    subtext: ''
  },
  {
    name: 'Kabbage',
    subtext: 'Kabbage can only process loans of up to $2 million'
  },
  {
    name: 'Loan Source',
    subtext: ''
  },
  {
    name: 'NewTek Small Business Finance',
    subtext: ''
  },
  {
    name: 'OnDeck',
    subtext: ''
  },
]

const EIDLProgramSection: React.FC = () => {

  return (
    <div className="loan-container">
      <label className="top-label">
        Apply by Dec 31, 2020
      </label>
      <h2 className="title">
        Economic Injury Disaster Loan Program
      </h2>
      <p>
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
        onClick={() => {}}
        data-ga-label="Print this report"
      >
        Apply Now
      </button>
    </div>
              
  );
};

export default EIDLProgramSection;