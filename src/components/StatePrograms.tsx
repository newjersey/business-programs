// @ts-nocheck

import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./form-style.scss";
import "./new_results.scss";

const StatePrograms: React.FC = (props) => {

  const stateProgramList = props.eligibleStatePrograms.map((program, i) => {
    return (
      <div className={i === props.eligibleStatePrograms.length - 1 ? "loan-container-last" : "loan-container"}>
        <a name={program.id}></a>
        <label className="top-label">
          {program.status}
        </label>
        <h2 className="title">
          {program.name}
        </h2>
        <p className="loan-description">
          <strong>What is it?</strong>
        </p>
        <p>
          {program.what}
        </p>
        <p className="loan-description">
          <strong>Who is it for?</strong>
        </p>
        {
          program.id === 'hawaii_community' ?
            (<p>Small businesses located in Hawaii that have been turned down by at least one financial institution. The loan must result in a community-based economic development outcome such as: 
              <ul>
                <li>Increase in jobs in an economically challenged community </li>
                <li>Increase in local sourcing of inputs to a manufactured product </li>
                <li>Addition of needed service or business to an economically challenged community and </li>
                <li>Other community economic benefits of business growth.</li>
              </ul>
            </p>)
            :
            <p>{program.who}</p>
        }
        <button
        className="usa-button eidl-cta"
        data-ga-label={program.id}
        onClick={(e) => {
          e.preventDefault();
          window.open(program.url, '_blank')
          }}
        type="button"
      >
        Apply Now
      </button>
      </div>
    )
  });

  return (
    <div>
      {stateProgramList}
    </div>
  )
};

export default StatePrograms;