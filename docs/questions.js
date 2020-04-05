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
    skip: "Pasar",
    not_sure: "Pasar",
    examples: "Ejemplos",
    enter: "Ingresar su respuesta"
  }
};

var questions = {
  "q42": {
    html: "<strong>NJEDA Disclaimer for Organization Support Eligibility Wizard</strong> \
    <p> \
      As a courtesy, the NJEDA is offering this screening tool (the “Eligibility Wizard”) \
      that lists emergency assistance programs that you may decide to consider based \
      upon information you provide about your organization. \
    </p> \
    <p> \
      To apply for a program, you need to apply through the appropriate administering \
      agency. The Eligibility Wizard will provide suggestions on how to apply for any \
      benefit on this website but cannot guarantee eligibility and does not reserve any funding \
      or a place in any application queue. The administering agency \
      will determine all eligibility requirements upon your submission of an \
      application to that agency for the respective program. \
    </p> \
    <p> \
      The information you share for purposes of this Eligibility Wizard will be \
      anonymous and may be shared with NJ State agencies to improve access to \
      benefits and programs. \
    </p>",
    hard_pass: false, // if saying no to agreement
    yes_text: "Agree",
    no_text: "Cancel",
    es: {
      html: "Ejemplo en español",
      yes_text: "Acordar",
      no_text: "Cancelar"
    }
  },

  "Basic Information": {
    header: true,
    es: "Información básica"
  },
  "q1": {
    hard_pass: false, // if saying no to NJ
    html: "<p> \
      Is your business/non-profit registered to do business in New Jersey? \
    </p>"
  },
  "q110": {
    html: "<p> \
      Is your organization for-profit or not-for-profit? \
    </p>",
    yes_text: "For-profit",
    no_text: "Not-for-profit",
    yes_hides: ["non-profit"],
    es: {
      yes_text: "Con fines de lucro",
      no_text: "Sin ánimo de lucro"
    }
  },
  "q11": {
    classes: "non-profit",
    html: "<p> \
      Does your not-for-profit have one of the following designations: 501(c)(3), 501(c)(4), 501(c)(7)? \
    </p>",
    yes_hides: ["for-profit"]
  },
  "q0": {
    html: "<p> \
      Does your organization have an existing financial relationship \
      with NJEDA, such as a loan or incentive agreement? \
    </p>"
  },
  "q7": {
    html: "<p> \
      Has your business been in operation for one year or more? \
    </p>"
  },

  "Physical Location": {
    header: true,
    es: "Ubicación fisica"
  },
  "q2": {
    html: "<p> \
      Does your organization have a physical commercial location in the State of New Jersey (e.g., a \
      non-homebased office, \
      a physical-retail store, a production facility, a \
      warehouse, etc.)? \
    </p>",
    yes_hides: ["not_in_nj"],
    no_hides: ["physical_nj"]
  },
  "q3": {
    html: "<p> \
      Is your business home-based? \
    </p>",
    yes_hides: ["detail_qs"]
  },

  "Industry": {
    header: true,
    es: "Industria"
  },
  "q12": {
    html: "<p> \
      Is your organization classified in one of the following industries? \
    </p> \
    <ul> \
      <li>Retail</li> \
      <li>Accommodation & food services</li> \
      <li>Arts, entertainment & recreation </li> \
      <li>Other services, such as repair and maintenance of vehicles, machinery, equipment, or products </li> \
      <li>Other services, such as personal services (barbers, cleaners, nail salons, etc.) or laundry</li> \
    </ul> \
    <p>If you are unsure about if you fall into one of the “Other services” categories, please confirm you are \
      in an industry with an industry code that starts with 811 or 812 on this list: \
        <a href=\"https://www.naics.com/six-digit-naics/?code=81\" target=\"_blank\"> \
        https://www.naics.com/six-digit-naics/?code=81</a> \
    </p>",
    no_text: "None of the above",
    es: {
      no_text: "Ninguna de las anteriores"
    }
  },
  "q13": {
    classes: "for-profit",
    html: "<p> \
      Is your organization classified in one of the following industries? \
      <ul> \
        <li>Technology</li> \
        <li>Life Sciences</li> \
        <li>Clean Energy</li> \
        <li>Offshore wind</li> \
        <li>Advanced transportation and logistics (does not include traditional logistics such as trucking, \
          wholesale, or warehousing)</li> \
        <li>Advanced manufacturing</li> \
        <li>Finance and professional services</li> \
        <li>Non-retail food and beverage (does not include restaurants, grocery stores, catering companies \
          or \
          other prepared or unprepared retail food outlets)</li> \
        <li>Film and digital media</li> \
      </ul> \
    </p>",
    no_text: "None of the above",
    no_hides: ["entrepreneur"],
    es: {
      no_text: "Ninguna de las anteriores"
    }
  },

  "Business Size": {
    header: true,
    es: "Tamaño del negocio"
  },

  "q8": {
    html: "<p> \
      How many W-2 full time equivalent (FTE) employees does \
      your business have? \
    </p> \
    <ul> \
      <li>Count 1 FTE for each full-time employee</li> \
      <li>Only count yourself as 1 FTE if you treat yourself as a W-2 employee of the company</li> \
      <li>For each part-time W-2 employee, estimate the number of hours \
        worked per week, divide that number by 35, and that is the \
        fractional FTE estimate for that employee. \
      <li>Do not include 1099 employees in this calculation</li> \
    </ul>",
    input: {
      name: "fte",
      label: "Total number of FTEs",
      examples: "1, 10.5, 15"
    },
    skippable: true,
    es: {
      input: {
        label: "El numero total"
      }
    }
  },
  "q4": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Does your business have <strong>a minimum of 50% of employees in \
        New Jersey</strong>, as reported on your NJ WR-30 at year end 2019? \
    </p>"
  },
  "q5": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Is your organization's \
      <strong>primary location / corporate headquarters in New Jersey</strong>, \
      including at least one C-suite member with a \
      principal office in New Jersey? \
    </p>"
  },

  "Revenue": {
    header: true,
    es: "Ingresos"
  },
  "q9": {
    html: "<p> \
      Please estimate your business' annual revenue for the year of 2019? \
    </p>",
    input: {
      name: "2019_revenue",
      // label: "Total number of FTEs",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },
  "q10": {
    classes: "entrepreneur",
    html: "<p> \
      Please estimate your business' 12-month trailing revenue as of March 9, 2020? \
    </p>",
    input: {
      name: "12mo_revenue",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },

  "Loans and Guarantees": {
    header: true,
    es: "Préstamos y garantías"
  },
  "q16": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      Do you have financial statements that are \
      CPA prepared, management prepared, or filed copies of business tax returns? \
    </p>"
  },
  "q18": {
    html: "<p> \
      Do you, another owner, or your business have a minimum FICO score of at least 600? \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Pasar"
    }
  },
  "q19": {
    classes: "for-profit",
    html: "<p> \
      If you are a for-profit business, would all owners with more than 10% ownership in the company be \
      willing to provide \
      personal guarantees for any emergency loans? \
    </p>"
  },

  "Other": {
    header: true,
    es: "Otras"
  },
  "q17": {
    html: "<p> \
      Are you able to certify that you are in good standing with the \
      New Jersey Department of Taxation? \
      <br /> \
      <em>Note: you may be required to provide a Tax Clearance \
        Certificate for certain emergency assistance programs.</em> \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Pasar"
    }
  },
  "q23": {
    html: "<p> \
      Are you in good standing with the New Jersey Department of Labor? \
      <br /> \
      <em>Note, you will be required to be in good standing with the New Jersey \
        Department of Labor to be eligible for State assistance. This means not \
        having unpaid unemployment holdings, unpaid fees, or outstanding employee \
        wage and hour violations.</em> \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Pasar"
    }
  },

  "q20": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      Are you, your chief executive officer, or equivalent able to certify that: \
      <br /> \
      The organization will make its \
      <strong>best-effort not to furlough or lay off any individuals</strong> \
      from the time of application through the end of the COVID-19 outbreak period; businesses that have \
      already furloughed or laid off workers \
      must <strong>make a best-effort to re-hire those workers as soon as possible</strong>. \
    </p>"
  },
  "q22": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      Are you, your chief executive officer, or equivalent able to certify that: \
      <br /> \
      Your business has \
      <strong>a material financial need that cannot be overcome without the use of emergency relief \
        funds</strong> \
      at this time (e.g., does not have significant cash reserves that can support your operations during \
      this \
      period of economic disruption) \
    </p>"
  },
  "q21": {
    classes: "detail_qs physical_nj",
    html: "<p> \
      Are you, your chief executive officer, or equivalent able to certify that: \
      <br /> \
      <strong>Your business been negatively impacted by the Covid-19 outbreak?</strong> \
      Note: negative impact is defined as a business that has been temporarily shut down, has been required \
      to \
      reduce hours, has had at least a 20% drop in revenue, has been materially impacted by employees who \
      cannot work due to the outbreak, or has a supply chain that has materially been disrupted and \
      therefore \
      slowed firm-level production. \
    </p>"
  },

  "q14": {
    hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Is your business considered one of the following: \
      <span class=\"badge badge-success\">NJ State Programs</span> \
    </p> \
    <ul> \
      <li>Related to gambling or gaming activities</li> \
      <li>Related to the purveyance of “adult” (i.e., pornographic, lewd, prurient, obscene) activities, \
        services, products or materials (including nude or semi-nude performances or the sale of sexual aids \
        or devices);</li> \
      <li>An auction or bankruptcy or fire or “lost-our-lease” or “going-out-of-business” or similar sale; \
      </li> \
      <li>A traveling merchant</li> \
      <li>A Christmas tree sales or other outdoor storage;</li> \
      <li>Any other activity constituting a nuisance</li> \
      <li>Illegal under the laws of the State of New Jersey</li> \
    </ul>"
  },
  "q15": {
    // hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Is your business considered one of the following: \
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
    </ul>"
  }
};

if (module) {
  module.exports = {
    language_defaults: language_defaults,
    questions: questions
  };
}
