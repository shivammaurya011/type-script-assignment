// Base Class: Person
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display basic details
    displayDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Derived Class: Student
  class Student extends Person {
    studentId: number;
    course: string;
    semester: number;
  
    constructor(name: string, age: number, studentId: number, course: string, semester: number) {
      super(name, age); // Call the constructor of the base class
      this.studentId = studentId;
      this.course = course;
      this.semester = semester;
    }
  
    // Method to display student details
    displayDetails(): string {
      return `${super.displayDetails()}, Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`;
    }
  }
  
  // Derived Class: Staff
  class Staff extends Person {
    staffId: number;
    department: string;
    position: string;
  
    constructor(name: string, age: number, staffId: number, department: string, position: string) {
      super(name, age); // Call the constructor of the base class
      this.staffId = staffId;
      this.department = department;
      this.position = position;
    }
  
    // Method to display staff details
    displayDetails(): string {
      return `${super.displayDetails()}, Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`;
    }
  }
  
  // Main Function
  function main(): void {
    // Create instances of Student
    const student1 = new Student("Alice Johnson", 20, 101, "Computer Science", 4);
    const student2 = new Student("Bob Smith", 22, 102, "Mechanical Engineering", 6);
  
    // Create instances of Staff
    const staff1 = new Staff("Dr. Emily Brown", 45, 201, "Physics", "Professor");
    const staff2 = new Staff("Mr. John Green", 35, 202, "IT", "Technician");
  
    // Display details of students
    console.log("Students:");
    console.log(student1.displayDetails());
    console.log(student2.displayDetails());
  
    // Display details of staff members
    console.log("\nStaff:");
    console.log(staff1.displayDetails());
    console.log(staff2.displayDetails());
  }
  
  // Run the Main Function
  main();
  