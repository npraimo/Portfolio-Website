document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "2 of clubs",
      img: "images/2_of_clubs.png",
    },
    {
      name: "3 of clubs",
      img: "images/3_of_clubs.png",
    },
    {
      name: "4 of clubs",
      img: "images/4_of_clubs.png",
    },
    {
      name: "5 of clubs",
      img: "images/5_of_clubs.png",
    },
    {
      name: "6 of clubs",
      img: "images/6_of_clubs.png",
    },
    {
      name: "7 of clubs",
      img: "images/7_of_clubs.png",
    },
    {
      name: "8 of clubs",
      img: "images/8_of_clubs.png",
    },
    {
      name: "9 of clubs",
      img: "images/9_of_clubs.png",
    },
    {
      name: "10 of clubs",
      img: "images/10_of_clubs.png",
    },
    {
      name: "jack of clubs",
      img: "images/jack_of_clubs.png",
    },
    {
      name: "queen of clubs",
      img: "images/queen_of_clubs.png",
    },
    {
      name: "king of clubs",
      img: "images/king_of_clubs.png",
    },
    {
      name: "ace of clubs",
      img: "images/ace_of_clubs.png",
    },
    {
      name: "2 of diamonds",
      img: "images/2_of_diamonds.png",
    },
    {
      name: "3 of diamonds",
      img: "images/3_of_diamonds.png",
    },
    {
      name: "4 of diamonds",
      img: "images/4_of_diamonds.png",
    },
    {
      name: "5 of diamonds",
      img: "images/5_of_diamonds.png",
    },
    {
      name: "6 of diamonds",
      img: "images/6_of_diamonds.png",
    },
    {
      name: "7 of diamonds",
      img: "images/7_of_diamonds.png",
    },
    {
      name: "8 of diamonds",
      img: "images/8_of_diamonds.png",
    },
    {
      name: "9 of diamonds",
      img: "images/9_of_diamonds.png",
    },
    {
      name: "10 of diamonds",
      img: "images/10_of_diamonds.png",
    },
    {
      name: "jack of diamonds",
      img: "images/jack_of_diamonds.png",
    },
    {
      name: "queen of diamonds",
      img: "images/queen_of_diamonds.png",
    },
    {
      name: "king of diamonds",
      img: "images/king_of_diamonds.png",
    },
    {
      name: "ace of diamonds",
      img: "images/ace_of_diamonds.png",
    },
    {
      name: "2 of spades",
      img: "images/2_of_spades.png",
    },
    {
      name: "3 of spades",
      img: "images/3_of_spades.png",
    },
    {
      name: "4 of spades",
      img: "images/4_of_spades.png",
    },
    {
      name: "5 of spades",
      img: "images/5_of_spades.png",
    },
    {
      name: "6 of spades",
      img: "images/6_of_spades.png",
    },
    {
      name: "7 of spades",
      img: "images/7_of_spades.png",
    },
    {
      name: "8 of spades",
      img: "images/8_of_spades.png",
    },
    {
      name: "9 of spades",
      img: "images/9_of_spades.png",
    },
    {
      name: "10 of spades",
      img: "images/10_of_spades.png",
    },
    {
      name: "jack of spades",
      img: "images/jack_of_spades.png",
    },
    {
      name: "queen of spades",
      img: "images/queen_of_spades.png",
    },
    {
      name: "king of spades",
      img: "images/king_of_spades.png",
    },
    {
      name: "ace of spades",
      img: "images/ace_of_spades.png",
    },
    {
      name: "2 of hearts",
      img: "images/2_of_hearts.png",
    },
    {
      name: "3 of hearts",
      img: "images/3_of_hearts.png",
    },
    {
      name: "4 of hearts",
      img: "images/4_of_hearts.png",
    },
    {
      name: "5 of hearts",
      img: "images/5_of_hearts.png",
    },
    {
      name: "6 of hearts",
      img: "images/6_of_hearts.png",
    },
    {
      name: "7 of hearts",
      img: "images/7_of_hearts.png",
    },
    {
      name: "8 of hearts",
      img: "images/8_of_hearts.png",
    },
    {
      name: "9 of hearts",
      img: "images/9_of_hearts.png",
    },
    {
      name: "10 of hearts",
      img: "images/10_of_hearts.png",
    },
    {
      name: "jack of hearts",
      img: "images/jack_of_hearts.png",
    },
    {
      name: "queen of hearts",
      img: "images/queen_of_hearts.png",
    },
    {
      name: "king of hearts",
      img: "images/king_of_hearts.png",
    },
    {
      name: "ace of hearts",
      img: "images/ace_of_hearts.png",
    },
    // {
    //     name:'back of card',
    //     img: 'images/back_of_card.png'
    // },
    {
      name: "2 of clubs",
      img: "images/2_of_clubs.png",
    },
    {
      name: "3 of clubs",
      img: "images/3_of_clubs.png",
    },
    {
      name: "4 of clubs",
      img: "images/4_of_clubs.png",
    },
    {
      name: "5 of clubs",
      img: "images/5_of_clubs.png",
    },
    {
      name: "6 of clubs",
      img: "images/6_of_clubs.png",
    },
    {
      name: "7 of clubs",
      img: "images/7_of_clubs.png",
    },
    {
      name: "8 of clubs",
      img: "images/8_of_clubs.png",
    },
    {
      name: "9 of clubs",
      img: "images/9_of_clubs.png",
    },
    {
      name: "10 of clubs",
      img: "images/10_of_clubs.png",
    },
    {
      name: "jack of clubs",
      img: "images/jack_of_clubs.png",
    },
    {
      name: "queen of clubs",
      img: "images/queen_of_clubs.png",
    },
    {
      name: "king of clubs",
      img: "images/king_of_clubs.png",
    },
    {
      name: "ace of clubs",
      img: "images/ace_of_clubs.png",
    },
    {
      name: "2 of diamonds",
      img: "images/2_of_diamonds.png",
    },
    {
      name: "3 of diamonds",
      img: "images/3_of_diamonds.png",
    },
    {
      name: "4 of diamonds",
      img: "images/4_of_diamonds.png",
    },
    {
      name: "5 of diamonds",
      img: "images/5_of_diamonds.png",
    },
    {
      name: "6 of diamonds",
      img: "images/6_of_diamonds.png",
    },
    {
      name: "7 of diamonds",
      img: "images/7_of_diamonds.png",
    },
    {
      name: "8 of diamonds",
      img: "images/8_of_diamonds.png",
    },
    {
      name: "9 of diamonds",
      img: "images/9_of_diamonds.png",
    },
    {
      name: "10 of diamonds",
      img: "images/10_of_diamonds.png",
    },
    {
      name: "jack of diamonds",
      img: "images/jack_of_diamonds.png",
    },
    {
      name: "queen of diamonds",
      img: "images/queen_of_diamonds.png",
    },
    {
      name: "king of diamonds",
      img: "images/king_of_diamonds.png",
    },
    {
      name: "ace of diamonds",
      img: "images/ace_of_diamonds.png",
    },
    {
      name: "2 of spades",
      img: "images/2_of_spades.png",
    },
    {
      name: "3 of spades",
      img: "images/3_of_spades.png",
    },
    {
      name: "4 of spades",
      img: "images/4_of_spades.png",
    },
    {
      name: "5 of spades",
      img: "images/5_of_spades.png",
    },
    {
      name: "6 of spades",
      img: "images/6_of_spades.png",
    },
    {
      name: "7 of spades",
      img: "images/7_of_spades.png",
    },
    {
      name: "8 of spades",
      img: "images/8_of_spades.png",
    },
    {
      name: "9 of spades",
      img: "images/9_of_spades.png",
    },
    {
      name: "10 of spades",
      img: "images/10_of_spades.png",
    },
    {
      name: "jack of spades",
      img: "images/jack_of_spades.png",
    },
    {
      name: "queen of spades",
      img: "images/queen_of_spades.png",
    },
    {
      name: "king of spades",
      img: "images/king_of_spades.png",
    },
    {
      name: "ace of spades",
      img: "images/ace_of_spades.png",
    },
    {
      name: "2 of hearts",
      img: "images/2_of_hearts.png",
    },
    {
      name: "3 of hearts",
      img: "images/3_of_hearts.png",
    },
    {
      name: "4 of hearts",
      img: "images/4_of_hearts.png",
    },
    {
      name: "5 of hearts",
      img: "images/5_of_hearts.png",
    },
    {
      name: "6 of hearts",
      img: "images/6_of_hearts.png",
    },
    {
      name: "7 of hearts",
      img: "images/7_of_hearts.png",
    },
    {
      name: "8 of hearts",
      img: "images/8_of_hearts.png",
    },
    {
      name: "9 of hearts",
      img: "images/9_of_hearts.png",
    },
    {
      name: "10 of hearts",
      img: "images/10_of_hearts.png",
    },
    {
      name: "jack of hearts",
      img: "images/jack_of_hearts.png",
    },
    {
      name: "queen of hearts",
      img: "images/queen_of_hearts.png",
    },
    {
      name: "king of hearts",
      img: "images/king_of_hearts.png",
    },
    {
      name: "ace of hearts",
      img: "images/ace_of_hearts.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create table
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/back_of_card.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  createBoard();

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      //    cards[optionOneId].setAttribute('src','images/back_of_card.png');
      //    cards[optionTwoId].setAttribute('src','images/back_of_card.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/back_of_card.png");
      cards[optionTwoId].setAttribute("src", "images/back_of_card.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations, you found all matches";
    }
  }

  //flip the cards
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosenId[0] === cardsChosenId[1]) {
      this.setAttribute("src", "images/back_of_card.png");
      cardsChosen = [];
      cardsChosenId = [];
    }
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
  }
});
