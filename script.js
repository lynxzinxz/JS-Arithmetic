
let a = parseFloat(prompt('Please enter the first number', 0));
let b = parseFloat(prompt('Please enter the second number', 0));

let sumExpression = a + " + "  + b;
let differenceExpression = a + " - " + b;
let productExpression = a + " * " + b;
let quotientExpression = a + " / " + b;

let sum = a + b;
let diff = a - b;
let prod = a * b;
let quo = a / b;

function displayResult(expression, result) {
  document.writeln("<div class='answer-box'><strong>", expression, "</strong> = ", result, "</div>");
}

displayResult(sumExpression, sum);
displayResult(differenceExpression, diff);
displayResult(productExpression, prod);
displayResult(quotientExpression, quo);