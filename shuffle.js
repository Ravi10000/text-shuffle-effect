const menu = document.querySelectorAll("nav > li");
// console.log(menu);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// menu[0].onmouseover = (event) => {
//   let iterations = 0;

//   const shuffle = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, i) => {
//         if (i < iterations) return event.target.dataset.value[i];
//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iterations > 10) clearInterval(shuffle);
//     iterations += 1 / 3;
//   }, 30);
// };

menu.forEach((item) => {
  item.onmouseover = (event) => {
    let iterations = 0;

    const shuffle = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, i) => {
        //   console.log(
        //     event.target.dataset.value[i],
        //     event.target.dataset.value[i] == " "
        //   );
          if (event.target.dataset.value[i] === " ") return " ";
          if (i < iterations) return event.target.dataset.value[i];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations > 10) clearInterval(shuffle);
      iterations += 1 / 2;
    }, 30);
  };
});
