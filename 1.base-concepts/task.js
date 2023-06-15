
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2)-4*a*c;

  if (discriminant === 0) {
    let root = -b/(2*a);
    arr.push(root);
  }  else if(discriminant > 0) {
    let root = (-b + Math.sqrt(discriminant) )/(2*a);
    arr.push(root);
    root = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100;
  let interestRate = percent/12;
  let credit = amount - contribution;
  let payment = credit * (interestRate + (interestRate / (Math.pow((1 + interestRate), countMonths) - 1)));
  let sum = payment * countMonths;

  return +sum.toFixed(2);
}