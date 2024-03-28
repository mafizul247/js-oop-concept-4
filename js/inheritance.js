/*
class Father{
    addNumber() {
        const a = 10;
        const b = 20;
        const c = 30;
        console.log(a + b + c);
    }
}

class Son extends Father{

}

const fatherObj = new Father();
const sonObj = new Son();

sonObj.addNumber();

*/
class Father {
    addNumber() {
        const a = 10;
        const b = 20;
        const c = 30;
        console.log(a + b + c);
    }
}

class Son extends Father {
    addNumber() {
        const a = 10;
        const b = 20;
        console.log(a + b);
    }

}

const fatherObj = new Father();
const sonObj = new Son();

sonObj.addNumber();