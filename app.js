const cardNames = ['fa-anchor', 'fa-atom', 'fa-frog', 'fa-feather-alt', 'fa-cogs', 'fa-fan', 'fa-bolt', 'fa-hat-wizard', 'fa-apple-alt', 'fa-bell', 'fa-bomb', 'fa-brain'];
const cardShuffled = ['fa-anchor', 'fa-atom', 'fa-frog', 'fa-feather-alt', 'fa-cogs', 'fa-fan', 'fa-bolt', 'fa-hat-wizard', 'fa-apple-alt', 'fa-bell', 'fa-bomb', 'fa-brain'];
const innerScore = document.getElementById('score');
const cards = document.getElementById('cards');
const mainCard = document.querySelector('#next-card');
const reset = document.querySelector('.restart');
const cardHolder = document.querySelectorAll('.card');
let score = 0;
let mainCardNum = 0;
let alreadySelected = false;

function shuffle(array) {
  mainCardNum = 0;
  score = 0;
  innerScore.innerHTML = '0';
  return array.sort(() => Math.random() - 0.5);
}

shuffle(cardShuffled);

function mainUpdate(cardNumber) {
  if (mainCardNum === cardHolder.length) {
    alert('You Won The Game')
  } else {
    mainCard.getElementsByTagName('i')[0].classList = `fas ${cardNames[cardNumber]}`;
  }
}

function addCards() {
  for (let x = 0; x < cardHolder.length; x++) {
    cardHolder[x].getElementsByTagName('i')[0].classList = '';
    cardHolder[x].getElementsByTagName('i')[0].classList = `fas ${cardShuffled[x]}`;
    cardHolder[x].classList.remove('matched');
  }
}

addCards();

cards.addEventListener('click', function(e) {
  if (e.target.classList.contains('card') && !e.target.classList.contains('matched')) {
    if (!alreadySelected) {
      alreadySelected = true;
      score++;
      innerScore.innerHTML = score;
      e.target.classList.add('show');
      setTimeout(function() {
        e.target.classList.remove('show');
        alreadySelected = false;
        if (e.target.getElementsByTagName('i')[0].classList[1] === `${mainCard.getElementsByTagName('i')[0].classList[1]}`) {
          e.target.classList.add('matched');
          mainCardNum++;
          mainUpdate(mainCardNum);
        }
      }, 500);
    }
  }
});

reset.addEventListener('click', function() {
  shuffle(cardShuffled);
  mainUpdate(mainCardNum);
  addCards();
});