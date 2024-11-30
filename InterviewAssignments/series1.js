// Series 1

//Helper Functions
function powerFunc(a, b) {
  //Will return the power
  let ans = 1;
  while (b--) {
    ans = ans * a;
  }
  return ans;
}

function factFunction(a) {
  //Will return the factorial
  let ans = 1;
  for (let i = 1; i <= a; i++) {
    ans = ans * i;
  }
  return ans;
}

const n = prompt("Please enter the value of n : "); //Input from user

let sum = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    sum -= factFunction(i) / powerFunc(i, i);
  } else {
    sum += factFunction(i) / powerFunc(i, i);
  }
}
console.log("ans : " + sum);
