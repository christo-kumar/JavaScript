//OOPs in JS
//All Opps in JS is depends on protptype chain
function demoProtoFirst() {
    var animal = {
        kind: "human"
    };

    var christo = {};

    //Prototype and child object same
    christo.__proto__ = animal;
    console.log(christo.kind);
    console.log(animal.kind) 
    console.log(animal.isPrototypeOf(christo));
    
    //Prototype and child object different
    christo.kind = "monster";
    console.log(christo.kind);
    console.log(animal.kind);
}
demoProtoFirst();

function demoProtoSecond() {
    var animal = {
        kind: "human"
    };

    //Preferred way of doing proto
    var christo = Object.create(animal, {food: {value: "Mango"}});
    console.log(christo.kind);
    console.log(animal.kind) 
    console.log(animal.isPrototypeOf(christo));
    
    //Prototype and child object different
    christo.kind = "monster";
    console.log(christo.kind);
    console.log(christo.food);
    console.log(animal.kind);
}
demoProtoSecond();

//In classical OOPs objects are created from blue print i.e classes
//however in JS objects are created from object i.e prototypal
//Hence in java script inheritence is prototype which can be impliemented 
//in psedo classical way or prototypal way

//Constructor OO

function PersonOO(fName, lName) {
    this._fName = fName;
    this._lName = lName;
    this.fullName = function() {
        return this._fName + this._lName;
    }
}

PersonOO.prototype.getName = function() {
    return this._fName + ' ' + this._lName;
}

function StudentOO(fName, lName, rNumber) {
    PersonOO.call(this, fName, lName);
    this._rollNo = rNumber;
}

StudentOO.prototype.getName = function() {
    return this._fName + " " + this._lName + " " + this._rollNo;
}

let abhinav = new PersonOO("Abhinav", "Kumar");
console.log(abhinav.getName());
let christoS = new StudentOO("Abhinav", "Kumar", "508618")
console.log(christoS.getName());

//Psedo Classical Inheritence
//Constructor pattern
function demoClassicalInheritence() {

}


//Classes in JS
//Classes in ES6
class Person {
    fName = "";
    lName = "";

    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    fullName() {
        return fName + lName;
    }

    get firstName() {
        return this.fName;
    }

    set firstName(fName) {
        if (fName === ""){
            console.log("error");
        } else {
            this.fName = fName;
        }

    }
}

let person = new Person("Christo", "Kumar");
console.log(person.firstName);
console.log(person.fName);

class Student extends Person {
    _rollNo = "";
    constructor (fName, lName, rollNo) {
        super(fName, lName);
        this._rollNo = rollNo;
    }

    get rollNumber() {
        this._rollNo;
    }
}
