var numberOfApples = 14;
console.log(numberOfApples);

console.log("I have " + numberOfApples + " apples.");
// -----------------------------------------------------------------------------
var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
};
// -----------------------------------------------------------------------------
var number = 16;
if (number > 10) {
  console.log(number + " is greater than 10.");
} else if (number === 10) {
  console.log(number + " is exactly 10.");
} else {
  console.log(number + " must be less than 10.");
}
// -----------------------------------------------------------------------------
for (i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.");
}
// -----------------------------------------------------------------------------
var base = 5;
for (i = 0; i < 20; i++) {
  console.log(i + base);
}
// -----------------------------------------------------------------------------
var total = 0;
for (i = 0; i < 100; i++) {
  total += i
}
console.log(total)
// -----------------------------------------------------------------------------
for (height = 3; height < 16; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}
// -----------------------------------------------------------------------------
var containers = ['purse', 'wallet', 'backback'];
containers.forEach(function(element) {
  console.log(element);
});
// -----------------------------------------------------------------------------
function hello_world() {
  console.log("Hello World!");
};

hello_world();
// -----------------------------------------------------------------------------
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

var amount = add(5, 7);
console.log(amount);
