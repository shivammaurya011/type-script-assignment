var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base Class: Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display basic details
    Person.prototype.displayDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
// Derived Class: Student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, course, semester) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the base class
        _this.studentId = studentId;
        _this.course = course;
        _this.semester = semester;
        return _this;
    }
    // Method to display student details
    Student.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), ", Student ID: ").concat(this.studentId, ", Course: ").concat(this.course, ", Semester: ").concat(this.semester);
    };
    return Student;
}(Person));
// Derived Class: Staff
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this; // Call the constructor of the base class
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    // Method to display staff details
    Staff.prototype.displayDetails = function () {
        return "".concat(_super.prototype.displayDetails.call(this), ", Staff ID: ").concat(this.staffId, ", Department: ").concat(this.department, ", Position: ").concat(this.position);
    };
    return Staff;
}(Person));
// Main Function
function main() {
    // Create instances of Student
    var student1 = new Student("Alice Johnson", 20, 101, "Computer Science", 4);
    var student2 = new Student("Bob Smith", 22, 102, "Mechanical Engineering", 6);
    // Create instances of Staff
    var staff1 = new Staff("Dr. Emily Brown", 45, 201, "Physics", "Professor");
    var staff2 = new Staff("Mr. John Green", 35, 202, "IT", "Technician");
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
