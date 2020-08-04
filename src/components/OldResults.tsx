import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./form-style.scss";
import "./old-results.scss";

const OldResults: React.FC = () => {
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
  return (
    <div>
      <Header />
      <main className="questionnaire">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <br />
              <div className="no-print preamble">
                <h1>Emergency Assistance Eligibility Wizard</h1>
                <p>
                  The COVID-19 outbreak is causing extraordinary disruption for
                  companies and non-profits across the United States. Our goal
                  is to make it easy for organizations to understand what
                  support programs are available to you to help stabilize your
                  operations and get back on a pathway to growth.
                </p>
              </div>
              <span className="fixed_marker"></span>
              <br />
              <div className="my_options">
                <h5>Included programs</h5>
                <ul>
                  <li>
                    Federal Programs
                    <ul className="program_list">
                      <li
                        className="eidl"
                        data-program-name="Federal SBA Emergency Injury Disaster Loans"
                      >
                        Federal SBA Emergency Injury Disaster Loans
                      </li>

                      <li
                          className="ppp"
                          data-program-name="Paycheck Protection Program (PPP) Loans"
                      >
                        Paycheck Protection Program (PPP) Loans
                      </li>

                      <li
                        className="sba_debt"
                        data-program-name="Federal SBA Debt Relief Program"
                      >
                        Federal SBA Debt Relief Program
                      </li>
                      <li
                        className="ca_small_biz"
                        data-program-name="California Small Business Finance Center"
                      >
                        California Small Business Finance Center
                      </li>

                      <li
                          className="pitt_elf"
                          data-program-name="Pittsburgh Small Business Emergency Loan Fund"
                      >
                        Pittsburgh Small Business Emergency Loan Fund
                      </li>
                      <li
                          className="pitt_ura"
                          data-program-name="Urban Redevelopment Authority of Pittsburgh Recovery Loan"
                      >
                        Urban Redevelopment Authority of Pittsburgh Recovery Loan
                      </li>
                      <li
                          className="pitt_bridgeway"
                          data-program-name="Bridgeway Capital Response Fund"
                      >
                        Bridgeway Capital Response Fund
                      </li>
                      <li
                          className="pitt_kiva"
                          data-program-name="Kiva Pittsburgh Loan"
                      >
                        Kiva Pittsburgh Loan
                      </li>
                      <li
                          className="pitt_honeycomb"
                          data-program-name="Honeycomb Small Business Relief Loan"
                      >
                        Honeycomb Small Business Relief Loan
                      </li>

                      <li
                          className="hawaii_community"
                          data-program-name="Hawaii Community-Based Economic Development Loan"
                      >
                        Hawaii Community-Based Economic Development Loan
                      </li>
                      <li
                          className="hawaii_small_business"
                          data-program-name="Hawaii Small Business Relief & Recovery Fund"
                      >
                        Hawaii Small Business Relief & Recovery Fund
                      </li>
                      <li
                          className="hawaii_manufacturing"
                          data-program-name="Hawaii Manufacturing Assistance Program"
                      >
                        Hawaii Manufacturing Assistance Program
                      </li>
                      <li
                          className="hawaii_malama"
                          data-program-name="Hawaii Malama Business Loan Program"
                      >
                        Hawaii Malama Business Loan Program
                      </li>
                      <li
                          className="hawaii_hua"
                          data-program-name="Hawaii Hua Kanu Business Loan Program "
                      >
                        Hawaii Hua Kanu Business Loan Program
                      </li>

                    </ul>
                  </li>
                </ul>
                <p>
                  We’ll check your eligibility for these types of support based
                  on the information you provide below.
                </p>
              </div>

              <div className="report">
                <h3>
                  Based upon your feedback, you may be eligible for the
                  following programs.
                </h3>
                <div className="disclaimer">
                  <p>
                    <strong>Disclaimer:</strong>
                    <br />
                    The Eligibility Wizard neither approves nor denies
                    eligibility for programs, nor does it reserve any funding or
                    a place in any application queue.
                  </p>
                  <p>
                    To apply for a program listed below, you need to apply
                    through the appropriate administering agency. The
                    administering agency will determine all eligibility
                    requirements after you submit an application.
                  </p>
                </div>

                <div className="eidl program card">
                  <div className="card-header">
                    <h4>Economic Injury Disaster Loan (EIDL)</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">A low-interest disaster loan</dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        <ul>
                          <li>Businesses with under 500 employees</li>
                          <li>Private non-profit organizations</li>
                          <li>501(c)(19) veterans’ organizations</li>
                          <li>
                            Some businesses with 500+ employees.
                            <br />
                            <a
                              href="https://www.sba.gov/size-standards/"
                              target="_blank"
                            >
                              Check to see if your business qualifies.
                            </a>
                          </li>
                        </ul>
                      </dd>

                      <dt className="col-sm-3">What can I use it&nbsp;for?</dt>
                      <dd className="col-sm-9">Working capital</dd>

                      <dt className="col-sm-3">
                        When do I need to&nbsp;apply?
                      </dt>
                      <dd className="col-sm-9">As soon as possible</dd>

                      <dt className="col-sm-3">More information</dt>
                      <dd className="col-sm-9">
                        You may qualify for an emergency advance of up to
                        $10,000 for payroll, sick leave, and business
                        obligations. within 3 days after you submit.&nbsp;
                        <a href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/economic-injury-disaster-loan-emergency-advance">
                          Learn more about applying for an advance.
                        </a>
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://covid19relief.sba.gov/"
                      className="no-print btn btn-primary"
                      target="_blank"
                    >
                      Apply for an EIDL
                    </a>
                    <p className="yes-print">
                      Apply for an EIDL: https://covid19relief.sba.gov/
                    </p>
                  </div>
                </div>

                <div className="ppp program card">
                  <div className="card-header">
                    <h4>Paycheck Protection Program (PPP) Loans</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        A 100% federally guaranteed loan
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        <p>
                          Employers who maintain their payroll during the
                          emergency.
                        </p>

                        <p>
                          If the employer maintains their payroll, the lender
                          will forgive the loan.
                        </p>
                      </dd>

                      <dt className="col-sm-3">What can I use it&nbsp;for?</dt>
                      <dd className="col-sm-9">
                        <ul>
                          <li>Employee payroll</li>
                          <li>
                            Employee vacation, sick, parental, medical, or
                            family leave
                          </li>
                          <li>Employee dismissal or separation</li>
                          <li>Retirement and group health care benefits</li>
                          <li>State or local employee compensation tax</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="/ppp-loans"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Find a PPP lender near you
                    </a>
                    <p className="yes-print">
                      Find a PPP lender near you:
                      https://businessrelief.usdigitalresponse.org/ppp-loans
                    </p>
                  </div>
                </div>

                <div className="sba_debt program card">
                  <div className="card-header">
                    <h4>Small Business Debt Relief Program</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        If your organization has an SBA loan, SBA will cover all
                        payments for six months.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        <ul>
                          <li>Small businesses with non-disaster SBA loans</li>
                          <li>
                            New borrowers who receive 7(a), 504, and microloans
                            before September 27, 2020
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/sba-debt-relief"
                      className="no-print btn btn-primary"
                      target="_blank"
                    >
                      Learn more about debt relief programs
                    </a>
                    <p className="yes-print">
                      Learn more about debt relief programs:
                      https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/sba-debt-relief
                    </p>
                  </div>
                </div>

                <div className="ca_small_biz program card">
                  <div className="card-header">
                    <h4>California Small Business Finance Center</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Loan guarantees for small businesses
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        California small businesses. Loan proceeds can be used
                        for business continuance or to cure “economic injury” as
                        a result of the COVID-19 pandemic.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://ibank.ca.gov/small-business-finance-center/"
                      className="no-print btn btn-primary"
                      target="_blank"
                    >
                      Learn more
                    </a>
                    <p className="yes-print">
                      Learn more about debt relief programs:
                      https://ibank.ca.gov/small-business-finance-center/
                    </p>
                  </div>
                </div>


                <div className="pitt_elf program card">
                  <div className="card-header">
                    <h4>Pittsburgh Small Business Emergency Loan Fund</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Loans up to $15,000 with 0% interest offered by the Urban Redevelopment Authority.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses located in Pittsburgh with fewer than 30 full-time employees.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.ura.org/pages/covid-19-small-business-fund"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Learn more about the Pittsburgh Small Business Emergency Loan Fund:
                      https://www.ura.org/pages/covid-19-small-business-fund
                    </p>
                  </div>
                </div>

                <div className="pitt_ura program card">
                  <div className="card-header">
                    <h4>Urban Redevelopment Authority of Pittsburgh Recovery Loan</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Loans up to $75,000 with 0% interest for the first year and 2% for the balance of loan term.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses located in Pittsburgh with fewer than 30 full-time employees.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.ura.org/pages/covid-19-small-business-fund"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Learn more about the Urban Redevelopment Authority of Pittsburgh Recovery Loan:
                      https://www.ura.org/pages/covid-19-small-business-fund
                    </p>
                  </div>
                </div>

                <div className="pitt_bridgeway program card">
                  <div className="card-header">
                    <h4>Bridgeway Capital Response Fund</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Connecting small businesses in western Pennsylvania to capital when it is needed most.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        small businesses in western Pennsylvania.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.bridgewaycapital.org/loans-and-modifications/covid-19-response-fund/"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Bridgeway Capital Response Fund:
                      https://www.bridgewaycapital.org/loans-and-modifications/covid-19-response-fund/
                    </p>
                  </div>
                </div>

                <div className="pitt_kiva program card">
                  <div className="card-header">
                    <h4>Kiva Pittsburgh Loans</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Kiva helps financially excluded and socially impactful entrepreneurs access capital via crowdfunding.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses located in the surrounding areas around Pittsburgh.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.riversidecenterforinnovation.com/kiva/home"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to Kiva Loans:
                      https://www.riversidecenterforinnovation.com/kiva/home
                    </p>
                  </div>
                </div>

                <div className="pitt_honeycomb program card">
                  <div className="card-header">
                    <h4>Honeycomb Small Business Relief Loan</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Honeycomb Crowdfunded Small Business Relief Loan.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses located in the surrounding areas around Pittsburgh.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.honeycombcredit.com/relief"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Honeycomb Small Business Relief Loan:
                      https://www.honeycombcredit.com/relief
                    </p>
                  </div>
                </div>

                <div className="hawaii_community program card">
                  <div className="card-header">
                    <h4>Hawaii Community-Based Economic Development Loan</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        CBED offers micro-loans usually up to $50,000 to eligible small businesses that support economic development in their communities.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses located in Hawaii that have been turned down by at least one financial institution.  The loan must result in
                        a community-based economic development outcome such as:
                        a) increase in jobs in an economically challenged community
                        b) increase in local sourcing of inputs to a manufactured product
                        c) addition of needed service or business to an economically challenged community and
                        d) other community economic benefits of business growth.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://invest.hawaii.gov/business/cbed/"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Hawaii Community-Based Economic Development Loan:
                      https://invest.hawaii.gov/business/cbed/
                    </p>
                  </div>
                </div>

                <div className="hawaii_small_business program card">
                  <div className="card-header">
                    <h4>Hawaii Small Business Relief & Recovery Fund</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        Small Business Relief & Recovery Fund offers a one-time reimbursement for expenses of up to $10,000.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Small businesses who have incurred costs from business interruption due to
                        Emergency Proclamations or costs to implement safety precautions to prevent the spread of COVID-19.
                        Businesses must have less than 1 million in gross annual revenue and 30 or fewer employees.
                        Businesses must also be located in the City and County of Honolulu.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.oneoahu.org/small-business"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Hawaii Small Business Relief & Recovery Fund:
                      https://www.oneoahu.org/small-business
                    </p>
                  </div>
                </div>

                <div className="hawaii_manufacturing program card">
                  <div className="card-header">
                    <h4>Hawaii Manufacturing Assistance Program</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        HTDC’s Manufacturing Assistance Program Grant (MAP) offers Hawaii-based manufacturers
                        up to a 20% reimbursement (up to $100,000) on qualified expenses to help Hawaii manufacturers
                        become globally competitive.  Qualifying expenses include: equipment purchases, training,
                        energy efficiency projects, and manufacturing feasibility studies.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Must conduct manufacturing activities in Hawaii and be categorized as NAICS 31, 32, 33.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://www.htdc.org/money/#map"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Hawaii Small Business Relief & Recovery Fund:
                      https://www.htdc.org/money/#map
                    </p>
                  </div>
                </div>

                <div className="hawaii_malama program card">
                  <div className="card-header">
                    <h4>Hawaii Malama Business Loan Program</h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        This is the most popular loan the Office of Hawaiian Affairs offers that support
                        Native Hawaiian Business owners with loans between $2,500 to $100,000.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Must be of Native Hawaiian ancestry with a credit score of 600 or higher with an income to debt ratio of no more than 45%.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://loans.oha.org/business/malama-business/"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Hawaii Malama Business Loan Program:
                      https://loans.oha.org/business/malama-business/
                    </p>
                  </div>
                </div>

                <div className="hawaii_hua program card">
                  <div className="card-header">
                    <h4>Hawaii Hua Kanu Business Loan Program </h4>
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-3">What is it?</dt>
                      <dd className="col-sm-9">
                        The Hua Kanu Business Loan Program is available to Native Hawaiians who own established business.
                        Created on July 17, 2013, the low-cost loans are intended to help these small-businesses expand.
                        It is meant to provide them access to credit and capital that allow them to grow as well as remain financially viable.
                        Loans between $200,000 to $1,000,000.
                      </dd>

                      <dt className="col-sm-3">Who is it for?</dt>
                      <dd className="col-sm-9">
                        Principals must be Native Hawaiian and verified by current Office of Hawaiian Affairs Registry Card.
                      </dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <a
                        href="https://loans.oha.org/business/hua-kanu-business-loan/"
                        className="no-print btn btn-primary"
                        target="_blank"
                    >
                      Apply now
                    </a>
                    <p className="yes-print">
                      Apply to the Hawaii Hua Kanu Business Loan Program :
                      https://loans.oha.org/business/hua-kanu-business-loan/
                    </p>
                  </div>
                </div>


                <h3>Counseling and Training</h3>

                <p>
                  These organizations received federal funding to counsel small
                  business owners and provide up-to-date COVID-19 information.
                </p>

                <div className="row counseling">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="h6">
                          Small Business Development Centers (SBDCs)
                        </h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          A national network of leading universities, colleges,
                          state economic development agencies and private
                          partners.
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="https://americassbdc.org/about-us/"
                          className="btn btn-primary no-print"
                        >
                          Learn about SBDCs
                        </a>
                        <p className="yes-print">
                          https://americassbdc.org/about-us/
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="h6">Women's Business Centers (WBCs)</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          Offers one-on-one counseling, training, networking,
                          workshops, technical assistance and mentoring to
                          entrepreneurs.
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="https://www.awbc.org/"
                          className="btn btn-primary no-print"
                        >
                          Learn about WBCs
                        </a>
                        <p className="yes-print">https://www.awbc.org/</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="h6">SCORE</h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          A network of expert mentors dedicated to helping small
                          businesses.
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="https://www.score.org/"
                          className="btn btn-primary no-print"
                        >
                          Learn about SCORE
                        </a>
                        <p className="yes-print">https://www.score.org/</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="h6">
                          Minority Business Development Agency's Business
                          Centers (MBDCs)
                        </h4>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          A network that helps Minority Business Enterprises.
                        </p>
                      </div>
                      <div className="card-footer">
                        <a
                          href="https://www.mbda.gov/businesscenters#4/"
                          className="btn btn-primary no-print"
                        >
                          Find a business center
                        </a>
                        <p className="yes-print">
                          https://www.mbda.gov/businesscenters#4/
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <button
                    className="no-print usa-button"
                    onClick={() => window.print()}
                    data-ga-label="Print this report"
                  >
                    Print this report
                  </button>
                  {/* TODO: lift form context up so we can go back and keep answers <button
                    className="no-print usa-button usa-button--outline"
                    onClick={() => history.goBack()}
                    data-ga-label="Change Answers"
                  >
                    Change Answers
                  </button> */}

                  <button
                    className="no-print usa-button usa-button--secondary"
                    data-ga-label="Start over"
                    onClick={() => history.goBack()}
                  >
                    Start over
                  </button>
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

export default OldResults;
