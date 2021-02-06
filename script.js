"use strict";

//Declare variables and set their value to null (no value)
let number1 = null;
let number2 = null;
let result = null;

startUp();

//Make buttons clickable
function startUp() {
  document.querySelector("#calculate").addEventListener("click", readNumbers);
  document.querySelector("#clear").addEventListener("click", clearCalculations);
}

//Read the numbers
function readNumbers() {
  const str1 = document.querySelector("#firstnumber").value;
  const str2 = document.querySelector("#secondnumber").value;
  number1 = Number(str1);
  number2 = Number(str2);

  calcNumbers();
}

//Calculating the numbers that the user enters
function calcNumbers() {
  const option = document.querySelector("#operator").value;

  if (option === "add") {
    result = number1 + number2;
  } else if (option === "sub") {
    result = number1 - number2;
  } else if (option === "mul") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  roundUpNumbers();
}

//Round up the numbers
function roundUpNumbers() {
  const doRound = document.querySelector("#doround").checked;
  const decimals = document.querySelector("#decimals").value;

  if (doRound === true) {
    //https://www.w3schools.com/jsref/jsref_tofixed.asp
    result = result.toFixed(decimals);
  }
  showResult();
}

//Show the result/calculations
function showResult() {
  document.querySelector("#firstnumber").value = null;
  document.querySelector("#secondnumber").value = null;

  const container = document.querySelector("#results");
  const createLi = document.createElement("li");
  createLi.innerHTML = result;
  container.appendChild(createLi);
  container.scrollTo(1, 1000000000);
}

//Clear the calculations so that the user is able to enter new ones
function clearCalculations() {
  document.querySelector("#results").innerHTML =
    "<li>0</li><li>0</li><li>0</li><li>0</li>";
}
