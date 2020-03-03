/********************* Elements ********************/

let cells = document.querySelectorAll("td");

/********************* Functions ********************/

const handleTurn = (event) => {
  console.log('Clicked!');
  let totalCount = 0;
  let playerX = 0;
  let playerO = 0;

  if (playerX) {
    playerX++;
    totalCount++;
  } else {
    playerO;
    totalCount;
  }
};

var player = "x";

cells.addEventListener("click", event => {
  document.getElementById("td").addClass(player);
  player = player == "x" ? "o" : "x";
});



/********************* Event Listners ********************/

// cells.addEventListener("click", handleTurn);


document.querySelectorAll("td").forEach(item => {
  item.addEventListener('click', event => {
    item.append("X");
  });
})

document.querySelectorAll("td").forEach(item => {
  item.addEventListener('click', event => {
    item.append("O");
  });
})



