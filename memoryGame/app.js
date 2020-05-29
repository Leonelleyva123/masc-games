
  const cardArray = [
    {
      name: 'blank',
      img: 'images/blank'
    }, 
    {
      name: 'blank',
      img: 'images/blank'
    }, 
    {
      name: 'black',
      img: 'images/black'
    }, 
    {
      name: 'black',
      img: 'images/blank'
    }, 
    {
      name: 'orange',
      img: 'images/orange'
    }, 
    {
      name: 'orange',
      img: 'images/orange'
    }, 
    {
      name: 'blue',
      img: 'images/blue'
    }, 
    {
      name: 'blue',
      img: 'images/blank'
    }, 
    {
      name: 'pink',
      img: 'images/pink'
    }, 
    {
      name: 'pink',
      img: 'images/pink'
    }, 
    {
      name: 'green',
      img: 'images/green'
    }, 
    {
      name: 'green',
      img: 'images/green'
    }, 
    {
      name: 'red',
      img: 'images/red'
    }, 
    {
      name: 'red',
      img: 'images/red'
    }, 
    {
      name: 'white',
      img: 'images/blank'
    }, 
    {
      name: 'white',
      img: 'images/blank'
    }  
  ]
  
  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const resultDisplay =  document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []
  
  // create game board
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
      grid.appendChild(card)
  } 
  }
  
  
  // Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosenId[0] == cardsChosenId[1]) {
      alert("You found a match")
      cards[optionOneId].setAttribute('src','images/white.png')
      cards[optionTwoId].setAttribute('src','images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src','images/blank.png')
      cards[optionTwoId].setAttribute('src','images/blank.png')
      alert('try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length == cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! you found them all!'
    }
  }
  
  
  
  //flip card
  function flipCard() {
   var cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenId.push(cardId)
   this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  
  
  
  
  createBoard();
  
  
  
  
  
