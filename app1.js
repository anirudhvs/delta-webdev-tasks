  let i = 26;
  while (i != 41) {
    wrap.addEventListener('click', function (e) {
      e.target.textContent = i++;
    })
  }