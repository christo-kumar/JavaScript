
//this in global scope
console.log(this); //Output: window object
this.christo = "demo this";
console.log(this.christo); //demo this
console.log(christo); //demo this

//this in function scope
function demoDefaultThis() {
    console.log(this); //Output: by default Window object
}
demoDefaultThis();

var demoFunctionThis = {
    checkThis: function() {
        console.log(this);
    }
}

demoFunctionThis.checkThis();//Output: Owner Object
var func = demoFunctionThis.checkThis;
func(); //Output: Window Object, value of this depands on calling context

var demoNestedFunctionThis = {
    checkThis: function() {
        console.log(this); //if called via object, this is ownner object

        function nestedFun() {
            console.log(this); //this would be global as its called internally
        }

        nestedFun();
    }
}
demoNestedFunctionThis.checkThis();

//Function as object
function demoFunctionAsObject() {
    console.log(this);
}
demoFunctionAsObject.fName = 1; //function as object
console.log(demoFunctionAsObject.fName); //property added to function

//As its a object other methods can be called on it
console.log(demoFunctionAsObject.toString());
demoFunctionAsObject.call(1); //this becomes number 1

function demoCallAndApply(param1, param2) {
    console.log(this);
    console.log(param1);
    console.log(param2);

}
//Normally use call unless function takes variable number of arguement
demoCallAndApply.call("this", 1, 2);
demoCallAndApply.apply("this",[3,4]);


//How to fix this issue..
//Its value is not reliable as it depands on calling context
//bind is used to define the value of this at compile time
//bind works with function expression not on function directly
var bindSimpleDemo = function() {
    console.log(this);
}.bind(1); //value of this binded to 1 at compile time
bindSimpleDemo();

var bindNextDemo =  {
    checkThis: function() {
        console.log(this);
        var checkOther = function() {
            console.log(this);
        }.bind(this);
        checkOther();
    }
}
bindNextDemo.checkThis();


//Arrow Function
//In Arrow function this always takes value where function is defined.

let firstArrowDemo= () => {
    console.log("Timeout callback");
}
setTimeout(firstArrowDemo, 1000);

let secondArrowDemo = (param1, param2) => {
    console.log(param1);
    console.log(param2);
}
secondArrowDemo("Hi", "Christo");

let thirdArrowDemo = (param1, param2) => param1 + param2;
console.log(thirdArrowDemo(1,2));