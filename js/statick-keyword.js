class Person {
    firstName= "John";
    lastName = 'Due';
    static age = 32;
    getFullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

console.log(Person.age)

// const personObj = new Person();