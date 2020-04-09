var language_defaults = {
  en: {
    yes_text: "Yes",
    no_text: "No",
    skip: "Skip",
    not_sure: "Not Sure",
    examples: "Examples",
    enter: "Enter"
  },
  es: {
    yes_text: "Sí",
    no_text: "No",
    skip: "Omitir",
    not_sure: "No estoy seguro",
    examples: "Ejemplos",
    enter: "Ingresar"
  }
};

var questions = {
  "disclaimer": {
    html: "<strong>Disclaimer for Business Support Eligibility Wizard</strong> \
    <p> \
      US Digital Response is offering this screening tool \
      that lists emergency assistance programs that you may decide to consider based \
      upon information you provide about your organization. \
    </p> \
    <p> \
      The Eligibility Wizard will provide suggestions on how to apply for \
      benefits, but cannot guarantee eligibility and does not reserve any funding \
      or a place in any application queue. The administering agency \
      will determine all eligibility requirements upon your submission of an \
      application. \
    </p>",
    hard_pass: false, // if saying no to agreement
    yes_text: "Agree",
    no_text: "Cancel"
  },

  "Basic Information": {
    header: true,
    es: "Información básica"
  },

  "since_february": {
    html: "<p> \
      Has your business been in operation since <strong>February 15</strong>, 2020? \
    </p>",
    // hard_pass: false // if the business is too recent or inactive
  },

  "business_type": {
    html: "<p>Which type <strong>best describes</strong> your business?</p>",
    select: {
      options: ["Independent Contractor", "Self Employed", "Non-Profit - 501(c)(3)",
      "For-Profit Small Business", "Veterans Organization - 501(c)(19)",
      "Tribal"]
    }
  },

  "Physical Location": {
    header: true,
    es: "Ubicación fisica"
  },
  "in_usa": {
    hard_pass: false, // if saying not in USA
    html: "<p> \
      Is your organization registered to do business in the United States or its territories? \
    </p>"
  },

  "Business Size": {
    header: true,
    es: "Tamaño del negocio"
  },

  "existing_sba": {
    html: "<p>Does your organization have any non-disaster SBA loans, in particular 7(a), 504, and/or microloans?</p>"
  },

  "Revenue": {
    header: true,
    es: "Ingresos"
  },
  "revenue_2019": {
    html: "<p> \
      Please estimate your business' annual revenue for the year of 2019: \
    </p>",
    input: {
      name: "2019_revenue",
      // label: "Total number of FTEs",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },

  "Loans and Guarantees": {
    header: true,
    es: "Préstamos y garantías"
  },

  "fico": {
    html: "<p> \
      Do you, another owner, or your business have a minimum FICO score of at least 600? \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Omitir"
    }
  },

  "Other": {
    header: true,
    es: "Otras"
  },

  "current_economy": {
    html: "<p>Does current economic uncertainty make the loan necessary to support your ongoing operations?</p>",
  },

  "for_workers": {
    html: "<p>Will the funds be used for the following purposes:</p> \
      <ul> \
        <li>retain workers and maintain payroll</li> \
        <li>to make mortgage, lease, and utility payments</li> \
      </ul>"
  },

  "paperwork": {
    html: "<p>Are you able to provide documentation that verifies the number of full-time equivalent employees on payroll and the dollar amounts of payroll costs, covered mortgage interest payments, covered rent payments, and covered utilities.</p>"
  },

  "no_other_lenders": {
    html: "<p>Has the business owner tried and failed to get funds from other financial lenders? (i.e. Banks and credit unions, short term business loans, personal loans etc.)</p>"
  },

  "Business Types": {
    header: true
  },

  "illegal_business_SBA": {
    // hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Confim your business is <strong>NOT</strong> any of the following: \
      <span class=\"badge badge-success\">Federal SBA Programs</span> \
    </p> \
    <ul> \
      <li>Related to gambling or gaming activities</li> \
      <li>Agricultural Enterprises (i.e. the primary activity of the business, including its affiliates, is \
        as \
        defined in Section 18(b)(1) of the Small Business Act)</li> \
      <li>Religious organizations</li> \
      <li>Charitable organizations</li> \
      <li>Businesses considered hobbies</li> \
      <li>Government-owned concerns</li> \
      <li>Real estate developers - establishments primarily engaged in subdividing real property into lots \
        and \
        developing it for resale on their own account</li> \
    </ul>",
    confirm_only: true,
    yes_text: "Confirm"
  },
  "illegal_business_eidl": {
    html: "<p>Can you confirm that</p>\
    <ul> \
    <li>The organization is <strong>not</strong> engaged in any illegal activity (as defined by Federal guidelines).</li> \
    <li>No principal of the organization with a 50 percent or greater ownership interest is more than sixty (60) days delinquent on child support obligations.</li> \
    <li>The organization does not present live performances of a prurient sexual nature or derive directly or indirectly more than de minimis gross revenue through the sale of products or services, or the presentation of any depictions or displays, of a sexual nature.</li> \
    <li>The organization is not in the business of lobbying</li> \
    <li>The organization cannot be a state, local, or municipal government entity and cannot be a member of Congress.</li> \
    </ul>",
    confirm_only: true,
    yes_text: "Confirm"
  }
};




if (typeof module !== "undefined") {
  module.exports = {
    language_defaults: language_defaults,
    questions: questions
  };
}
