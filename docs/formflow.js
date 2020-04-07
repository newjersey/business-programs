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

  var lang_options = Object.keys(language_defaults),
      select_lang = "en";
  if (lang_options.length > 1 && window.location.search.indexOf("lang=") > -1) {
    select_lang = window.location.search.split("lang=")[1].split("&")[0].toLowerCase();
    if (!lang_options.includes(select_lang)) {
      select_lang = "en";
    }
    console.log("set language: " + select_lang);
  }

  Object.keys(questions).forEach(function (qcode) {
    var q = questions[qcode],
        lang_src = (select_lang == "en") ? q : (questions[qcode][select_lang] || {input:{}}),
        shell = outer_shell;

    if (q.header) {
      shell.append($("<h3>").text(lang_src));
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

      if (lang_src.input.label || q.input.label) {
        formplace.append($("<label>").attr("for", q.input.name).text(lang_src.input.label || q.input.label));
      }
      if (lang_src.input.examples || q.input.examples) {
        formplace.append($("<small>").attr("class", "form-text text-muted").text(language_defaults[select_lang].examples + ": " + (lang_src.input.examples || q.input.examples)));
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
      answers[q.id] = questions[q.id].input ? $(q).find('input[name="' + questions[q.id].input.name + '"]').val() : true;

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

      if (q.id === "q110_is_non_profit") { // for-profit or non-profit
        answers["q11_has_501_designation"] = undefined;
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
      answers[q.id] = questions[q.id].input ? undefined : -1;

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
