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

const ResultSidebar: React.FC = () => {

  return (
    <div>
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
          <div>
            {lenderObject.name}
          </div>
        )}
      </div>
      <p>Find other lenders.</p>
    </div>
              
  );
};

export default ResultSidebar;