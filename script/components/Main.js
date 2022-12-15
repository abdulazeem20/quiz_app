import { Choices } from "./Choice.js";
export function Main({ availableQuestion, handleClick }) {
  let questionIndex = Math.floor(Math.random() * availableQuestion.length);
  let currentQuestion = availableQuestion[questionIndex];
  let main = $(`
    <div class="main">
        <div class="question">
                    
        </div>

        <div class="choices">

        </div>
    </div>
  `);
  main.find(".question").append(currentQuestion.question);
  for (let number = 1; number <= 4; number++) {
    let choice = currentQuestion[`choice${number}`];
    main.find(".choices").append(
      Choices({
        choice,
        handleClick,
        answer: currentQuestion.answer,
        number,
      })
    );
  }
  availableQuestion.splice(questionIndex, 1);
  return main;
}
