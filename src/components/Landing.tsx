import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import "./footer.scss";
import "./index.scss";

function Landing() {
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
                <h1>
                  Find out which COVID-19 loans your business qualifies for.
                </h1>

                <Link to="/questionnaire">
                  <button className="usa-button usa-button--big">
                    Get Started
                  </button>
                </Link>
              </section>
              <section>
                <aside>
                  If you are a government office in need of assistance, please{" "}
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdwDvDnFd2dOyuMKuhjn0uUy5uw4Vf5lnVZQDH0obslTCrOg/viewform"
                  >
                    contact us
                  </a>
                  .
                </aside>
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
                <p>All small business including</p>
                <ul>
                  <li>Nonprofits</li>
                  <li>Veteran's organizations</li>
                  <li>Tribal business concerns</li>
                  <li>Sole proprietorships</li>
                  <li>Self-employed individuals</li>
                  <li>Independent contractors</li>
                </ul>
                <p>
                  If your business has over 500 employees, you should{" "}
                  <Link to="/questionnaire">check to see if you qualify</Link>.
                </p>
                <Link to="/questionnaire">
                  <button className="usa-button">
                    Take our 10-minute questionnaire
                  </button>
                </Link>
              </section>
              <section>
                <h2>Government partners</h2>
                <p>
                  This questionnaire screens for federal loans, as well as state
                  loans from New Jersey. We plan to add more states as soon as
                  possible.
                </p>
                <p>
                  If you work for a government agency and want to include your
                  loan programs in this questionnaire, please{" "}
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfdwDvDnFd2dOyuMKuhjn0uUy5uw4Vf5lnVZQDH0obslTCrOg/viewform"
                  >
                    contact us
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
}

export default Landing;
