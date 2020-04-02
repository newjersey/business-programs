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
  requirements = {
    eag: { // Emergency Assistance Grant
      required_yes: ["q1", "q2", "q12", "q16", "q17", "q20", "q21", "q22", "q23", "q42"],
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
      required_yes: ["q6", "q7", "q42"],
      required_no: ["q3", "q15"]
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
    }
  };
var programs = Object.keys(requirements);

var answers = {};

function moveToReport(e) {
  e.preventDefault();
  $("form, .hidden_options, .preamble").hide();
  $(".report").show();
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
  $("form, .hidden_options, .preamble").show();
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

  Object.keys(questions).forEach(function (qcode) {
    var q = questions[qcode],
        shell = outer_shell;

    if (q === true) {
      shell.append($("<h3>").text(qcode));
      return;
    }

    if (q.classes) {
      var inner_shell = $("<div>").attr("class", q.classes);
      shell.append(inner_shell);
      shell = inner_shell;
    }

    var qdiv = $("<div>").attr("id", qcode).attr("class", "question").html(q.html);
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

      if (q.input.label) {
        formplace.append($("<label>").attr("for", q.input.name).text(q.input.label));
      }
      if (q.input.examples) {
        formplace.append($("<small>").attr("class", "form-text text-muted").text("Examples: " + q.input.examples));
      }

      formplace.append($("<input>").attr("type", "text").attr("class", "input form-control form-control-lg").attr("name", q.input.name));
      formplace.append($("<button>").attr("class", "btn btn-primary").attr("data-label", "Enter").text("Enter"));

      if (q.skippable) {
        formplace.append($("<button>").attr("class", "btn btn-info not-sure").attr("data-label", q.skippable.length ? q.skippable : "Skip").text(q.skippable.length ? q.skippable : "Skip"));
      }
    } else {
      qdiv.append($("<button>").attr("class", "btn btn-primary").attr("data-label", q.yes_text || "Yes").text(q.yes_text || "Yes"));
      if (q.skippable) {
        qdiv.append($("<button>").attr("class", "btn btn-info not-sure").attr("data-label", q.skippable.length ? q.skippable : "Not Sure").text(q.skippable.length ? q.skippable : "Not Sure"));
      }
      qdiv.append($("<button>").attr("class", "btn btn-dark").attr("data-label", q.no_text || "No").text(q.no_text || "No"));
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
      answers[q.id] = q.input ? $(q).find('input[name="' + q.input.name + '"]').val() : true;

      if (questions[q.id].hard_pass === true) {
        hardPass();
      }
      if (questions[q.id].yes_hides) {
        questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).hide();
        });
      }
      if (questions[q.id].no_hides) {
        questions[q.id].no_hides.forEach(function (cl) {
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
      answers[q.id] = q.input ? undefined : -1;

      if (questions[q.id].yes_hides) {
        questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }
      if (questions[q.id].no_hides) {
        questions[q.id].no_hides.forEach(function (cl) {
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

      if (questions[q.id].hard_pass === false) {
        hardPass();
      }
      if (questions[q.id].yes_hides) {
        questions[q.id].yes_hides.forEach(function (cl) {
          $("." + cl).show();
        });
      }
      if (questions[q.id].no_hides) {
        questions[q.id].no_hides.forEach(function (cl) {
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
});
