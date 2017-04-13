const coefficient = [
  10000, 7500, 5000, 2500, 1000, 500, 300, 200, 150, 100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
];

var allNumbers = [{
    number: 1,
    color: "red"
  },
  {
    number: 2,
    color: "green"
  },
  {
    number: 3,
    color: "blue"
  },
  {
    number: 4,
    color: "purple"
  },
  {
    number: 5,
    color: "brown"
  },
  {
    number: 6,
    color: "yellow"
  },
  {
    number: 7,
    color: "orange"
  },
  {
    number: 8,
    color: "white"
  },
  {
    number: 9,
    color: "red"
  }, {
    number: 10,
    color: "green"
  }, {
    number: 11,
    color: "blue"
  }, {
    number: 12,
    color: "purple"
  }, {
    number: 13,
    color: "brown"
  }, {
    number: 14,
    color: "yellow"
  }, {
    number: 15,
    color: "orange"
  }, {
    number: 16,
    color: "white"
  }, {
    number: 17,
    color: "red"
  }, {
    number: 18,
    color: "green"
  }, {
    number: 19,
    color: "blue"
  }, {
    number: 20,
    color: "purple"
  }, {
    number: 21,
    color: "brown"
  }, {
    number: 22,
    color: "yellow"
  }, {
    number: 23,
    color: "orange"
  }, {
    number: 24,
    color: "white"
  }, {
    number: 25,
    color: "red"
  }, {
    number: 26,
    color: "green"
  }, {
    number: 27,
    color: "blue"
  }, {
    number: 28,
    color: "purple"
  }, {
    number: 29,
    color: "brown"
  }, {
    number: 30,
    color: "yellow"
  }, {
    number: 31,
    color: "orange"
  }, {
    number: 32,
    color: "white"
  }, {
    number: 33,
    color: "red"
  }, {
    number: 34,
    color: "green"
  }, {
    number: 35,
    color: "blue"
  }, {
    number: 36,
    color: "purple"
  }, {
    number: 37,
    color: "brown"
  }, {
    number: 38,
    color: "yellow"
  }, {
    number: 39,
    color: "orange"
  }, {
    number: 40,
    color: "white"
  }, {
    number: 41,
    color: "red"
  }, {
    number: 42,
    color: "green"
  }, {
    number: 43,
    color: "blue"
  }, {
    number: 44,
    color: "purple"
  }, {
    number: 45,
    color: "brown"
  }, {
    number: 46,
    color: "yellow"
  }, {
    number: 47,
    color: "orange"
  }, {
    number: 48,
    color: "white"
  }
];

var userDiv = document.querySelector('.user-div');
var byColorDiv = document.querySelector('.by-color');
var computerDiv = document.querySelector('.computer-div');
var userChoice = [];
var computerChoice = [];
var playBtn = document.getElementsByClassName('play')[0];
var amount;
var loop;
var matches = 0;

window.addEventListener('load', init);
playBtn.addEventListener('click', play);

function init() {

  let text = ``;

  for (let i = 0; i < allNumbers.length; i++) {
    text += `<div class="user-number"><p class="${allNumbers[i].color}">${allNumbers[i].number}</p></div>`
    }

    userDiv.innerHTML = text;
    userDiv.addEventListener('click', selectNumber);
    byColorDiv.addEventListener('click', selectByColor);

}

function selectNumber(e) {

  if (e.target.tagName === 'P') {

    let selectedElement = e.target;
    let selectedNumber = parseInt(selectedElement.innerHTML);

      if (!isSelected(selectedElement) && userChoice.length < 6) {
        selectedElement.classList.add('selected');
        userChoice.push(selectedNumber);
      } else {
        selectedElement.classList.remove('selected');
        for (let i = 0; i<userChoice.length;i++) {
          if (selectedNumber === userChoice[i]) {
            userChoice.splice(i,1);
        }
      }
    }
  }
}

function isSelected(el) {
  return el.classList.contains('selected');
}

function selectByColor(e) {
  if (e.target.tagName === 'SPAN') {

    userChoice.length = 0;

    let playerNumbers = document.querySelectorAll('.user-number>p');
    let chosenColor = e.target.getAttribute('class');

    for (let i = 0; i < playerNumbers.length; i++) {
      playerNumbers[i].classList.remove('selected');
    }

    for (let i = 0; i < playerNumbers.length; i++) {
      if (playerNumbers[i].classList.contains(`${chosenColor}`)) {
        let x = parseInt(playerNumbers[i].innerHTML);
        playerNumbers[i].classList.add('selected');
        userChoice.push(x);
      }
    }
  }
}

function play() {

  amount = document.querySelector('.bet-amount').value;

  if (userChoice.length === 6 && amount > 0) {
    computersTurn();
  } else {
    alert('Vadi vadi parice batice');
  }

}

function computersTurn() {
  var myArr = [];
  var allNumbersClone = myArr.concat(allNumbers);
  var text = '';

    loop = setInterval(function() {
      if (computerChoice.length < 35) {
        var random = Math.floor(Math.random() * allNumbersClone.length);
        var newDiv = document.createElement('div');
        newDiv.classList.add('computer-number');
        computerDiv.appendChild(newDiv);

        if (computerChoice.length < 5) {
          text = `<p class="${allNumbersClone[random].color}">${allNumbersClone[random].number}</p>`;
        } else {
          text = `<p class="${allNumbersClone[random].color}">${allNumbersClone[random].number}</p><span>${coefficient[computerChoice.length - 5]}</span>`;
        }

        newDiv.innerHTML = text;

        computerChoice.push(allNumbersClone[random]);
        allNumbersClone.splice(random,1);

      } else {
        clearInterval(loop);
        compareChoices();
      }
    },100);
}

function compareChoices() {
  for (var i = 0; i < computerChoice.length; i++) {
      for (var j = 0; j < userChoice.length; j++) {
        if (computerChoice[i].number === userChoice[j]) {
          matches++;
          if (matches === 6) {
            console.log('Pobedio si');
            break;
          }
        }
      }
  }

  if (matches < 6) {
    console.log(`Izgubio si. Imas ${matches} pogodaka`);
  }

}
