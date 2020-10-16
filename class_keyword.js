class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Ruslan", "Khait");
let secondStudent = new Student("Dima", "Khait");

console.log("Student 1: " + firstStudent.firstName + " " + firstStudent.lastName + ": " + firstStudent.fullName());
console.log("Student 2: " + secondStudent.firstName + " "+  secondStudent.lastName + ": " + secondStudent.fullName());
