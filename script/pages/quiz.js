import { question } from "../components/serverQuestion.js";
import { Main } from "../components/Main.js";
import { End } from "./End.js";
export function Quiz() {
  let availableQuestion = [...question];
  let maxQuestion = 3;
  let questionState = 1;
  let score = 0;

  let handleClick = function ({ answer, number: choice, me }) {
    section.find(".choice").data({ accepting: false });
    me.addClass("selected");
    if (answer == choice) {
      me.find(".choiceArea").addClass("text-success");
      me.find(".status")
        .addClass("text-success")
        .prepend(`<i class="fas fa-check" aria-hidden="true"></i>`);
      score += 10;
      section.find("#mainScore").empty().append(score);
    } else {
      me.find(".choiceArea").addClass("text-danger");
      me.find(".status")
        .addClass("text-danger")
        .prepend(`<i class="fa fa-times" aria-hidden="true"></i>`);
      let correctAnswer = $(".choice")[--answer];
      $(correctAnswer).addClass("bg-success");
    }
    setTimeout(() => {
      if (availableQuestion.length === 0 || questionState == 3) {
        let details = JSON.stringify({ score, page: "end" });
        localStorage.setItem("state", details);
        End({ score });
        return;
      }
      questionState++;
      section.find(".progress-bar").css({ width: `${getPercentage()}%` });
      section
        .find(".progress-info")
        .empty()
        .append(`${questionState} of ${maxQuestion}`);
      getPercentage();
      me.parents(".main").remove();
      Main({ availableQuestion, handleClick }).insertAfter(
        section.find(".head")
      );
    }, 2000);
  };

  let getPercentage = () => {
    let percentage = (questionState / maxQuestion) * 100;
    return percentage;
  };

  let section = $(`
        <main id="quiz">
           <div class="container">
              <div class="head">
                <div class="score">
                    <h5>Score: </h5>
                    <h5 id="mainScore">${score}</h5>
                </div>
              </div>

              <div class="tail">
                <div class="progress-info">
                  ${questionState} of ${maxQuestion}
                </div>
                <div class="progress">
                  <div class="progress-bar bg-success"></div>
                </div>
              </div>
            </div>
        </main>
    `);
  Main({ availableQuestion, handleClick }).insertAfter(section.find(".head"));
  section.find(".progress-bar").css({ width: `${getPercentage()}%` });
  $("body").children().not("script").remove();
  $("body").prepend(section);
}
