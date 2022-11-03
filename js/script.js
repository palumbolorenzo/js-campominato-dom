const eleBtnPlay = document.querySelector('#btn-play');
const eleSelectLevel = document.querySelector('#select-level');
const eleStartScreen = document.querySelector('.start-screen');
const eleBtnHelp = document.querySelector('#btn-help');
const eleGrid = document.querySelector('.grid');

eleBtnPlay.addEventListener('click', function () {
  eleGrid.innerHTML = ''; // pulire la griglia ad ogni cambi di livello

  eleGrid.classList.remove('hidden');
  eleStartScreen.classList.add('hidden');

  const nCells = parseInt(eleSelectLevel.value);
  //switch (pic);

  const sideSquare = Math.sqrt(nCells);
  eleGrid.style.setProperty('--sideSquare', sideSquare);

  for (let i = 1; i <= nCells; i++) {
    //eleGrid.innerHTML += '<div class="cell" style=""></div>';
  
    const eleCell = document.createElement('div');
    eleCell.classList.add('cell');
    eleCell.innerHTML = i;
    //eleCell.style.width = `calc (100% / ${sideSquare})`;
    //eleCell.style.height = `calc (100% / ${sideSquare})`;
    eleGrid.append(eleCell);
  
    eleCell.addEventListener('click', function () {
      this.classList.toggle('active')
    });
  }
});

eleBtnHelp.addEventListener('click', function (){
  if (eleBtnHelp.innerHTML == 'Show Help') {
    eleBtnHelp.innerHTML = 'Back to Game';
    eleGrid.classList.add('hidden');
    eleStartScreen.classList.remove('hidden');
  } else {
    eleBtnHelp.innerHTML = 'Show Help';
    eleGrid.classList.remove('hidden');
    eleStartScreen.classList.add('hidden');
  }
  
});



// <--- random creation --->


const eleGrid = document.querySelector('.grid');

for (let i = 0; i < 64; i++) {
  const arrRandoms = [];

  let needRandom = true;
  do {
    const randomNumber = getRandomInteger(1, 64);
    if (!arrRandoms.includes(randomNumber)) {
      arrRandoms.push(randomNumber);
      needRandom = false;
    }  
  } while (needRandom)

  const eleCell = document.createElement('div');
  eleCell.classList.add('cell');
  if (isEven(randomNumber)) {
    eleCell.classList.add('even');
  } else {
    eleCell.classList.add('odd');
  }
  eleCell.innerHTML = randomNumber;
  eleGrid.append(eleCell);

  eleCell.addEventListener('click', function () {
    this.classList.toggle('active');
  })
}

function getRandomInteger (min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}