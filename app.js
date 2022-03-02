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
var outputVal = document.getElementById("output").value;

// add click event listener to initialize functions

numbersArray[0].addEventListener("click", function (event) {
  output.append(0);
});

mainBtns[2].addEventListener("click", function (event) {
  alert(outputVal);
});
