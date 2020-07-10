import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import "./footer.scss";
import "./index.scss";

interface Props {
  ca?: boolean
  pitt?: boolean
  hawaii?:boolean;
}

const Landing: React.FC<Props> = (props) => {
  const { ca, pitt, hawaii } = props;

  return (
    <div className="content-page">
      <Helmet>
        <meta property="og:title" content="COVID-19 SMB Loan Information" />
        <meta
          property="og:description"
          content="Learn about support programs available to help stabilize your business."
        />
        <title>COVID-19 SMB Loan Information</title>
        <meta
          name="Description"
          content="Learn about support programs available to help stabilize your business."
        />
      </Helmet>
      <Header
        links={[
          <a className="nav-link" href="#government-partners">
            Government Partners
          </a>,
          <Link className="nav-link" to="/ppp-loans">
            PPP Loans
          </Link>,
        ]}
      />

      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <section>
                <h1>Find COVID-19 financial assistance for your business</h1>

                <p>

                  Answer a few questions to find loans and funding alternatives.
                </p>
                <p>
                  UPDATE: The federal Payroll Protection Program has been extended to August 8, 2020. Find a lender and complete your application before the deadline.

                </p>


                <Link to={ca ? "/california/questions" : pitt ? "/pittsburgh/questions" : hawaii ? "/hawaii/questions" : "/questions"}>
                  <button className="usa-button usa-button--big">
                    Get Started
                  </button>
                </Link>

              </section>


              <section>
                <h2>Who is it for?</h2>
                <p>This free tool is for U.S.-based businesses including:</p>
                <ul>
                  <li>Nonprofits</li>
                  <li>Tribal business concerns</li>
                  <li>Self-employed individuals</li>
                  <li>Contractors, freelancers, and gig workers</li>
                  <li>Small business with fewer than 500 employees (including C Corp, S Corp, LLC)</li>
                </ul>
                <p>If you have more than 500 employees, check the <a href = "https://www.sba.gov/document/support--table-size-standards" target="_blank">
                  Small Business Administration size standards </a> to find loans specific to your industry.</p>


              </section>
              <section id="government-partners">
                <h2>Government partners</h2>

                <p>
                  To get a free tool built for your agency or to include your state's programs, please email the {" "}
                  <a
                    target="_blank"
                    href="https://www.usdigitalresponse.org/requesthelp"
                  >
                    US Digital Response
                  </a>
                  .
                </p>
              </section>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img
                src="/landing_header_img.png"
                alt="Person getting money"
              ></img>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
