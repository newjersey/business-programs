import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

function PPPLoanInfo() {
  return (
    <div className="content-page">
      <Helmet>
        <meta property="og:title" content="COVID-19 SMB Loan Information" />
        <meta
          property="og:description"
          content="Learn about PPP programs available to help stabilize your business."
        />
        <title>COVID-19 PPP Loan Information</title>
        <meta
          name="Description"
          content="Learn about PPP programs available to help stabilize your business."
        />
      </Helmet>
      <Header
        links={[
          <a className="nav-link" href="#where-to-apply">
            Where to apply
          </a>,
          <a className="nav-link" href="#national-lenders">
            National lenders
          </a>,
          <a className="nav-link" href="#regional-lenders">
            Regional Lenders
          </a>,
        ]}
      />

      <main>
        <section>
          <div className="container">
            <h1>PPP Loans</h1>
            <p>
              The Payroll Protection Program (PPP) is a new federal loan program
              designed to help small business owners affected by the coronavirus
              pandemic cover payroll, rent, and other obligations.
            </p>
            <p>
              Although the program is being administered by the Small Business
              Administration, the loans themselves will be disbursed by the
              nation’s banks, credit unions, and other federally approved
              lenders. That means small business owners need to apply for
              funding with their local and/or existing banking partner.
            </p>
            <p>
              Not every bank is ready to accept applications and approve loans
              at this moment in time. Some major national banks are up and
              running with the PPP, while others are still finalizing their
              processes.
            </p>
            <p>
              In addition, you likely won’t be able to walk into any bank and
              ask for a PPP loan. Most banks will require that you have an
              existing relationship with them and/or ask you to meet other
              requirements.
            </p>
            <p>
              Let’s review where you can apply for a Payroll Protection Program
              loan today, assuming you meet their criteria. We are making an
              effort to focus on lenders that have some history of SBA lending
              as well.
            </p>

            <h2 id="where-to-apply">Where to apply</h2>
            <p>
              We recommend applying for a loan with a bank your business already
              has a relationship with.
            </p>
            <p>
              If that isn’t an option, browse the list below to find a lender
              that lets new customers apply.
            </p>
            <p>
              You can also use the{" "}
              <a
                href="https://www.sba.gov/paycheckprotection/find"
                target="_blank"
              >
                SBA’s tool for finding lenders
              </a>
              . Enter your ZIP code, and the tool will show you lenders in your
              area.
            </p>
            <p>
              Finally, you can try contacting local community banks offering PPP
              loans and ask if you can transfer over your business account. This
              may qualify you to apply.
            </p>

            <h2>List of Lenders</h2>
            <p>
              We are making an effort to focus on lenders that have some history
              of SBA lending.
            </p>

            <h3 id="national-lenders" className="h4 mb-3">
              National Banks
            </h3>
            <div className="table-responsive">
              <table className="table table-hover ppp-table">
                <thead>
                  <th scope="col" className="ppp-table-name">
                    Name of bank
                  </th>
                  <th scope="col" className="ppp-table-who">
                    Who can apply?
                  </th>
                  <th scope="col" className="ppp-table-link">
                    How to apply
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Bank of America</th>
                    <td>
                      Current customers with an existing business credit card,
                      loan, or line of credit
                    </td>
                    <td>
                      <a
                        href="https://about.bankofamerica.com/promo/assistance/latest-updates-from-bank-of-america-coronavirus/small-business-assistance"
                        target="_blank"
                      >
                        Apply on Bank of America's website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Chase Bank</th>
                    <td>
                      Current customers who opened a business checking account
                      before February 15, 2020
                    </td>
                    <td>
                      <a
                        href="https://recovery.chase.com/cares1"
                        target="_blank"
                      >
                        Apply on Chase Bank's website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Wells Fargo</th>
                    <td>
                      Wells Fargo is focusing on nonprofits and small businesses
                      with less than 50 employees.
                    </td>
                    <td>
                      Wells Fargo is no longer accepting applications due to a
                      high number of requests.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="regional-lenders" className="h4 mb-3">
              Regional and Local Banks
            </h3>

            <div className="table-responsive">
              <table className="table table-hover ppp-table">
                <thead>
                  <th scope="col" className="ppp-table-name">
                    Name of bank
                  </th>
                  <th scope="col" className="ppp-table-who">
                    Who can apply?
                  </th>
                  <th scope="col" className="ppp-table-link">
                    How to apply
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Ameris Bank</th>
                    <td>Current customers with a business checking account</td>
                    <td>
                      Contact your banker directly. Ameris Bank applications are
                      taking up to 60 days to process.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Atlantic Capital Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://atlanticcapitalbank.com/"
                      >
                        Apply on Atlantic Capital&rsquo;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">BMO Harris</th>
                    <td>
                      <ul>
                        <li>Businesses with a BMO Business Deposit Account</li>
                        <li>
                          Sole proprietors with a BMO Personal Deposit account
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.bmoharris.com/main/personal/bmo-branches-coronavirus-update/ppp/"
                      >
                        Apply on BMO Harris&rsquo; website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Byline Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.bylinebank.com/covid19/sba-relief/"
                      >
                        Apply on Byline Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Celtic Bank</th>
                    <td>Contact the bank for details</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://start.celticbank.com/paycheck-protection-program"
                      >
                        Apply on Celtic Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Citizens Bank</th>
                    <td>Current customers</td>
                    <td>Contact your Citizens Bank relationships manager</td>
                  </tr>
                  <tr>
                    <th scope="row">FirstBank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.firstbankonline.com/resources/paycheck-protection-program/"
                      >
                        Download the application on FirstBank&#39;s website
                      </a>{" "}
                      and email it to your banker
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">First Commonwealth Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.fcbanking.com/why-us/contact-us/coronavirus-update/paycheck-protection-program-faqs/"
                      >
                        Apply on First Commonwealth Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">First Home Bank</th>
                    <td>Contact the bank for details</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.firsthomebank.com/sbarelief/"
                      >
                        Apply on First Home Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">First United Bank</th>
                    <td>Anyone</td>
                    <td>First United is no longer accepting applications</td>
                  </tr>
                  <tr>
                    <th scope="row">Frost Bank</th>
                    <td>
                      Current business checking customers with accounts open as
                      of April 1, 2020
                    </td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.frostbank.com/COVID-19/CARESAct"
                      >
                        Apply on Frost Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Fulton Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.fultonbank.com/CARES-Act"
                      >
                        Apply on Fulton Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Independent Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.independentbank.com/business/commercial-lending/"
                      >
                        Download the application on Independent Bank&#39;s
                        website
                      </a>{" "}
                      and contact a representative when you are ready to submit
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Liberty Bank</th>
                    <td>Current customers</td>
                    <td>
                      Email{" "}
                      <a href="mailto:PaycheckProtectionProgram@Liberty-Bank.com">
                        PaycheckProtectionProgram@Liberty-Bank.com
                      </a>{" "}
                      to request an application
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Live Oak Bank</th>
                    <td>Current loan customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.liveoakbank.com/paycheck-protection-program-sign-up/"
                      >
                        Apply on Live Oak Bank&#39;s website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Midwest BankCentre</th>
                    <td>Current customers in their local area</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.midwestbankcentre.com/ppploan"
                      >
                        Download the Midwest BankCentre application here
                      </a>
                      <br />
                      and submit it to{" "}
                      <a href="mailto:HeyOrvSTL@midwestbankcentre.com">
                        HeyOrvSTL@midwestbankcentre.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Old National</th>
                    <td>
                      Current customers who are:
                      <ul>
                        <li>Small businesses</li>
                        <li>Sole proprietors</li>
                        <li>Nonprofits</li>
                        <li>Independent contractors</li>
                        <li>Self-employed people</li>
                      </ul>
                    </td>
                    <td>
                      Contact your loan officer or{" "}
                      <a target="_blank" href="https://www.oldnational.com/">
                        log into online banking
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Peapack-Gladstone Bank</th>
                    <td>Current customers</td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.pgbank.com/assets/files/Y6Kr6ewA"
                      >
                        Download the Peapack-Gladstone Bank application here
                      </a>
                      &nbsp;and email it to{" "}
                      <a href="mailto:PGBCovid19PPPRelief@pgbank.com">
                        PGBCovid19PPPRelief@pgbank.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Pinnacle Bank</th>
                    <td>
                      <ul>
                        <li>Small businesses</li>
                        <li>Sole proprietorships</li>
                        <li>Independent contractors</li>
                        <li>Self-employed people</li>
                      </ul>
                    </td>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.pnfp.com/sba-lending-in-a-pandemic/"
                      >
                        Learn more about Pinnacle Bank loans
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PPPLoanInfo;
