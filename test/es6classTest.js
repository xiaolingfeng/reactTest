let path = require('path');
let MyClass = class Me {
    constructor(){
        this.me = 'a';
    }

    log(){
        console.log(new Me().me);
        console.log(this.me);
    }

};

let myclass = new MyClass();
myclass.log();


console.log('path:' + path.resolve('@/'));