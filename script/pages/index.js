import { Info } from "../components/Info.js";
import { Quiz } from "./quiz.js";
export function Index() {
  let handleStart = function () {
    $(this).prop({ disabled: true }).addClass("out");
    section.find("h3").addClass("out");
    section.find("#highScore").addClass("out");
    localStorage.removeItem("state");
    setTimeout(() => {
      Quiz();
    }, 500);
  };
  let handleDisplay = function () {
    let records = JSON.parse(localStorage.getItem("scores")) || [];
    records.sort((a, b) => b.score - a.score);
    records.splice(5);
    let list = $(`<ul class="list-group"> </ul>`);
    let scoreList = list.append(
      records
        .map((el) => {
          return `<li class="list-group-item">${el.username} : ${el.score}</li>`;
        })
        .join("")
    );
    section.find("#highScoreModal .container-fluid").empty().append(scoreList);
    section.find("#highScoreModal").modal("show");
  };
  let section = $(`
        <main id="index">
            <div class="container">
                <h3>Awesome Quiz App</h3>
                <div>
                  <button class="btn btn-primary btn-lg" id="start"> Start Game </button>
                  <button type="button" class="btn btn-info btn-lg text-white" id="highScore">High Scores</button>
                </div>
            </div>
            <div class="modal fade" id="highScoreModal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="modalTitleId">
                        High Score
                      </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                  <div class="container-fluid">
                    
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    `);
  section.append(Info);
  section.find("#start").on("click", handleStart);
  section.find("#highScore").on("click", handleDisplay);
  $("body").children().not("script").remove();
  $("body").prepend(section);
}
