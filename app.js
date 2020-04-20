let k = 26;
let corr = 1;
const wrap = document.querySelector('.wrapper');
let arr = [];
for (let i = 0; i < 25; i++) {
  arr.push(i + 1);
}

for (let i = 0; i < 25; i++) {
  let j = (Math.random() * 100) % 24;
  let temp = arr.splice(j, 1);
  arr.push(temp);
}

let flag = 0;
let startTime;
let endTime;

wrap.addEventListener('click', function (e) {

  if (flag == 0) {
    startTime = new Date()
    wrap.textContent = '';
    for (let i = 0; i < 25; i++) {
      const block = document.createElement('span');
      block.textContent = arr[i];
      block.classList.add('elements');
      block.id = `${i}`;
      wrap.appendChild(block);
    }

  }


  if (flag) {
    if (parseInt(e.target.textContent) == corr) {
      e.target.textContent = k++;
      corr++;
    }


  }
  flag++;
  console.log(new Date() - startTime);

});