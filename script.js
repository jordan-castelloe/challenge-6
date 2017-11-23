// What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?

// declare global variables
let squares = [];
let sum = 0;
let sumOfSquares;
let squareOfSum;
let difference;

// for the numbers 1 through ten, find the square of each number and the sum of all the numbers combined
function calc(){
    for (i = 1; i <= 10; i++){
    squares[i] = i*i;
    sum = sum + i;
}
}

// this funciton will be called with the .reduce() method to find the sum of the squares
function getSum(total, num) {
    return total + num;
}

// find the sum of the squares
function sumSquares(){
    for(i=0; i <= squares.length; i++){ 
       sumOfSquares = squares.reduce(getSum);
    }
    console.log("The sum of squares is ", sumOfSquares);
}

// find the square of sums
function squareSum(){
    squareOfSums = sum * sum;
    console.log("The square of sums is ", squareOfSums);
}

// find the difference
function findDifference(){
    if (sumOfSquares > squareOfSums){
        difference = sumOfSquares - squareOfSums;
    } else {
        difference = squareOfSums - sumOfSquares;
    }

    console.log("The difference is ", difference)
}

// call all the functions
calc();
sumSquares();
squareSum();
findDifference();







