// polyfills
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0===n)return!1;var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);for(;u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}});

function parseNumber(num) {
  return Number(
    String(num).replace(/\,|\;|\$|\s/g, '')
  );
}

var nonprofit_q = "q11",
  yearlong_q = "q7",
  nj_business_q = "q1",
  phase1_part = "q301",
  requirements = {
    eag: { // Emergency Assistance Grant (Phase 1)
      required_yes: ["q1", "q2", "q17", "q20", "q21", "q22", "q23", "q42"],
        // q12 no longer part of the form
      required_no: ["q3", "q14"],
      eval: {
        "q8": function (fte) {
          fte = parseNumber(fte);
          return fte >= 1 && fte <= 10;
        },
        "q11": function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        "q18": function (val) {
          return (val === true) || (val === -1); // yes or not sure
        }
      }
    },
    eag2: { // Emergency Assistance Grant (Phase 2)
      required_yes: ["q1", "q17", "q20", "q21", "q22", "q23", "q42", "q204"],
      required_no: ["q14"],
      eval: {
        "q8": function (fte) {
          fte = parseNumber(fte);
          if (answers[phase1_part] === true) {
            // yes, participated in old program
            return fte > 5 && fte <= 25;
          } else {
            return fte > 0 && fte <= 25;
          }
        },
        "q11": function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        }
      }
    },
    eag3: { // Emergency Assistance Grant (Phase 3)
      required_yes: ["q1", "q204", "q2", "q17", "q23", "q20", "q22", "q21"],
      required_no: ["q14"],
      eval: {
        "q8": function(val) {
          var fte = parseNumber(val);
          return fte <= 50;
        }
      }
    },
    eag4: { // Emergency Assistance Grant (Phase 4)
      required_yes: ["q1", "q204", "q2", "q17", "q23", "q20", "q22", "q21"],
      required_no: ["q14"],
      eval: {
        "q8": function(val) {
          var fte = parseNumber(val);
          return fte <= 50;
        }
      }
    },
    eawcl: { // Emergency Assistance 0% Working Capital
      required_yes: ["q1", "q2", "q7", "q16", "q17", "q20", "q21", "q22", "q23", "q42"],
      required_no: ["q3", "q14"],
      eval: {
        "q9": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        },
        "q11": function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        "q18": function (val) {
          return (val === true) || (val === -1); // yes or not sure
        },
        "q19": function (val) {
          return (val === true) || (answers[nonprofit_q] === true);
        }
      }
    },
    guarantee: { // Emergency Assistance Guarantee
      required_yes: ["q1", "q2", "q7", "q16", "q17", "q20", "q21", "q22", "q23", "q42"],
      required_no: ["q3", "q14"],
      eval: {
        "q9": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        },
        "q11": function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        "q18": function (val) {
          return (val === true) || (val === -1); // yes or not sure
        },
        "q19": function (val) {
          return (val === true) || (answers[nonprofit_q] === true);
        }
      }
    },
    emergency_lease: { // Small Business Lease Emergency Assistance Grant Program
      required_yes: ["q201", "q1", "q11", "q2", "q17", "q21"], //, "q401", "q402"],
      required_no: ["q3", "q14"],
      eval: {}
    },
    landlord: { // Small Business Lease Emergency Assistance Grant Program
      required_yes: ["q17", "q501", "q502", "q503", "q504"],
      required_no: ["q505"]
    },
    egp: { // Entrepreneur Guarantee
      required_yes: ["q1", "q4", "q5", "q6", "q13", "q17", "q23", "q42"],
      required_no: ["q14"],
      eval: {
        "q8": function (fte) {
          fte = parseNumber(fte);
          return fte < 25;
        },
        "q10": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        }
      }
    },
    eidl: { // SBA EIDL
      required_yes: ["q6", "q18", "q21", "q42", "q206"],
      required_no: ["q15"],
      eval: {
        "q201": function(val) {
          return (val === true) || (answers[nj_business_q] === true);
        },
        "q204": function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    frelief: { // NJ EDA relief
      required_yes: ["q0", "q42"]
    },
    cdfi: {
      required_yes: ["q42"],
      eval: {
        "q8": function (fte) {
          fte = parseNumber(fte);
          return fte < 20;
        },
        "q9": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 1000000;
        },
        "q10": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 1000000;
        }
      }
    },
    bank: {
      required_yes: ["q42"],
      eval: {
        "q8": function (fte) {
          fte = parseNumber(fte);
          return fte < 20;
        },
        "q9": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue >= 100000;
        },
        "q10": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue >= 100000;
        }
      }
    },
    eidl_advance: {
      required_yes: ["q18", "q21", "q206"],
      required_no: ["q15"],
      eval: {
        "q201": function(val) {
          return (val === true) || (answers[nj_business_q] === true);
        },
        "q204": function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    a7: {
      required_yes: ["q18", "q205"],
      required_no: ["q15"],
      eval: {
        "q9": function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        },
        "q201": function(val) {
          return (val === true) || (answers[nj_business_q] === true);
        }
      }
    },
    ppp: {
      required_yes: ["q20", "q21"],
      required_no: [],
      eval: {
        "q201": function(val) {
          return (val === true) || (answers[nj_business_q] === true);
        },
        "q202": function(val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        "q204": function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    sba_debt: {
      required_yes: ["q203"],
      required_no: [],
      eval: {
        "q201": function(val) {
          return (val === true) || (answers[nj_business_q] === true);
        }
      }
    },
    counseling: {
      required_yes: [],
      required_no: []
    }
  };
var programs = Object.keys(requirements);

var answers = {};

function moveToReport(e) {
  e.preventDefault();
  $("form, .preamble").hide();
  $(".report").show();

  var njeligible = $(".program.eag").css("display")
    + $(".program.eag2").css("display")
    + $(".program.eawcl").css("display")
    + $(".program.guarantee").css("display")
    + $(".program.egp").css("display")
    + $(".program.frelief").css("display");
  if (njeligible.indexOf("block") === -1) {
    // only federal
    $("#report_intro_nj").hide();
    $("#report_intro_sba").show();
    $("#report_continue_sba").hide();
  } else {
    $("#report_intro_nj").show();
    $("#report_intro_sba").hide();
    $("#report_continue_sba").show();
  }

  $(window).scrollTop(0);

  $('li li', '.my_options').each(function(i, el) {
    var $program = $(el);
    var programName = $program.data('program-name');
    var isEligible = !$program.hasClass('no-print');

    window.sendResultToGA(programName, isEligible);
  });

  return false;
}

function viewQs(e) {
  e.preventDefault();
  $(".report").hide();
  $("form, .preamble").show();
  return false;
}

function nextQuestion(currentQuestion) {
  var currentDiv = $(".question")[currentQuestion];
  // $(currentDiv).find(".btn, div, p, li").css({opacity: 0.4});
  // $(currentDiv).find('.btn, input').prop('disabled', true);

  var nextDiv = $(".question")[currentQuestion + 1];
  if (!nextDiv) {
    $("#guide-btn").prop('disabled', false);
  }
  while (
    ($(nextDiv).parent().css("display") === "none")
    ||
    ($(nextDiv).find(".answered").hasClass("already-answered"))
  ) {
    currentQuestion++;
    nextDiv = $(".question")[currentQuestion + 1];
    if (!nextDiv) {
      $("#guide-btn").prop('disabled', false);
      break;
    }
  }

  $(nextDiv).find(".btn, div, p, li").css({ opacity: 1 });
  $(nextDiv).find('.btn, input').prop('disabled', false);
  $(nextDiv).find('.answered').addClass("please-answer");

  programs.forEach(function (pcode) {
    var muteProgram = false,
      program = requirements[pcode];

    (program.required_yes || []).forEach(function (answerToCheck) {
      if (answers[answerToCheck] === false) {
        console.log(pcode + " checks " + answerToCheck + " and sees false instead of true");
        muteProgram = true;
      }
    });

    (program.required_no || []).forEach(function (answerToCheck) {
      if (answers[answerToCheck] === true) {
        console.log(pcode + " checks " + answerToCheck + " and sees true instead of false");
        muteProgram = true;
      }
    });

    var answersToEval = Object.keys(program.eval || {});
    answersToEval.forEach(function (answerToCheck) {
      if ((typeof answers[answerToCheck] !== "undefined")
        && (!program.eval[answerToCheck](answers[answerToCheck]))) {
        muteProgram = true;
        console.log(pcode + " checks " + answerToCheck + " and sees " + answers[answerToCheck] + " instead of eval");
      }
    });

    if (muteProgram) {
      $("." + pcode).css({ opacity: 0.4 }).addClass("no-print");
      $("div." + pcode).css({ display: "none" }).addClass("no-print");
    } else {
      $("." + pcode).css({ opacity: 1 }).removeClass("no-print");
      $("div." + pcode).css({ display: "block" }).removeClass("no-print");
    }
  });
}

function hardPass() {
  $(".modal").modal({ show: true });
  return false;
}

$(document).ready(function () {
  $(".report").hide();

  var outer_shell = $("#form-qs"),
      firstQuestion = true;

  var lang_options = Object.keys(language_defaults),
      select_lang = "en";
  if (lang_options.length > 1 && window.location.search.indexOf("lang=") > -1) {
    select_lang = window.location.search.split("lang=")[1].split("&")[0].toLowerCase();
    if (!lang_options.includes(select_lang)) {
      select_lang = "en";
    }
    console.log("set language: " + select_lang);
  }

  $("select.languages").val(select_lang).on('change', function(e) {
    window.location.href = "/?lang=" + e.target.value;
  });

  if (select_lang === "en") {

  } else {
    $(".en_only").css({display: "none"});
    $("." + select_lang + "_only").css({display: "block"});

    if (language_defaults[select_lang].additional_financing) {
      $("#additional_financing").text(language_defaults[select_lang].additional_financing);
    }
  }

  Object.keys(program_descriptions).forEach(function (pcode) {
    var p = program_descriptions[pcode],
      lang_src = (select_lang === "en" || !p[select_lang]) ? p : p[select_lang],
      shell = $(".program." + pcode);

    // language changes name of program or adds parenthetical alt_name
    if (lang_src.name) {
      $(shell).find("h4").text(lang_src.name);
      $("li." + pcode).text(lang_src.name);
    } else if (lang_src.alt_name) {
      $(shell).find("h4").append("<br/>(" + lang_src.alt_name + ")");
      $("li." + pcode).append(" (" + lang_src.alt_name + ")");
    }

    if (lang_src.disclaimer || p.disclaimer) {
      $(shell).append($("<blockquote>").text((lang_src.disclaimer || p.disclaimer)));
    }

    if (lang_src.html) {
      // raw HTML dump
      $(shell).append(lang_src.html);
    } else {
      // structured HTML sections
      var active_table = null;
      ["description", "table_headers", "table_data", "table_footer", "uses", "funding", "availability"].forEach(function (section) {
        if (lang_src[section] || p[section]) {
          var content = lang_src[section] || p[section];
          if (section.indexOf("table") === -1) {
            $(shell).append("<p><strong>" + language_defaults[select_lang][section] + "</strong>: "
              + content + "</p>");
          } else if (section === "table_headers") {
            active_table = $("<table class='table table-striped'>");
            $(shell).append(active_table);
            active_table.append($("<tr>").append($("<th>").attr("colspan", content[1].length).text(content[0][0])));
            var hrow = $("<tr>");
            active_table.append(hrow);
            content[1].forEach(function(h){
              hrow.append($("<th>").text(h));
            });
          } else if (section === "table_data") {
            content.forEach(function(row){
              var trow = $("<tr>");
              active_table.append(trow);
              row.forEach(function(col){
                trow.append("<td>" + col.toLocaleString() + "</td>");
              });
            });
          } else if (section === "table_footer") {
            $(shell).append("<p><strong>" + content + "</strong></p>");
          }
        }
      });
    }

    if (lang_src.resources) {
      var innerhtml = "<p><strong>" + language_defaults[select_lang].resources + "</strong>:<br/>";

      lang_src.resources.forEach(function (resource, index) {
        if (index) {
          innerhtml += "<br/><br/>";
        }
        innerhtml += "<strong>" + resource.name + "</strong> - " + resource.info;
        innerhtml += " <a href='" + resource.link + "' target='_blank'>" + resource.link + "</a>";
      });
      $(shell).append($("<p>").html(innerhtml));
    }

    if (lang_src.learn_more || p.learn_more) {
      $(shell).append("<strong>" + language_defaults[select_lang].learn_more + "</strong>:&nbsp;&nbsp;");
      $(shell).append('<a href="' + (lang_src.learn_more || p.learn_more) + '" target="_blank">' + (lang_src.learn_more || p.learn_more) + '</a>');
    }
  });

  Object.keys(form_questions).forEach(function (qcode) {
    var q = form_questions[qcode],
        lang_src = (select_lang === "en") ? q : (form_questions[qcode][select_lang] || {input:{}}),
        shell = outer_shell;

    if (q.header) {
      shell.append($("<h3>").attr("class", q.classes || "").text(typeof lang_src === "string" ? lang_src : qcode));
      return;
    }

    if (q.classes) {
      var inner_shell = $("<div>").attr("class", q.classes);
      shell.append(inner_shell);
      shell = inner_shell;
    }

    var qdiv = $("<div>").attr("id", qcode).attr("class", "question").html(lang_src.html || q.html);
    shell.append(qdiv);

    var arrow = $("<span>").attr("class", "answered").text("‣")
    if (firstQuestion) {
      arrow.addClass("please-answer");
      firstQuestion = false;
    }
    qdiv.prepend(arrow);

    if (q.input) {
      var formplace = $("<div>").attr("class", "form-group");
      qdiv.append(formplace);

      if ((lang_src.input && lang_src.input.label) || q.input.label) {
        formplace.append($("<label>").attr("for", q.input.name).text(lang_src.input.label || q.input.label));
      }
      if ((lang_src.input && lang_src.input.examples) || q.input.examples) {
        formplace.append($("<small>").attr("class", "form-text text-muted").text(" " + language_defaults[select_lang].examples + ": " + (lang_src.input || q.input).examples));
      }

      formplace.append($("<input>").attr("type", "text").attr("class", "input form-control form-control-lg").attr("name", q.input.name).attr("id", q.input.name));
      formplace.append($("<button>").attr("class", "btn btn-primary").attr("data-label", language_defaults[select_lang].enter).text(language_defaults[select_lang].enter));

      if (lang_src.skippable || q.skippable) {
        var skip_label = (q.skippable && q.skippable.length) ? (lang_src.skippable || q.skippable) : language_defaults[select_lang].skip;
        formplace.append($("<button>").attr("class", "btn btn-info not-sure").attr("data-label", skip_label).text(skip_label));
      }
    } else {
      var yes_label = lang_src.yes_text || language_defaults[select_lang].yes_text,
          not_sure_label = (q.skippable && q.skippable.length) ? (lang_src.skippable || q.skippable) : language_defaults[select_lang].not_sure,
          no_label = lang_src.no_text || language_defaults[select_lang].no_text;

      qdiv.append($("<button>").attr("class", "btn btn-primary").attr("data-label", yes_label).text(yes_label));
      if (lang_src.skippable || q.skippable) {
        qdiv.append($("<button>").attr("class", "btn btn-info not-sure").attr("data-label", not_sure_label).text(not_sure_label));
      }
      qdiv.append($("<button>").attr("class", "btn btn-dark").attr("data-label", no_label).text(no_label));
    }
  });

  $(".question").each(function (index) {
    var q = this;
    if (index) {
      // hidden question styles
      $(q).find('.btn, div, p, li').css({ opacity: 0.4 });
      $(q).find('.btn, input').prop('disabled', true);
    } else {
      // very first question (must be visible for strters)
      $(q).find('.answered').css({ display: "block" });
    }
    // $(q).find('.answered').click(function (e) {
    //   $(q).find('.btn, div, p, li').css({ opacity: 1 });
    // });

    // YES / ENTER button
    $(q).find('.btn-primary').click(function (e) {
      e.preventDefault();
      answers[q.id] = form_questions[q.id].input ? $(q).find('input[name="' + form_questions[q.id].input.name + '"]').val() : true;

      if (form_questions[q.id].hard_pass === true) {
        hardPass();
      }
      if (form_questions[q.id].yes_hides) {
        form_questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).hide();
        });
      }
      if (form_questions[q.id].no_hides) {
        form_questions[q.id].no_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }

      if (q.id === "q110") { // for-profit or non-profit
        answers["q11"] = undefined;
      }

      $(q).find(".answered").addClass("already-answered");
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });

    // NOT SURE / SKIP button (pre-emptive YES)
    $(q).find('.btn.not-sure').click(function (e) {
      e.preventDefault();
      answers[q.id] = form_questions[q.id].input ? undefined : -1;

      if (form_questions[q.id].yes_hides) {
        form_questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }
      if (form_questions[q.id].no_hides) {
        form_questions[q.id].no_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }

      $(q).find(".answered").addClass("already-answered");
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });

    // NO button
    $(q).find('.btn-dark').click(function (e) {
      e.preventDefault();
      answers[q.id] = false;

      if (form_questions[q.id].hard_pass === false) {
        hardPass();
      }
      if (form_questions[q.id].yes_hides) {
        form_questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }
      if (form_questions[q.id].no_hides) {
        form_questions[q.id].no_hides.forEach(function (cl) {
          $("." + cl).hide();
        });
      }

      $(q).find(".answered").addClass("already-answered");
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });
  });

  if (window.location.search.indexOf("reportnow") > -1) {
    moveToReport({preventDefault:function(){}});
  }
});
