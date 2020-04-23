import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./header.css";
import "./footer.css";
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
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Covid loan tool
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#government-partners">
                  Government Partners
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ppp-loans">
                  PPP Loans
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section className="blue-background hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Understand Covid-19 loan options for small business owners
                </h2>
                <p>
                  Use this tool to quickly figure out which federal and state
                  loans programs you qualify for and get directed to clear next
                  steps.
                </p>
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                    <b>Fast, easy & step-by-step</b> -- Takes less than ten
                    minutes
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                    <b>Loan options explained</b> -- Narrow down your options
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-arrow-circle-right"></i>
                    </span>
                    <b>Clear next steps</b> -- You’ll know what to do next
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 offset-sm-1 hero-buttons">
                <div className="row">
                  <div className="col-12">
                    <Link className="btn btn-danger" to="/questionnaire">
                      Check my loan options
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <a className="btn btn-outline-light" href="#what-we-do">
                      Learn more
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="btn btn-outline-light"
                      href="#government-partners"
                    >
                      Gov't partners
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <aside>
                      *The eligibility quiz takes approximately 10 minutes
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grey-background" id="what-we-do">
          <div className="container cta-container">
            <div className="row grey-background text-center">
              <div className="col-sm-12">
                <h2>What we help you understand</h2>
              </div>
              <div className="col-sm-4">
                <h3>CARES Act</h3>
                <p>
                  The Covid-19 stimulus is the largest ever in American history.
                  More than $350 billion has been allocated to support small
                  business.
                </p>
              </div>
              <div className="col-sm-4">
                <h3>So many options</h3>
                <p>
                  There are numerous federal and state loan options available.
                  We help you figure out which to apply for.
                </p>
              </div>
              <div className="col-sm-4">
                <h3>Conflicting information</h3>
                <p>
                  We’ve done the research. You can depend on specific, correct,
                  and actionable information.
                </p>
              </div>
              <Link className="btn btn-danger" to="/questionnaire">
                Check my loan options
              </Link>
            </div>
          </div>
        </section>

        <section id="who-we-are">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-sm-4">
                <div className="card shadow stats">
                  <h3>76,834</h3>
                  <p>
                    Small business owners have used this tool to learn about
                    their options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grey-background" id="government-partners">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <h3>Government office in need of assistance?</h3>
              </div>
              <div className="col-sm-4">
                <a
                  className="btn btn-outline-dark"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfdwDvDnFd2dOyuMKuhjn0uUy5uw4Vf5lnVZQDH0obslTCrOg/viewform"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="blue-background">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h3>
                  This site is brought to you by U.S. Digital Response, a
                  volunteer-run, non-partisan effort to assist the U.S.
                  government.
                </h3>
              </div>
              <div className="col-sm-4">
                <p>
                  To learn more about USDR or volunteer yourself, please visit
                  the{" "}
                  <a target="_blank" href="https://www.usdigitalresponse.org/">
                    USDR site
                  </a>
                  .
                </p>
                <p>
                  If you have feedback or questions about this website, we’d
                  love to hear from you. Send use a message on{" "}
                  <a href="mailto:info@usdigitalresponse.org">email</a> or{" "}
                  <a target="_blank" href="https://twitter.com/USDResponse">
                    Twitter
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="no-print">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <p>
                <b>
                  COVID-19 Loan Eligibility Wizard for U.S. Small Business
                  Owners
                </b>
              </p>
              <p>
                The purpose of this website is to provide small business owners
                free resources that they can use to acquire emergency financing.
              </p>
              <p>
                Brought to you by U.S. Digital Response, a volunteer-run,
                non-partisan effort to help federal, state, and local government
                with technology, data, design, operations, communications,
                project management, and more during the COVID-19 crisis. We
                provide free assistance to all government entities across the
                country.
              </p>
            </div>
            <div className="col-sm-3 offset-sm-1">
              <p>
                <b>Contact us</b>
              </p>
              <p>
                <a href="mailto:info@usdigitalresponse.org">Email</a>
              </p>
              <p>
                <a target="_blank" href="https://twitter.com/USDResponse">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
