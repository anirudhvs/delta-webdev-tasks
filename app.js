//Query Selectors
const wrap = document.querySelector('.wrapper');
let time = document.querySelector('.timer');

//variables
let k;
let correct;
let arr = [];
let elapsedTime;
let startTime;
let counter;
let flag = 0;
//Array generation and Randomization
for (let i = 0; i < 25; i++) {
  arr.push(i + 1);
}

// for (let i = 0; i < 25; i++) {
//   let j = (Math.random() * 100) % 24;
//   let temp = arr.splice(j, 1);
//   arr.push(temp);
// }

function checkScore(elapsedTime) {
  if (window.localStorage.getItem('user1') == '') {
    window.localStorage.setItem('user1', `First ${elapsedTime}`);
  } else {
    let First
  }

}

function resultBox(elapsedTime) {
  time.textContent = `Time\n${elapsedTime}`;
  var child = wrap.lastElementChild;
  while (child) {
    wrap.removeChild(child);
    child = wrap.lastElementChild;
  }
  const score = document.createElement('span');
  const restart = document.createElement('span');
  score.textContent = `Your Time is ${elapsedTime}`;
  checkScore(elapsedTime);
  restart.textContent = 'Restart';
  score.classList.add('result');
  restart.classList.add('result');
  restart.id = 'restart';
  wrap.className = 'score';
  wrap.appendChild(score);
  wrap.appendChild(restart);
}


function gridGenerator() {
  wrap.textContent = '';
  wrap.className = 'wrapper';
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('span');
    block.textContent = arr[i];
    block.classList.add('elements');
    block.id = `${i}`;
    wrap.appendChild(block);
    startTime = Date.now();
    k = 26;
    correct = 1;
    flag = 0;
    counter = setInterval(function () {

      callback(correct);

    }, 1);
  }
}

function callback(correct) {
  elapsedTime = Date.now() - startTime;
  if (correct == 41 && flag == 0) {
    flag++;
    resultBox(elapsedTime);
  };
  if (correct <= 40) {
    time.textContent = Math.floor(elapsedTime);
  }
}


wrap.addEventListener('click', function (e) {

  if (e.target.className == 'wrapper') {
    gridGenerator();
  }

  if (e.target.id == 'restart') {
    gridGenerator();

  }
  //checking Correct or Wrong Option
  if (e.target.className == 'elements')
    if (parseInt(e.target.textContent) == correct) {
      e.target.textContent = k++;

      if (k > 41) {
        e.target.textContent = '';
      }
      correct++;
    }
});