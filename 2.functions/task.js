function getArrayParams(...arr) {
  
  let min = Infinity;
 
  let max = -Infinity;
  
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if(arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }
  }

  let avg = sum/arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function differenceMaxMinWorker(...arr) {

  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i < arr.length; i++) {
        
    if(arr[i] > max) {
      max = arr[i];
    }

    if(arr[i] < min) {
      min = arr[i];
    }
  }

  let difference = max - min;
     
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
 
  for(let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  let avgElement = sumEvenElement - sumOddElement;

  return avgElement
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if(arr.length === 0) {
    return 0
  } else { 
    for(let i = 0; i < arr.length; i++) {

      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
  }

  let avg = sumEvenElement/countEvenElement;
  
  return avg;
}

function makeWork (arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  } else {
    func;
  }    
}
