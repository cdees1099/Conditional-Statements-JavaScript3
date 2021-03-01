var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("what is number 1?"));


var operator= prompt("What operator wouold you like to use (*, /, +, -)?");
                 

var num2=Number(prompt("what is number 2?"));

let result;

if (isNaN(num1)) {
  result = "Your first entry was not a real number :( Please reload this page and enter a numnber for your first entry.";
}
else if (isNaN(num2)) { 
  result = "Your second entry was not a number, reload the page and re-enter a NUMBER.";
}
else if (operator == '+') {
  result = num1 + num2;
  result = "the result is: " + result;
}
else if (operator == '-') {
  result = num1 - num2;
  result = "the result is: " + result;
}
else if (operator == '*') {
  result = num1 * num2;
  result = "the result is: " + result;
}
else if (operator == '/') {
  result = num1/num2;
  result = "the result is: " + result;
}
else{
  result = "You did not enter an appropriate operator, please reload the program and enter +, -, *, or /.";
}

containerEle.innerHTML = result;