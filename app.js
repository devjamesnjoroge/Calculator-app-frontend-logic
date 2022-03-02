// USER INTERFACE LOGIC

// get calculator buttons DOM elements

var numbersArray = [
  document.querySelector("#zero"),
  document.querySelector("#one"),
  document.querySelector("#two"),
  document.querySelector("#three"),
  document.querySelector("#four"),
  document.querySelector("#five"),
  document.querySelector("#six"),
  document.querySelector("#seven"),
  document.querySelector("#eight"),
  document.querySelector("#nine"),
  document.querySelector("#decimal"),
];
var operatorsArray = [
  document.querySelector("#plus"),
  document.querySelector("#minus"),
  document.querySelector("#multiply"),
  document.querySelector("#divide"),
];
var mainBtns = [
  document.querySelector("#reset"),
  document.querySelector("#ans"),
  document.querySelector("#del"),
];

var output = document.getElementById("output");

// add click event listener to initialize functions

numbersArray[0].addEventListener("click", function (event) {
  output.append(0);
});

numbersArray[1].addEventListener("click", function (event) {
  output.append(1);
});
numbersArray[2].addEventListener("click", function (event) {
  output.append(2);
});
numbersArray[3].addEventListener("click", function (event) {
  output.append(3);
});
numbersArray[4].addEventListener("click", function (event) {
  output.append(4);
});
numbersArray[5].addEventListener("click", function (event) {
  output.append(5);
});
numbersArray[6].addEventListener("click", function (event) {
  output.append(6);
});
numbersArray[7].addEventListener("click", function (event) {
  output.append(7);
});
numbersArray[8].addEventListener("click", function (event) {
  output.append(8);
});
numbersArray[9].addEventListener("click", function (event) {
  output.append(9);
});
numbersArray[10].addEventListener("click", function (event) {
  output.append(".");
});

// operators appending

operatorsArray[0].addEventListener("click", function (event) {
  output.append("+");
});

operatorsArray[1].addEventListener("click", function (event) {
  output.append("-");
});

operatorsArray[2].addEventListener("click", function (event) {
  output.append("x");
});

operatorsArray[3].addEventListener("click", function (event) {
  output.append("/");
});

// mainBtns functionality

mainBtns[2].addEventListener("click", function (event) {
  output.remove();
  location.reload();
});

mainBtns[0].addEventListener("click", function (event) {
  output.remove();
  location.reload();
});
