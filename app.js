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
let flag1 = 0;
//Array generation and Randomization
for (let i = 0; i < 25; i++) {
  arr.push(i + 1);
}

for (let i = 0; i < 25; i++) {
  let j = (Math.random() * 100) % 24;
  let temp = arr.splice(j, 1);
  arr.push(temp);
}

function getUserName() {
  let usr = prompt("Yay,  New Highscore!!! Enter Your Name", "Player");
  return usr;
}

function checkScore(elapsedTime) {

  if (window.localStorage.getItem('user1') == null) {
    window.localStorage.setItem('user1', '');
    window.localStorage.setItem('user2', '');
    window.localStorage.setItem('user3', '');
    window.localStorage.setItem('user4', '');
    window.localStorage.setItem('user5', '')
  }

  let pos = 6;

  for (let i = 1; i <= 5; i++) {
    let a = window.localStorage.getItem(`user${i}`);
    let value = a.split(' ');
    let uTime = value[value.length - 1];

    if (uTime == '' || parseInt(elapsedTime) < parseInt(uTime)) {
      pos = i;
      break;
    }
  }

  for (let i = 5; i > pos; i--) {
    window.localStorage.setItem(`user${i}`, window.localStorage.getItem(`user${i-1}`));
  }
  if (pos != 6) {
    let userName = getUserName();
    if (userName != null)
      window.localStorage.setItem(`user${pos}`, `${userName} ${elapsedTime}`);
  }


}



function resultBox(elapsedTime) {
  time.textContent = `Time : ${Math.floor(elapsedTime/1000)}`;
  var child = wrap.lastElementChild;
  while (child) {
    wrap.removeChild(child);
    child = wrap.lastElementChild;
  }
  wrap.className = 'wrapper2';
  const score = document.createElement('span');
  const restart = document.createElement('span');
  score.textContent = `Your Time is ${Math.floor(elapsedTime/1000)}`;
  checkScore(Math.floor(elapsedTime / 1000));
  restart.textContent = 'Restart';
  score.classList.add('score');
  restart.classList.add('result');
  restart.id = 'restart';
  wrap.appendChild(score);
  wrap.appendChild(restart);
  wrap.className = 'wrapper2';
}

let t1, t2, t3;

function gridGenerator() {
  wrap.className = '.wrapper';

  wrap.textContent = '\n\n\n                  3';

  t1 = setTimeout(() => {
    wrap.textContent = '\n\n\n                  2';
  }, 1000);
  t2 = setTimeout(() => {
    wrap.textContent = '\n\n\n                  1';
  }, 2000);
  wrap.className = 'wrapper';
  t3 = setTimeout(() => {
    flag1++;
    wrap.textContent = '';

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
  }, 3000);

}

function callback(correct) {
  elapsedTime = Date.now() - startTime;
  if (correct == 41 && flag == 0) {
    flag++;
    resultBox(elapsedTime);
  };
  if (correct <= 40) {
    time.textContent = `Time : ${Math.floor(elapsedTime/1000)}`;
  }
}

let newGame = document.querySelector('#NewGame');
newGame.addEventListener('click', () => {
  window.location.reload(false);
});

wrap.addEventListener('click', function (e) {

  if (e.target.className == 'wrapper' && flag1 == 0) {
    flag1++;
    gridGenerator();
  }

  if (e.target.id == 'restart') {
    flag1 = 0;
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

  if (e.target.className == 'close') {
    var child = wrap.lastElementChild;
    while (child) {
      wrap.removeChild(child);
      child = wrap.lastElementChild;
      flag1 = 0;
    }

    wrap.textContent = '\n\n\n           Start';
    wrap.className = 'wrapper';
  }
  if (e.target.className == 'reset') {
    localStorage.clear();
    wrap.textContent = 'Cleared!!';
    let close = document.createElement('span');
    close.textContent = 'Close';
    close.classList.add('close');
    wrap.appendChild(close);

  }
});



let bestTime = document.querySelector('#bestTime');
let bestTimeUpdater = setInterval(function () {
  if (window.localStorage.getItem('user1') != null && window.localStorage.getItem('user1') != '') {


    let a = window.localStorage.getItem(`user1`);

    let value = a.split(' ');

    let uTime = value[value.length - 1];


    bestTime.textContent = `Best : ${uTime}`;

  }

}, 1);



let highscore = document.querySelector('#highscore');
highscore.addEventListener('click', function (e) {
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  correct = 42;
  time.textContent = 'Time : 0';
  wrap.className = 'wrapper1'
  var child = wrap.lastElementChild;
  while (child) {
    wrap.removeChild(child);
    child = wrap.lastElementChild;
  }
  if (window.localStorage.getItem('user1') != null && window.localStorage.getItem('user1') != '') {
    wrap.textContent = 'HighScore';

    for (let i = 1; i <= 5; i++) {
      let a = window.localStorage.getItem(`user${i}`);
      if (a == null || a == '') break;
      wrap.textContent += `\n ${i} ${a}`;
    }
  } else {
    wrap.textContent = "No High Scores. \nCome Back after playing.";
  }

  let close = document.createElement('span');
  close.textContent = 'Close';
  close.classList.add('close');
  wrap.appendChild(close);

  let reset = document.createElement('span');
  reset.textContent = 'Reset';
  reset.className = 'reset';
  wrap.appendChild(reset);

});