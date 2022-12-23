import { Quiz } from "./quiz.js";
import { Index } from "./index.js";
export function End({ score }) {
  let handleRestart = function () {
    localStorage.removeItem("state");
    Quiz();
  };
  let handleHome = function (e) {
    e.preventDefault();
    let username = section.find("#username").val();
    if (username == "") return;
    let userScore = section.find("#score").text();
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    let detail = { username, score: userScore };
    let oldRecord = scores.filter((el) => el.username != username);
    oldRecord.push(detail);
    localStorage.setItem("scores", JSON.stringify(oldRecord));
    localStorage.removeItem("state");
    Index();
  };

  let section = $(`
        <main id="end">
            <form id="saveScore" class="container">
                <h5 id="score">${score}</h5>
                <input type="text" name="" class="form-control" placeholder="Username" value="" id="username"  />
                <button type="submit"  class="btn btn-success btn-lg" id="save">Save</button>
                <button type="button" class="btn btn-primary btn-lg" id="again">Try Again</button>
            </form>
        </main>
    `);
  section.find("#saveScore").on("submit", handleHome);
  section.find("#again").on("click", handleRestart);
  $("body").children().not("script").remove();
  $("body").prepend(section);
}
