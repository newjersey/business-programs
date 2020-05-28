if (typeof console === "undefined") {
  console = {
    log: function(){}
  }
}

var language_defaults = {
  en: {
    yes_text: "Yes",
    no_text: "No",
    skip: "Skip",
    not_sure: "Not Sure",
    examples: "Examples",
    enter: "Enter",
    description: "Description",
    uses: "Eligible uses",
    funding: "Available Funding",
    availability: "Availability",
    additional_financing: null,
    resources: "Resources",
    learn_more: "Learn more here"
  },
  es: {
    yes_text: "Sí",
    no_text: "No",
    skip: "Omitir",
    not_sure: "No estoy seguro",
    examples: "Ejemplos",
    enter: "Ingresar",
    description: "Descripción",
    uses: "Usos elegibles",
    funding: "Fondos disponibles",
    availability: "Disponibilidad",
    learn_more: "Obtenga más información aquí",
    additional_financing: "Las opciones de financiación adicionales para las que puede ser elegible son las siguientes:",
    resources: "Recursos"
  }
};

var form_questions = {
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
      html: "<strong>Descargo de responsabilidad de NJEDA</strong>: \
        <p>Como cortesía, NJEDA ofrece esta herramienta de evaluación (el \
          “Asistente de Eligibilidad”) que enumera los programas de asistencia para emergencias que \
          usted podría considerar, teniendo en cuenta la información que proporciona sobre su \
          organización. \
        </p> \
        <p> \
          El Asistente de Elegibilidad no aprueba ni rechaza la elegibilidad para los programas, \
          tampoco reserva fondos ni un lugar en ninguna lista de espera de solicitudes. \
          Es responsabilidad de su organización evaluar de manera completa su elegibilidad para \
          cualquier programa de asistencia estatal o federal. Las especificaciones completas de \
          cada programa de asistencia para emergencias del estado se encuentran en el Centro de \
           Información para Empresas sobre la COVID: \
           <a href=\"https://cv.business.nj.gov\">https://cv.business.nj.gov</a> \
           . Si tiene más preguntas, comuníquese con ellos a través de la función de chat de ese sitio web (en este momento, solo disponible en inglés). \
        </p> \
        <p> \
          Si desea presentar una solicitud para el programa que se detalla a continuación, \
          debe hacerlo a través de la agencia administradora correspondiente. La agencia \
          administradora determinará todos los requisitos de elegibilidad en el momento en que \
          usted envíe la solicitud a esa agencia para el respectivo programa. \
        </p>"
    }
  },

  "Basic Information": {
    header: true,
    es: "Información básica"
  },
  "q1": {
    html: "<p> \
      Is your business/non-profit registered to do business in New Jersey? \
    </p>",
    yes_hides: ["not_registered_nj"],
    es: {
      html: "<p>¿Está registrada su empresa/organización sin fines de lucro para \
        hacer negocios en New Jersey?</p>"
    }
  },
  "q201": {
    classes: "not_registered_nj",
    html: "<p> \
      Is your business/non-profit registered to do business in the \
      United States or its territories? \
    </p>",
    hard_pass: false,
    es: {
      html: "<p>¿Está registrada su empresa/organización sin fines de lucro para \
        hacer negocios en los Estados Unidos o en sus territorios?</p>"
    }
  },
  "q110": {
    html: "<p> \
      Is your organization for-profit or not-for-profit? \
    </p>",
    yes_text: "For-profit",
    no_text: "Not-for-profit",
    yes_hides: ["non-profit"],
    es: {
      html: "<p>¿Es la suya una organización con fines de lucro o sin fines de lucro?</p>"
    }
  },
  "q11": {
    classes: "non-profit",
    html: "<span class=\"badge badge-success\">NJ State Programs</span> \
    <p> \
      Does your not-for-profit have one of the following designations: 501(c)(3), 501(c)(4), 501(c)(7)? \
    </p>",
    yes_hides: ["for-profit"],
    es: {
      html: "<p>¿Tiene su organización sin fines de lucro una de las siguientes designaciones: 501(c)(3), 501(c)(4), 501(c)(7)?</p>"
    }
  },
  "q202": {
    classes: "non-profit",
    html: "<span class=\"badge badge-success\">Federal SBA Programs</span> \
    <p> \
      Does your organization have one of the following designations: 501(c)(3), 501(c)(19)? \
    </p>",
    es: {
      html: "<p>¿Tiene su organización una de las siguientes designaciones: 501(c)(3), 501(c)(19)?</p>"
    }
  },
  "q0": {
    html: "<p> \
      Does your organization have an existing financial relationship \
      with NJEDA, such as a loan, grant, or incentive agreement? \
    </p>",
    es: {
      html: "<p>¿Tiene su organización una relación financiera existente con NJEDA, por ejemplo un préstamo, un acuerdo de incentivo, o Emergency Assistance Grant?</p>"
    }
  },
  "q301": {
    html: "<p> \
      Did your organization receive funding under Phase 1 of the Small Business Emergency Grant Program? \
    </p>",
    es: {
      html: "<p>Recibió su organización fondos bajo Phase 1 del Small Business Emergency Grant Program?</p>"
    }
  },
  "q203": {
    html: "<p> \
      Does your organization have any non-disaster SBA loans, in particular 7(a), 504, and/or microloans? \
    </p>",
    es: {
      html: "<p>¿Tiene su organización algún préstamo no relacionado con desastres de la Small Business Administration, en particular préstamos 7(a), 504, o microloans?</p>"
    }
  },
  "q7": {
    html: "<p> \
      Has your business been in operation for one year or more? \
    </p>",
    yes_hides: ["newbie"],
    es: {
      html: "<p>¿Ha estado su empresa en funcionamiento durante un año o más?</p>"
    }
  },
  "q204": {
    classes: "newbie",
    html: "<p> \
      Has your business been in operation since February 15, 2020? \
    </p>",
    es: {
      html: "<p>¿Ha estado su empresa en funcionamiento desde el 15 de febrero de 2020?</p>"
    }
  },

  "Physical Location": {
    header: true,
    es: "Ubicación física"
  },
  "q2": {
    html: "<p> \
      Does your organization have a physical commercial location in the State of New Jersey (e.g., a \
      a physical-retail store, a production facility, a \
      warehouse, a home office, etc.)? \
    </p>",
    yes_hides: ["not_in_nj"],
    no_hides: ["physical_nj"],
    es: {
      html: "<p>¿Tiene su organización una ubicación comercial física \
        en el estado de New Jersey (por ejemplo, una tienda minorista física, \
          una planta de producción, \
          un almacén, una oficina en el hogar, etc.)?</p>"
    }
  },
  "q3": {
    html: "<p> \
      Is your business home-based? \
    </p>",
    yes_hides: ["detail_qs"],
    es: {
      html: "<p>¿Maneja su negocio desde su hogar?</p>"
    }
  },

  "Industry": {
    header: true,
    es: "Industria"
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
      html: "<p>¿Está clasificada su organización en una de las siguientes industrias?</p>\
        <ul> \
          <li>Tecnología</li> \
          <li>Ciencias biológicas</li> \
          <li>Energía no contaminante</li> \
          <li>Energía eólica marina</li> \
          <li>Transporte y logística avanzados (no incluye la logística tradicional, como transporte en camiones, mayorista o almacenamiento)</li> \
          <li>Fabricación avanzada</li> \
          <li>Servicios financieros y profesionales</li> \
          <li>Alimentos y bebidas no minoristas (no incluye restaurantes, supermercados, empresas de servicios gastronómicos u otras tiendas minoristas de alimentos preparados o no preparados)</li> \
          <li>Cine y medios digitales</li> \
        </ul>"
    }
  },

  "Business Size": {
    header: true,
    es: "Tamaño de la empresa"
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
      html: "<p>¿Con cuántos empleados equivalentes de tiempo completo (full time equivalent, FTE) W-2 cuenta su empresa?</p> \
        <ul> \
          <li>Cuente un FTE por cada empleado de tiempo completo.</li> \
          <li>Solo considérese a usted mismo como un FTE si se considera un empleado W-2 de la empresa.</li> \
          <li>Para cada empleado W-2 de tiempo parcial, calcule la cantidad de horas que trabaja por semana, divida esa cantidad por 35, y esa es la estimación fraccional de FTE para ese empleado.</li> \
          <li>No incluya a los empleados con formulario 1099 en este cálculo. </li> \
        </ul>",
      input: {
        label: "Cantidad total de FTE"
      },
      skippable: "Omitir"
    }
  },
  "q4": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Does your business have <strong>a minimum of 50% of employees in \
        New Jersey</strong>, as reported on your NJ WR-30 at year end 2019? \
    </p>",
    es: {
      html: "<p>¿Tiene su empresa, <strong>como mínimo, el 50 % de sus empleados en New Jersey</strong>, según lo informado en su NJ WR-30 a fines de 2019?</p>"
    }
  },
  "q5": {
    classes: "physical_nj entrepreneur",
    html: "<p> \
      Is your organization's \
      <strong>primary location / corporate headquarters in New Jersey</strong>, \
      including at least one C-suite member with a \
      principal office in New Jersey? \
    </p>",
    es: {
      html: "<p>¿Se encuentran <strong>las instalaciones principales/la sede corporativa de \
          su organización en New Jersey</strong>, incluido, al menos, un miembro de la alta \
          dirección con una oficina principal en New Jersey?</p>"
    }
  },

  "Revenue": {
    header: true,
    es: "Ingresos"
  },
  "q9": {
    html: "<p> \
      Please estimate your business' annual revenue for the year of 2019: \
    </p>",
    input: {
      name: "2019_revenue",
      // label: "Total number of FTEs",
      examples: "$50000; 3,000,000"
    },
    skippable: true,
    es: {
      html: "<p>Estime los ingresos anuales de su empresa para el año 2019.</p>",
      skippable: "Omitir"
    }
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
    skippable: true,
    es: {
      html: "<p>Estime los ingresos de los últimos 12 meses de su empresa, al 9 de marzo de 2020.</p>",
      skippable: "Omitir"
    }
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
    </p>",
    es: {
      html: "<p>¿Tiene estados financieros preparados por un contador público certificado, por la administración o copias archivadas de las declaraciones de impuestos de la empresa?</p>"
    }
  },
  "q18": {
    html: "<p> \
      Do you, another owner, or your business have a minimum FICO score of at least 600? \
    </p>",
    skippable: "Not Sure",
    es: {
      html: "<p>¿Tiene usted, otro propietario o su empresa un puntaje de FICO (Fair Isaac Corporation) mínimo de al menos 600?</p>",
      skippable: "No estoy seguro"
    }
  },
  "q19": {
    classes: "for-profit",
    html: "<p> \
      If you are a for-profit business, would all owners with more than 10% ownership in the company be \
      willing to provide \
      personal guarantees for any emergency loans? \
    </p>",
    es: {
      html: "<p>Si usted posee una empresa con fines de lucro, ¿estarían dispuestos todos los propietarios que cuenten con más del 10 % de la titularidad de la empresa a ofrecer garantías personales para cualquier préstamo de emergencia?</p>"
    }
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
      html: "<p>¿Puede certificar que está en regla con el New Jersey Department of Taxation? \
        <br/> \
        <em>Nota: Es posible que se le solicite proporcionar un Tax Clearance Certificate para ciertos programas de asistencia para emergencias.</em> \
      </p>",
      skippable: "No estoy seguro"
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
      html: "<p>¿Está en regla con el New Jersey Department of Labor? \
        <br/> \
        <em>Nota: Se le exigirá estar en regla con el New Jersey Department of Labor \
          para tener derecho a recibir asistencia estatal. Esto significa no tener impuestos \
          laborales o cargos impagos o infracciones pendientes relacionadas con salarios \
          y horas de los empleados. </em> \
        </p>",
      skippable: "No estoy seguro"
    }
  },

  "q205": {
    html: "<p>Have you or another business owner tried and failed to get funds from other financial lenders? \
      (i.e. Banks and credit unions, short term business loans, personal loans etc.)</p>",
    es: {
      html: "<p>¿Ha intentado usted o otro dueño de la empresa, sin éxito, obtener fondos de otros prestamistas financieros? (Es decir, bancos y cooperativas de crédito, préstamos comerciales a corto plazo, préstamos personales, etc.).</p>"
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
    </p>",
    es: {
      html: "<p> \
        ¿Puede usted, su director ejecutivo o una persona en un puesto equivalente garantizar lo siguiente? \
        <br/> \
        La organización hará todo lo posible para no despedir ni suspender a ninguna persona desde el momento en el que se envía la solicitud hasta el final del período del brote de COVID-19. Las empresas que ya hayan despedido o suspendido a trabajadores deben hacer todo lo que esté en sus manos para volver a contratarlos lo antes posible. \
      </p>"
    }
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
    </p>",
    es: {
      html: "<p> \
        ¿Puede usted, su director ejecutivo o una persona en un puesto equivalente garantizar lo siguiente? \
        <br/> \
        Su empresa, en este momento, tiene <strong>una necesidad financiera sustancial que no puede superar sin el otorgamiento de fondos de ayuda de emergencia</strong> (por ejemplo, no tiene reservas de efectivo significativas que puedan respaldar sus operaciones durante este período de interrupción económica). \
      </p>"
    }
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
    </p>",
    es: {
      html: "<p> \
        ¿Puede usted, su director ejecutivo o una persona en un puesto equivalente garantizar lo siguiente? \
        <br/> \
        <strong>Su empresa se ha visto afectada de manera negativa por el brote de COVID-19</strong>. (“Afectada de manera negativa” se refiere a una empresa que ha cerrado de manera temporal, que se ha visto obligada a reducir las horas, que ha tenido una caída en sus ingresos de al menos un 20 %, que se ha visto sumamente afectada porque sus empleados no pueden trabajar debido al brote, o que tiene un cadena de suministro que se ha visto sumamente afectada y, por lo tanto, se ha retardado la producción a nivel empresarial). \
      </p>"
    }
  },

  "q206": {
    html: "<p> \
      Are you, your chief executive officer or the equivalent able to certify that \
      <span class=\"badge badge-success\">Federal SBA Programs</span> \
    </p> \
    <ul> \
      <li>The organization is not engaged in any illegal activity (as defined by Federal guidelines).</li> \
      <li>No principal of the organization with a 50 percent or greater ownership interest is more than sixty (60) days delinquent on child support obligations.</li> \
      <li>The organization does not present live performances of a prurient sexual nature or derive directly or indirectly more than de minimis gross revenue through the sale of products or services, or the presentation of any depictions or displays, of a prurient sexual nature.</li> \
      <li>The organization is not in the business of lobbying</li> \
      <li>The organization cannot be a state, local, or municipal government entity and cannot be a member of Congress.</li> \
    </ul>",
    skippable: "Skip",
    es: {
      html: "<p> \
        ¿Puede usted, su director ejecutivo o una persona en un puesto equivalente garantizar lo siguiente? \
        <span class=\"badge badge-success\">Federal SBA Programs</span> \
      </p> \
      <ul> \
        <li>La organización no participa en ninguna actividad ilegal (como se define en las pautas federales).</li> \
        <li>Ningún director de la organización con una participación accionaria del 50 % o más tiene más de sesenta (60) días de atraso en obligaciones de manutención infantil.</li> \
        <li>La organización no presenta actuaciones en vivo de una naturaleza sexual lasciva ni obtiene de manera directa o indirecta más del ingreso bruto mínimo a través de la venta de productos o servicios, o la presentación de cualquier representación o exhibición de una naturaleza sexual lasciva.</li> \
        <li>La organización no se dedica al cabildeo.</li> \
        <li>La organización no puede ser una entidad gubernamental estatal, local o municipal y no puede ser miembro del Congreso.</li> \
      </ul>",
      skippable: "Omitir"
    }
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
    </ul>",
    es: {
      html: "<p>¿Se considera su empresa en una de las siguientes categorías?<br/> \
      (Esta pregunta es para determinar la elegibilidad para programas estatales)</p> \
      <ul> \
        <li>Relacionada con actividades de apuestas o juego.</li> \
        <li>Relacionada con la provisión de actividades, servicios, productos o materiales “para adultos” (es decir, pornográficos, indecentes, lascivos, obscenos) (incluidas actuaciones desnudas o semidesnudas o la venta de recursos o dispositivos sexuales). </li> \
        <li>Una venta por quiebra, subasta, remate, “pérdida del contrato de arrendamiento” o “cierre de la actividad comercial”, o una venta similar. </li> \
        <li>Un comercio itinerante. </li> \
        <li>Una venta de árboles de Navidad u otro almacenamiento exterior. </li> \
        <li>Cualquier otra actividad que resulte perjudicial.</li> \
        <li>Ilegal, según las leyes del estado de New Jersey.</li> \
      </ul>"
    }
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
      <li>Businesses considered hobbies</li> \
      <li>Government-owned concerns</li> \
      <li>Real estate developers - establishments primarily engaged in subdividing real property into lots \
        and \
        developing it for resale on their own account</li> \
    </ul>",
    es: {
      html: "<p>¿Se considera su empresa en una de las siguientes categorías?<br/> \
      (Esta pregunta es para determinar la elegibilidad para los programas de la Federal Small Business Administration) \
      </p> \
      <ul> \
        <li>Relacionada con actividades de apuestas o juego.</li> \
        <li>Empresas agrícolas (es decir, la actividad principal de la empresa, incluidas sus filiales, es la definida en la Sección 18(b)(1) de la Small Business Act)</li> \
        <li>Negocios considerados como pasatiempos</li> \
        <li>Negocios propiedad del gobierno</li> \
        <li>Promotores inmobiliarios: establecimientos dedicados principalmente a subdividir bienes inmuebles en lotes y desarrollarlos para revenderlos por cuenta propia</li> \
      </ul>"
    }
  }
};
