// @ts-nocheck

import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./form-style.scss";
import "./new_results.scss";

const allStatePrograms = [
  {
    id: 'ca_small_biz',
    name: 'California Small Business Finance Center',
    what: 'Loan guarantees for small businesses',
    who: 'California small businesses. Loan proceeds can be used for business continuance or to cure "economic injury" as a result of the COVID-19 pandemic.',
    url: 'https://ibank.ca.gov/small-business-finance-center/',
    status: 'Available Now'
  },
  {
    id: 'pitt_elf',
    name: 'Pittsburgh Small Business Emergency Loan Fund',
    what: 'Loans up to $15,000 with 0% interest offered by the Urban Redevelopment Authority.',
    who: 'Small businesses located in Pittsburgh with fewer than 30 full-time employees.',
    url: 'https://www.ura.org/pages/covid-19-small-business-fund',
    status: 'Available Now'
  },
  {
    id: 'pitt_ura',
    name: 'Urban Redevelopment Authority of Pittsburgh Recovery Loan',
    what: 'Loans up to $75,000 with 0% interest for the first year and 2% for the balance of loan term.',
    who: 'Small businesses located in Pittsburgh with fewer than 30 full-time employees.',
    url: 'https://www.ura.org/pages/covid-19-small-business-fund',
    status: 'Available Now'
  },
  {
    id: 'pitt_bridgeway',
    name: 'Bridgeway Capital Response Fund',
    what: 'Connecting small businesses in western Pennsylvania to capital when it is needed most.',
    who: 'Small businesses in western Pennsylvania.',
    url: 'https://www.bridgewaycapital.org/loans-and-modifications/covid-19-response-fund/',
    status: 'Available Now'
  },
  {
    id: 'pitt_kiva',
    name: 'Kiva Pittsburgh Loans',
    what: 'Kiva helps financially excluded and socially impactful entrepreneurs access capital via crowdfunding.',
    who: 'Small businesses located in the surrounding areas around Pittsburgh.',
    url: 'https://www.riversidecenterforinnovation.com/kiva/home',
    status: 'Available Now'
  },
  {
    id: 'pitt_honeycomb',
    name: 'Honeycomb Small Business Relief Loan',
    what: 'Honeycomb Crowdfunded Small Business Relief Loan.',
    who: 'Small businesses located in the surrounding areas around Pittsburgh.',
    url: 'https://www.honeycombcredit.com/relief',
    status: 'Available Now'
  },
  {
    id: 'hawaii_community',
    name: 'Hawaii Community-Based Economic Development Loan',
    what: 'CBED offers micro-loans usually up to $50,000 to eligible small businesses that support economic development in their communities.',
    who: '',
    url: 'https://invest.hawaii.gov/business/cbed/',
    status: 'Available Now'
  },
  {
    id: 'hawaii_small_business',
    name: 'Hawaii Small Business Relief & Recovery Fund',
    what: 'Small Business Relief & Recovery Fund offers a one-time reimbursement for expenses of up to $10,000.',
    who: 'Small businesses who have incurred costs from business interruption due to. Emergency Proclamations or costs to implement safety precautions to prevent the spread of COVID-19. Businesses must have less than 1 million in gross annual revenue and 30 or fewer employees. Businesses must also be located in the City and County of Honolulu.',
    url: 'https://www.oneoahu.org/small-business',
    status: 'Available Now'
  },
  {
    id: 'hawaii_manufacturing',
    name: 'Hawaii Manufacturing Assistance Program',
    what: 'HTDC’s Manufacturing Assistance Program Grant (MAP) offers Hawaii-based manufacturers up to a 20% reimbursement (up to $100,000) on qualified expenses to help Hawaii manufacturers become globally competitive.  Qualifying expenses include: equipment purchases, training, energy efficiency projects, and manufacturing feasibility studies.',
    who: 'Must conduct manufacturing activities in Hawaii and be categorized as NAICS 31, 32, 33.',
    url: 'https://www.htdc.org/money/#map',
    status: 'Available Now'
  },
  {
    id: 'hawaii_malama',
    name: 'Hawaii Malama Business Loan Program',
    what: 'This is the most popular loan the Office of Hawaiian Affairs offers that support Native Hawaiian Business owners with loans between $2,500 to $100,000.',
    who: 'Must be of Native Hawaiian ancestry with a credit score of 600 or higher with an income to debt ratio of no more than 45%.',
    url: 'https://loans.oha.org/business/malama-business/',
    status: 'Available Now'
  },
  {
    id: 'hawaii_hua',
    name: 'Hawaii Hua Kanu Business Loan Program',
    what: 'The Hua Kanu Business Loan Program is available to Native Hawaiians who own established business. Created on July 17, 2013, the low-cost loans are intended to help these small-businesses expand. It is meant to provide them access to credit and capital that will allow them to grow as well as remain financially viable. Loans between $200,000 to $1,000,000.',
    who: 'Principals must be Native Hawaiian and verified by current Office of Hawaiian Affairs Registry Card.',
    url: 'https://loans.oha.org/business/hua-kanu-business-loan/',
    status: 'Available Now'
  }
]

const StatePrograms: React.FC = (props) => {
  console.log(props)
  const allEligiblePrograms = props.eligiblePrograms;
  const elibileStatePrograms = allStatePrograms.filter((stateProgram) => {
    return allEligiblePrograms.includes(stateProgram.id)
  })

  const stateProgramList = elibileStatePrograms.map(program => {
    return (
      <div className="loan-container">
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