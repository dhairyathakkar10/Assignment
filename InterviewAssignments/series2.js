//Series 2

const x = prompt("Please enter value of x : ");
const n = prompt("Please enter value of n : ");

//Helper Functions
function factFunction(a) {
  //Will return the factorial
  let ans = 1;
  for (let i = 1; i <= a; i++) {
    ans = ans * i;
  }
  return ans;
}

function generateSeriesAndCalculate(a, currItr) {
  let num = 1;
  let den = 1;
  for (let i = 1; i <= a; i++) {
    if (i !== currItr) {
      num = num * (x - i);
      den = den * (currItr - i);
    }
  }
  return num / den;
}

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += factFunction(i) * generateSeriesAndCalculate(n, i);
}
console.log("Ans : " + sum);
