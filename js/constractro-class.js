class Person {
    constructor(a, b) {
        console.log(a + b);
    }

    firstName = "John";
    lastName = 'Due';
    age = 32;

    getFullName() {
        return `Your Full Name is ${this.firstName} ${this.lastName}`
    }
}

const personObj = new Person(20, 30);

// console.log(personObj.getFullName());