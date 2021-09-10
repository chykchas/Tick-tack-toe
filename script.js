const field = document.getElementById("field");
let cells = ["", "", "", "", "", "", "", "", ""];
let index = 0;
let gamestep = 1;

field.addEventListener("click", (elem) => {
  if (elem.target.dataset.value == "" && gamestep % 2 == 1) {
    index = elem.target.id;

    elem.target.textContent = "X";
    cells[index] = elem.target.dataset.value = "X";

    setTimeout(() => Winner("X"), 10);
    gamestep++;
  } else if (elem.target.dataset.value == "" && gamestep % 2 == 0) {
    index = elem.target.id;

    elem.target.textContent = "O";
    cells[index] = elem.target.dataset.value = "O";

    setTimeout(() => Winner("O"), 10);
    gamestep++;
  } else return alert("choose another square");
});

/*
    0   1   2
    3   4   5
    6   7   8
*/

function Winner(symb) {
  let combinations = [
    [cells[0], cells[1], cells[2]],
    [cells[0], cells[4], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[4], cells[6]],
    [cells[2], cells[5], cells[8]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
  ];

  combinations.forEach((combination) => {
    if (combination.every((s) => s === symb)) {
      alert(`Player ${symb} - Winner`);
      location.reload();
    }
  });

  // checking for a draw
  if (cells.every((cell) => Boolean(cell))) {
    alert("Draw. Restarting game");
    location.reload();
  }
}
