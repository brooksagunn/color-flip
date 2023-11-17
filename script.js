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

console.log("reached");

body.addEventListener("click", (e) => {
  e.stopPropagation();
  body.style.backgroundColor = "blue";
});

console.log("reached");
