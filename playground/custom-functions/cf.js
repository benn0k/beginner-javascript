console.log('we in here');
// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('run calculateBill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  console.log(`Your total is $${total}`);
  return total;
}

// Function Call (on run)

// SayHiTo Function

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo(`Ryan`);
console.log(greeting);

function yell(name = `BOZO`) {
  return `HEY ${name.toUpperCase()}`;
}
