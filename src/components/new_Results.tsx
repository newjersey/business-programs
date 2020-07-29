import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PPPSection from './PayrollProtectionProgramSection'
import EIDLProgramSection from './EconomicInjuryDisasterLoanProgramSection'
import PastPrograms from './PastPrograms'
import Header from "./Header";
import Footer from "./Footer";

import "./new_results.scss";

const Results: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    // hacky port of raw js from previous results page, will redo with the new results page
    const eligible = new URLSearchParams(search).getAll("eligible");
    eligible.forEach(function (el) {
      var nodes = document.querySelectorAll("." + el);
      nodes.forEach(function (node) {
        node.classList.add("is_eligible");
      });
    });
  });

  const eligiblePrograms = [
    {name: 'Payroll Protection Plan', url: ''},
    {name: 'Economic Injury Disaster Loan Program', url: ''},
  ]

  const expiredPrograms = [
    {name: 'State Program', url: ''}
  ]

  return (
    <div>
      <Header />
      <main className="results-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 left">
              <h1 className="title">
                Your Recommendations
              </h1>
              <p>
                If you and your business have an existing relationship with a bank, contact your banker for more information about available relief programs. 
              </p>
                <PPPSection /> 
  
              
              
              <EIDLProgramSection/>
              <PastPrograms/>
            </div>
            <div className="col-4 right">
              <div className="sidebar-container">
                <div>
                  <div className="sidebar-title">
                    ELIGIBLE
                  </div>
                  <div>
                    {eligiblePrograms.map(program => 
                      <div className="sidebar-item"><a href={program.url}>{program.name}</a></div>
                    )}
                  </div>
                  <div className="sidebar-title sidebar-expired">
                    EXPIRED
                  </div>
                  <div>
                    {expiredPrograms.map(program => 
                      <div className="sidebar-item"><a href={program.url}>{program.name}</a></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;