// Numeric Types
let age: number = 25;
let largeNumber: bigint = 9007199254740991n;

// String Type
let userName: string = "John Doe";

// Boolean Type
let isStudent: boolean = true;

// Array Types
let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];

// Tuple Type
let person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
  North,
  East,
  South,
  West,
}
let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";
randomValue = 42;

// Void Type
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined Types
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Function Declarations
function addNumbers(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Object Types
interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};

console.log(`Age: ${age}`);
console.log(`Large Number: ${largeNumber}`);
console.log(`User Name: ${userName}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Scores: ${scores}`);
console.log(`Colors: ${colors}`);
console.log(`Answers: ${answers}`);
console.log(`Person: ${person}`);
console.log(`Current Direction: ${Direction[currentDirection]}`);
console.log(`Random Value: ${randomValue}`);
logMessage("This is a test message");
console.log(`Empty Value: ${emptyValue}`);
console.log(`Not Assigned: ${notAssigned}`);
console.log(`Sum: ${addNumbers(5, 10)}`);
console.log(`Greeting: ${greet("John")}`);
console.log(`Car Details: ${myCar.make}, ${myCar.model}, ${myCar.year}`);
console.log(`Point Coordinates: x=${point.x}, y=${point.y}`);
