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

var nonprofit_q = 11,
    yearlong_q = 7,
  requirements = {
    eag: { // Emergency Assistance Grant
      required_yes: [201, 1, 2, 12, 17, 23, 42],
      required_no: [3, 14],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte >= 1 && fte <= 10;
        },
        11: function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        18: function (val) {
          return (val === true) || (val === -1); // yes or not sure
        }
      }
    },
    eawcl: { // Emergency Assistance 0% Working Capital
      required_yes: [201, 1, 2, 7, 16, 17, 20, 21, 22, 23, 42],
      required_no: [3, 14],
      eval: {
        9: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        },
        11: function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        18: function (val) {
          return (val === true) || (val === -1); // yes or not sure
        },
        19: function (val) {
          return (val === true) || (answers[nonprofit_q] === true);
        }
      }
    },
    guarantee: { // Emergency Assistance Guarantee
      required_yes: [201, 1, 2, 7, 16, 17, 20, 21, 22, 23, 42],
      required_no: [3, 14],
      eval: {
        9: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        },
        11: function (val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        18: function (val) {
          return (val === true) || (val === -1); // yes or not sure
        },
        19: function (val) {
          return (val === true) || (answers[nonprofit_q] === true);
        }
      }
    },
    egp: { // Entrepreneur Guarantee
      required_yes: [201, 1, 4, 5, 6, 13, 17, 23, 42],
      required_no: [14],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 25;
        },
        10: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        }
      }
    },
    eidl: { // SBA EIDL
      required_yes: [6, 18, 21, 42, 201, 206],
      required_no: [15],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 500;
        },
        204: function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    frelief: { // NJ EDA relief
      required_yes: [0, 42]
    },
    cdfi: {
      required_yes: [42],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 20;
        },
        9: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 1000000;
        },
        10: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 1000000;
        }
      }
    },
    bank: {
      required_yes: [42],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 20;
        },
        9: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue >= 100000;
        },
        10: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue >= 100000;
        }
      }
    },
    eidl_advance: {
      required_yes: [18, 21, 201, 206],
      required_no: [15],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 500;
        },
        204: function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    a7: {
      required_yes: [18, 201, 205],
      required_no: [15],
      eval: {
        9: function (revenue) {
          revenue = parseNumber(revenue);
          return revenue < 5000000;
        }
      }
    },
    ppp: {
      required_yes: [201, 20, 21],
      required_no: [],
      eval: {
        8: function (fte) {
          fte = parseNumber(fte);
          return fte < 500;
        },
        202: function(val) {
          return (val === true) || (answers[nonprofit_q] === false);
        },
        204: function(val) {
          return (val === true) || (answers[yearlong_q] === true);
        }
      }
    },
    sba_debt: {
      required_yes: [201, 203],
      required_no: []
    }
  };
var programs = Object.keys(requirements);

var answers = [];

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
    ($(nextDiv).find(".answered").css("color") === "rgb(170, 170, 170)")
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
  $(nextDiv).find('.answered').css({ display: "block" });

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

function viewGuide() {

}

$(document).ready(function () {
  $(".report").hide();

  $(".question").each(function (index) {
    var q = this;
    if (index) {
      $(q).find('.btn, div, p, li').css({ opacity: 0.4 });
      $(q).find('.btn, input').prop('disabled', true);
    } else {
      $(q).find('.answered').css({ display: "block" });
    }
    $(q).find('.answered').click(function (e) {
      $(q).find('.btn, div, p, li').css({ opacity: 1 });
    });

    var sheet_original_index = q.id.match(/\d+/)[0] * 1;

    // YES / ENTER button
    $(q).find('.btn-primary').click(function (e) {
      e.preventDefault();
      answers[sheet_original_index] = true;

      if (sheet_original_index === 2) { // physically in NJ
        $('.physical_nj').show();
        $('.not_in_nj').hide();

        if (answers[3] === false) {
          $('.detail_qs').show();
        } else if (answers[3] === true) {
          $('.detail_qs').hide();
        }
      } else if (sheet_original_index === 3) { // home business
        $('.detail_qs').hide();
      } else if (sheet_original_index === 8) { // how many FTE
        answers[sheet_original_index] = $("input[name='fte']").val();
      } else if (sheet_original_index === 9) { // 2019 revenue
        answers[sheet_original_index] = $("input[name='2019_revenue']").val();
      } else if (sheet_original_index === 10) { // YTD 12-month revenue
        answers[sheet_original_index] = $("input[name='12mo_revenue']").val();
      } else if (sheet_original_index === 11) { // nonprofit detail button
        $('.for-profit').hide();
      } else if (sheet_original_index === 12) { // NAICS
        answers[sheet_original_index] = $("input[name='12mo_revenue']").val();
      } else if (sheet_original_index === 13) { // entrepreneur
        $('.entrepreneur').show();
      } else if (sheet_original_index === 14) { // NJ illegal business
        hardPass();
      } else if (sheet_original_index === 110) { // for-profit or non-profit
        $('.non-profit').hide();
        $('.for-profit').show();
        answers[11] = undefined;
      }

      $(q).find(".answered").css({ color: "#aaa" });
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });

    // NOT SURE / SKIP button (pre-emptive YES)
    $(q).find('.btn.not-sure').click(function (e) {
      e.preventDefault();
      answers[sheet_original_index] = -1;

      // numeric answers going back to not sure / skip
      try {
        // old browser Array.includes
        if ([8, 9, 10, 12].includes(sheet_original_index)) {
          answers[sheet_original_index] = undefined;
        }
      } catch (e) {
      }

      $(q).find(".answered").css({ color: "#888" });
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });

    // NO button
    $(q).find('.btn-dark').click(function (e) {
      e.preventDefault();
      answers[sheet_original_index] = false;

      if (sheet_original_index === 1) { // not registers in NJ
        hardPass();
      } else if (sheet_original_index === 2) { // not physically in NJ
        $('.physical_nj').hide();
        $('.not_in_nj').show();
      } else if (sheet_original_index === 3) { // home business
        if (answers[2] === false) {
          $('.detail_qs').hide();
        } else if (answers[2] === true) {
          $('.detail_qs').show();
        }
      } else if (sheet_original_index === 11) { // non-profit detail
        $('.for-profit').show();
      } else if (sheet_original_index === 13) { // entrepreneur
        $('.entrepreneur').hide();
      } else if (sheet_original_index === 42) { // agree to disclaimer
        hardPass();
      } else if (sheet_original_index === 110) { // for-profit or non-profit
        $('.non-profit').show();
      }

      $(q).find(".answered").css({ color: "#888" });
      $(q).find(".btn").css({ borderColor: "transparent" });
      $(e.target).css({ border: "3px solid orange" });

      nextQuestion(index);
      return false;
    });
  });
});

if (window.location.href.includes("scroll")) {
  function scrolledStuff() {
    if ((window.pageYOffset || window.scrollY) > $(".fixed_marker").offset().top) {
      $('.my_options, .hidden_options').addClass('scrollme');
    } else {
      $('.my_options, .hidden_options').removeClass('scrollme');
    }
  }
  $(window).scroll(scrolledStuff);
  scrolledStuff(); // on page load
}
