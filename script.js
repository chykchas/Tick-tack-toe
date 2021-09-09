const field = document.getElementById("field");
let cells = ["", "", "", "", "", "", "", "", ""];
let index = 0;
let gamestep = 1;

field.addEventListener("click", (elem) => {
  if (elem.target.dataset.value == "" && gamestep % 2 == 1) {
    index = elem.target.id;

    elem.target.textContent = "X";
    cells[index] = elem.target.dataset.value = "X";

    setTimeout(() => Winner(), 10);
    gamestep++;
  } else if (elem.target.dataset.value == "" && gamestep % 2 == 0) {
    index = elem.target.id;

    elem.target.textContent = "O";
    cells[index] = elem.target.dataset.value = "O";

    setTimeout(() => Winner(), 10);
    gamestep++;
  } else return alert("choose another square");

  console.log(cells);
  console.log(gamestep);
});

/*
    0   1   2
    3   4   5
    6   7   8
*/

function Winner() {
  if (cells[0] == "X" && cells[1] == "X" && cells[2] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[0] == "X" && cells[4] == "X" && cells[8] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[0] == "X" && cells[3] == "X" && cells[6] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[1] == "X" && cells[4] == "X" && cells[7] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[2] == "X" && cells[4] == "X" && cells[6] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[2] == "X" && cells[5] == "X" && cells[8] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[3] == "X" && cells[4] == "X" && cells[5] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[6] == "X" && cells[7] == "X" && cells[8] == "X") {
    alert("Player X - Winner");
    location.reload();
  } else if (cells[0] == "O" && cells[1] == "O" && cells[2] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[0] == "O" && cells[4] == "O" && cells[8] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[0] == "O" && cells[3] == "O" && cells[6] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[1] == "O" && cells[4] == "O" && cells[7] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[2] == "O" && cells[4] == "O" && cells[6] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[2] == "O" && cells[5] == "O" && cells[8] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[3] == "O" && cells[4] == "O" && cells[5] == "O") {
    alert("Player O - Winner");
    location.reload();
  } else if (cells[6] == "O" && cells[7] == "O" && cells[8] == "O") {
    alert("Player O - Winner");
    location.reload();
  }
}
