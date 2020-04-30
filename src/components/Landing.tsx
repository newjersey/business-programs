import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import "./footer.scss";
import "./index.scss";

interface Props {
  ca?: boolean;
}

const Landing: React.FC<Props> = (props) => {
  const { ca } = props;

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
                <h1>Check your eligibility for small business loans</h1>

                <p>
                  Answering a few questions using this free tool will help
                  determine which financial relief programs you’re eligible for.
                </p>
                <p>Learn what you’ll need to prepare your loan applications.</p>
                <Link to={ca ? "/california/questions" : "/questions"}>
                  <button className="usa-button usa-button--big">
                    Get Started
                  </button>
                </Link>
              </section>

              <section>
                <h2>What is it?</h2>
                <p>
                  The COVID-19 stimulus is the largest ever in American history.
                  There are a few federal and state loan options available.
                </p>
                <p>
                  We created a 10-minute questionnaire to help you figure out
                  which programs your organization are qualified for.
                </p>
              </section>
              <section>
                <h2>Who is it for?</h2>
                <p>This free tool is for U.S.-based businesses including:</p>
                <ul>
                  <li>Nonprofits</li>
                  <li>Veteran's organizations</li>
                  <li>Tribal business concerns</li>
                  <li>Sole proprietorships</li>
                  <li>Self-employed individuals</li>
                  <li>Independent contractors</li>
                </ul>
                <p>
                  If you have more than 500 employees, your business may still
                  qualify for certain loans. Visit the{" "}
                  <a
                    href="https://www.sba.gov/document/support--table-size-standards"
                    target="_blank"
                  >
                    Small Business Administration size standards
                  </a>{" "}
                  to look up the guidelines for your industry.
                </p>
                <Link to="/questions">
                  <button className="usa-button">
                    Take our 10-minute questionnaire
                  </button>
                </Link>
              </section>
              <section id="government-partners">
                <h2>Government partners</h2>
                <p>
                  This eligibility checker screens for federal loans, and
                  California and New Jersey state loans. We plan on adding other
                  state programs.
                </p>
                <p>
                  If you’re from a government agency and would like to include
                  your state’s programs, please contact the{" "}
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdwDvDnFd2dOyuMKuhjn0uUy5uw4Vf5lnVZQDH0obslTCrOg/viewform"
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
