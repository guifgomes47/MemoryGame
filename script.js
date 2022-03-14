const cardArray = [
  {
    name: "bee",
    img: "./assets/bee.png",
  },
  {
    name: "fox",
    img: "./assets/fox.png",
  },
  {
    name: "penguin",
    img: "./assets/penguin.png",
  },
  {
    name: "toad",
    img: "./assets/toad.png",
  },
  {
    name: "turtle",
    img: "./assets/turtle.png",
  },
  {
    name: "whale",
    img: "./assets/whale.png",
  },
  {
    name: "bee",
    img: "./assets/bee.png",
  },
  {
    name: "fox",
    img: "./assets/fox.png",
  },
  {
    name: "penguin",
    img: "./assets/penguin.png",
  },
  {
    name: "toad",
    img: "./assets/toad.png",
  },
  {
    name: "turtle",
    img: "./assets/turtle.png",
  },
  {
    name: "whale",
    img: "./assets/whale.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  cardArray.forEach(function (item, index) {
    const card = document.createElement("img");
    card.setAttribute("src", "./assets/pattern.png");
    card.setAttribute("data-id", index);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
    resultDisplay.textContent = 0;
  });
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("Check for match");
  if (optionOneId === optionTwoId) {
    cardsChosen = [];
    cardsChosenIds = [];
    alert("You click in the same image!");
    cards[optionOneId].setAttribute("src", "./assets/pattern.png");
    return;
  }
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    function returnCardOne() {
      const cardOne = cards[optionOneId].setAttribute(
        "src",
        "./assets/pattern.png"
      );
    }
    function returnCardTwo() {
      const cardTwo = cards[optionTwoId].setAttribute(
        "src",
        "./assets/pattern.png"
      );
    }
    setTimeout(returnCardOne, 500);
    setTimeout(returnCardTwo, 500);
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length * 2;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "You Win!";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    checkMatch();
  }
}
