const body = document.getElementById("main");

const hexNums = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

body.addEventListener("click", (e) => {
  e.stopPropagation();

  let bgColor = "#";

  while (bgColor.length <= 6) {
    bgColor += hexNums[Math.floor(Math.random() * hexNums.length)];
  }

  body.style.backgroundColor = bgColor;
});
