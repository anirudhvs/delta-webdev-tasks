//Query Selectors
const wrap = document.querySelector('.wrapper');
let time = document.querySelector('.timer');

//variables
let k;
let correct;
let arr = [];
let elapsedTime;
let startTime;
//Array generation and Randomization
for (let i = 0; i < 25; i++) {
  arr.push(i + 1);
}

// for (let i = 0; i < 25; i++) {
//   let j = (Math.random() * 100) % 24;
//   let temp = arr.splice(j, 1);
//   arr.push(temp);
// }

function gridGenerator() {
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
  }
}

// let flag = 0;

wrap.addEventListener('click', function (e) {

  if (e.target.className == 'wrapper') {
    gridGenerator();
  }

  //checking Correct or Wrong Option
  if (e.target.className == 'elements')
    if (parseInt(e.target.textContent) == correct) {
      e.target.textContent = k++;
      console.log(k);
      if (k > 41) {
        e.target.textContent = '';
      }
      correct++;
    }
  console.log('correct=', correct);


  // if (correct <= 40) {
  counter = setInterval(() => {

    elapsedTime = Date.now() - startTime;

    time.textContent = Math.floor(elapsedTime);
    if (correct >= 41) {
      clearInterval(counter);

    }
  }, 1);
  // }
  console.log(elapsedTime - startTime);

});