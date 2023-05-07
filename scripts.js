const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;
  const shuffle = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((v, i) => {
        if (i < iteration) return event.target.dataset.value[i];
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) clearInterval(shuffle);
    iteration += 1 / 3;
  }, 30);
};
