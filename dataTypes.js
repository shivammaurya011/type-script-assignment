// Numeric Types
var age = 25;
var largeNumber = 9007199254740991n;
// String Type
var userName = "John Doe";
// Boolean Type
var isStudent = true;
// Array Types
var scores = [85, 90, 95];
var colors = ["red", "green", "blue"];
var answers = [true, false, true];
// Tuple Type
var person = ["Alice", 30];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
// Any Type
var randomValue = "Hello";
randomValue = 42;
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
var emptyValue = null;
var notAssigned = undefined;
// Function Declarations
function addNumbers(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
};
var point = {
    x: 10,
    y: 20,
};
console.log("Age: ".concat(age));
console.log("Large Number: ".concat(largeNumber));
console.log("User Name: ".concat(userName));
console.log("Is Student: ".concat(isStudent));
console.log("Scores: ".concat(scores));
console.log("Colors: ".concat(colors));
console.log("Answers: ".concat(answers));
console.log("Person: ".concat(person));
console.log("Current Direction: ".concat(Direction[currentDirection]));
console.log("Random Value: ".concat(randomValue));
logMessage("This is a test message");
console.log("Empty Value: ".concat(emptyValue));
console.log("Not Assigned: ".concat(notAssigned));
console.log("Sum: ".concat(addNumbers(5, 10)));
console.log("Greeting: ".concat(greet("John")));
console.log("Car Details: ".concat(myCar.make, ", ").concat(myCar.model, ", ").concat(myCar.year));
console.log("Point Coordinates: x=".concat(point.x, ", y=").concat(point.y));
