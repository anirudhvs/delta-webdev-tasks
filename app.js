let k = 26;
let correct = 1;
const wrap = document.querySelector('.wrapper');
let arr = [];
for (let i = 0; i < 25; i++) {
  arr.push(i + 1);
}

//randomising values
// for (let i = 0; i < 25; i++) {
//   let j = (Math.random() * 100) % 24;
//   let temp = arr.splice(j, 1);
//   arr.push(temp);
// }

let flag = 0;
let startTime;
wrap.addEventListener('click', function (e) {

  if (flag == 0) {
    wrap.textContent = '';
    for (let i = 0; i < 25; i++) {
      const block = document.createElement('span');
      block.textContent = arr[i];
      block.classList.add('elements');
      block.id = `${i}`;
      wrap.appendChild(block);
      startTime = Date.now();
      k = 26;
    }
  }


  //checking Correct or Wrong Option
  if (flag) {
    if (parseInt(e.target.textContent) == correct) {
      e.target.textContent = k++;
      console.log(k);
      if (k > 41) {
        e.target.textContent = '';
      }
      correct++;
    }

  }
  flag++;
  console.log(correct);


  let time = document.querySelector('.timer');
  if (correct == 40) {
    time.textContent = '';
  }
  let counter;
  if (correct <= 40) {
    counter = setInterval(() => {

      let elapsedTime = Date.now() - startTime;

      time.textContent = elapsedTime;
      if (correct > 40)
        clearInterval(counter);
    }, 1000);
  }
  console.log(counter);
});