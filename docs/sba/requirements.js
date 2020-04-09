var nonprofit_q = "q11_has_501_designation";

var requirements = {
  eidl: { // SBA EIDL
    required_yes: ["in_usa", "since_february", "disclaimer", "illegal_business_eidl", "illegal_business_SBA"],
    required_no: []
  },
  eidl_advance: { // SBA EIDL advance
    required_yes: ["in_usa", "since_february", "disclaimer", "illegal_business_SBA", "illegal_business_eidl"],
    required_no: []
  },
  ppp: { // Paycheck Protection Program
    required_yes: ["in_usa", "for_workers", "current_economy", "disclaimer", "since_february", "fewer_than_500"],
    required_no: [],
    eval: {
    }
  },
  sba_7a: { // standard SBA 7(a)
    required_yes: ["in_usa", "fico", "no_other_lenders", "disclaimer"],
    required_no: ["illegal_business_SBA"],
    eval: {
      "revenue_2019": function (revenue) {
        revenue = parseNumber(revenue);
        return revenue < 5000000;
      }
    }
  },
  sba_debt: { // Forgiving SBA loans
    required_yes: ["in_usa", "existing_sba", "disclaimer"],
    required_no: []
  }
};
