// @ts-nocheck

import React, { useEffect , useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import PPPSection from './PayrollProtectionProgramSection'
import EIDLProgramSection from './EconomicInjuryDisasterLoanProgramSection'
import StatePrograms from './StatePrograms'
import Header from "./Header";
import Footer from "./Footer";

import "./new_results.scss";

const Results: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [eligiblePrograms, setEligiblePrograms] = useState([]);

  const allPrograms = {
    'ppp': {name: 'Payroll Protection Plan', url: ''},
    'eidl': {name: 'Economic Injury Disaster Loan Program', url: ''},
    'sbdrp': {name: 'Small Business Debt Relief Program', url: ''}
  }

  const expiredPrograms = [
    {name: 'State Program', url: ''}
  ]

  useEffect(() => {
    // hacky port of raw js from previous results page, will redo with the new results page
    const eligibleProgramsParams = new URLSearchParams(search).getAll("eligible");

    setEligiblePrograms(eligibleProgramsParams);
  }, []);

  return (
    <div>
      <Header />
      <main className="results-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 left">
              <h1 className="title-top">
                Your Recommendations
              </h1>
              <p>
                If you and your business have an existing relationship with a bank, contact your banker for more information about available relief programs. 
              </p>
              <a name="ppp"></a>
              {eligiblePrograms.includes('ppp') && <PPPSection/>} 
              <a name="eidl"></a>
              {eligiblePrograms.includes('eidl') && <EIDLProgramSection/>}
              <a name="expired"></a>
              <StatePrograms
                eligiblePrograms={eligiblePrograms}
              />
            </div>
            <div className="col-4 right">
              <div className="sidebar-container">
                <div>
                  <div className="sidebar-title">
                    ELIGIBLE
                  </div>
                  <div>
                    {eligiblePrograms.map(program => 
                      <div className="sidebar-item"><a href={`#${program}`}>{allPrograms[program]?.name}</a></div>
                    )}
                  </div>
                  <div className="sidebar-title sidebar-expired">
                    EXPIRED
                  </div>
                  <div>
                    {expiredPrograms.map(program => 
                      <div className="sidebar-item"><a href={'#expired'}>{program.name}</a></div>
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