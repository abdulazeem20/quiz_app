export function Choices({ handleClick, choice, answer, number }) {
  let option = [0, "A", "B", "C", "D"];
  let container = $(`
        <div class="choice" data-accepting=${true}>
          <div class="index">${option[number]}.</div>
          <div class="choiceArea">${choice}</div>
          <div class="status">
          </div>
        </div>
    `);
  container.on("click", function () {
    let me = $(this);
    if (!me.data("accepting")) return;
    handleClick({ answer, number, me });
  });
  return container;
}
