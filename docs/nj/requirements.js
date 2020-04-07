var nonprofit_q = "q11_has_501_designation";

var requirements = {
  eag: { // Emergency Assistance Grant
    required_yes: [
      "q1_is_non_profit_reg_in_nj", "q2_physical_location_in_nj", "q12_is_specific_industry",
      "q16_has_tax_returns", "q17_in_good_standing_with_nj_taxes", "q20_will_not_layoff",
      "q21_has_covid_impact", "q22_has_material_need", "q23_in_good_standing_with_nj_dept_labor",
      "q0_accept_disclaimer"],
    required_no: ["q3_is_home_based", "q14_is_prohibited_type"],
    eval: {
      "q8_number_of_fte": function (fte) {
        fte = parseNumber(fte);
        return fte >= 1 && fte <= 10;
      },
      "q11_has_501_designation": function (val) {
        return (val === true) || (answers[nonprofit_q] === false);
      },
      "q18_has_acceptable_fico": function (val) {
        return (val === true) || (val === -1); // yes or not sure
      }
    }
  },
  eawcl: { // Emergency Assistance 0% Working Capital
    required_yes: [
      "q1_is_non_profit_reg_in_nj", "q2_physical_location_in_nj",
      "q7_in_operation_more_than_year", "q16_has_tax_returns", "q17_in_good_standing_with_nj_taxes",
      "q20_will_not_layoff", "q21_has_covid_impact", "q22_has_material_need",
      "q23_in_good_standing_with_nj_dept_labor", "q0_accept_disclaimer"],
    required_no: ["q3_is_home_based", "q14_is_prohibited_type"],
    eval: {
      "q9_annual_revenue_2019": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 5000000;
      },
      "q11_has_501_designation": function (val) {
        return (val === true) || (answers[nonprofit_q] === false);
      },
      "q18_has_acceptable_fico": function (val) {
        return (val === true) || (val === -1); // yes or not sure
      },
      "q19_personal_guaruntee": function (val) {
        return (val === true) || (answers[nonprofit_q] === true);
      }
    }
  },
  guarantee: { // Emergency Assistance Guarantee
    required_yes: [
      "q1_is_non_profit_reg_in_nj", "q2_physical_location_in_nj", "q7_in_operation_more_than_year",
      "q16_has_tax_returns", "q17_in_good_standing_with_nj_taxes", "q20_will_not_layoff", "q21_has_covid_impact",
      "q22_has_material_need", "q23_in_good_standing_with_nj_dept_labor", "q0_accept_disclaimer"],
    required_no: ["q3_is_home_based", "q14_is_prohibited_type"],
    eval: {
      "q9_annual_revenue_2019": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 5000000;
      },
      "q11_has_501_designation": function (val) {
        return (val === true) || (answers[nonprofit_q] === false);
      },
      "q18_has_acceptable_fico": function (val) {
        return (val === true) || (val === -1); // yes or not sure
      },
      "q19_personal_guaruntee": function (val) {
        return (val === true) || (answers[nonprofit_q] === true);
      }
    }
  },
  egp: { // Entrepreneur Guarantee
    required_yes: [
      "q1_is_non_profit_reg_in_nj", "q4_more_than_50pct_empl_in_nj", "q5_primary_location_in_nj",
      "q6", "q13_is_specific_industry", "q17_in_good_standing_with_nj_taxes",
      "q23_in_good_standing_with_nj_dept_labor", "q0_accept_disclaimer"],
    required_no: ["q14_is_prohibited_type"],
    eval: {
      "q8_number_of_fte": function (fte) {
        fte = parseNumber(fte);
        return fte < 25;
      },
      "q10_annual_revenue_12mo_trailing": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 5000000;
      }
    }
  },
  eidl: { // SBA EIDL
    required_yes: ["q6", "q7_in_operation_more_than_year", "q0_accept_disclaimer"],
    required_no: ["q3_is_home_based", "q15_is_prohibited_type_2"]
  },
  frelief: { // NJ EDA relief
    required_yes: ["q0_relationship_with_njeda", "q0_accept_disclaimer"]
  },
  cdfi: {
    required_yes: ["q0_accept_disclaimer"],
    eval: {
      "q8_number_of_fte": function (fte) {
        fte = parseNumber(fte);
        return fte < 20;
      },
      "q9_annual_revenue_2019": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 1000000;
      },
      "q10_annual_revenue_12mo_trailing": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 1000000;
      }
    }
  },
  bank: {
    required_yes: ["q0_accept_disclaimer"],
    eval: {
      "q8_number_of_fte": function (fte) {
        fte = parseNumber(fte);
        return fte < 20;
      },
      "q9_annual_revenue_2019": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue >= 100000;
      },
      "q10_annual_revenue_12mo_trailing": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue >= 100000;
      }
    }
  }
};
