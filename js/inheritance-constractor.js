/*
class Father {
    constructor(a, b) {
        console.log('Fathers Constructor ' + (a + b));
    }
}

class Son extends Father {

}

// const FatherObj = new Father();
const SonObj = new Son(20, 30);
*/

/*
class Father {
    
}

class Son extends Father {
    constructor(a, b) {
        super();
        console.log('Sons Constructor ' + (a + b));
    }
}

const SonObj = new Son(20, 30);
*/

class Father {
    constructor(a, b) {
        console.log('Father Constructor ' + (a + b));
    }
    
}

class Son extends Father {
    constructor(a, b) {
        super();
        console.log('Sons Constructor ' + (a + b));
    }
}

// const FatherObj = new Father(20, 30);
const SonObj = new Son(20, 30);

