//Generate a random number

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; // floor random jo value hai usko 2 digit me la dega , 16 jo likhe hai uska matlab 16 bar chalega
  }
  return color;
};

let intervalId; // global scope kiye hai for stop and start done me use hojayega
document.querySelector("#start").addEventListener("click", function () {
  intervalId = setInterval(ChangeBgColor, 1000);

  function ChangeBgColor() {
    // ye function bnye hai kuki setinterval me method pass krna tha
    document.body.style.backgroundColor = randomColor();
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
});
