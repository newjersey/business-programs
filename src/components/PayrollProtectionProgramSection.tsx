import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./new_results.scss";

const pppLenders = [
  {
    name: 'BlueVine',
    subtext: '',
    url: 'https://www.bluevine.com/'
  },
  {
    name: 'Funding Circle',
    subtext: '',
    url: 'http://www.teamcenterstone.com/ppploan/'
  },
  {
    name: 'Kabbage',
    subtext: 'Kabbage can only process loans of up to $2 million',
    url: 'https://www.kabbage.com/paycheck-protection-program-loans/'
  },
  {
    name: 'Loan Source',
    subtext: '',
    url: 'https://www.covidreserve.com/'
  },
  {
    name: 'NewTek Small Business Finance',
    subtext: '',
    url: 'https://partners.newtekone.com/caresact/business-lending/'
  },
  {
    name: 'OnDeck',
    subtext: '',
    url: 'https://online.ondeck.com/?sba_ppp=true&_ga=2.120667080.1313386691.1588787633-1585010504.1588109996'
  },
]

const PPPSection: React.FC = () => {

  return (
    <div className="loan-container">
      <label className="top-label">
        Extended to August 8, 2020
      </label>
      <h2 className="title">
        Payroll Protection Program
      </h2>
      <p>
      For this federal program, you can submit multiple applications through different lenders to maximize your chances of receiving a loan. However, you can only accept one loan for your business.
      </p>
      <p>
      These lenders are online and you can apply right now.
      </p>
      <div className="ppp-lenders-container">
        {pppLenders.map(lenderObject => 
          <div 
            className="ppp-item"
          >
            <a
              href={lenderObject.url}
              target="_blank"
            >
              {lenderObject.name}
            </a>
          </div>
        )}
      </div>
      {/* <div className="ppp-cta">Find other lenders.</div> */}
    </div>
              
  );
};

export default PPPSection;