import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "./form-style.scss";
import "./new_results.scss";

const PastPrograms: React.FC = () => {

  return (
    <div className="expired-container">
      <h2 className="title">
        Programs no longer accepting applications
      </h2>
      <p>
        <strong>State Program</strong>
      </p>
      <p>
      As of April 27, 2020 the state program is unable to accept new applications for COVID-19 related assistance at this time.
      </p>
    </div>
              
  );
};

export default PastPrograms;