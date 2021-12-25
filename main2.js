console.log("========== Variable Scope ES -5 ============");
console.log("========== ES -5 had local and Global scope and var ============");
var globalVar1 = "Global-1";
window.globalVar2 = "Global-2"; //Window object is availble for browser

function demoScopeES5() {
    var localDemo = "Local-1";
    console.log(globalVar1);
    console.log(window.globalVar1); //Automatically adds to window
    console.log(window.globalVar2);
    console.log(localDemo);
    for(var i = 0; i< 5; i++) { 
    }
    console.log(i); //Local scope not a block scope
}

demoScopeES5();
//console.log(localDemo);//Exception-Variable not defined

console.log("========== Variable Scope ES-6 ============");
console.log("========== ES-6 const and let were added ============");
console.log("========== ES-6 Also block level scope is added ============");

function demoScopeES6(){
    for(let i=0;i<5;i++){
        console.log(i);
    }

    {
        const constVar = "Const-1";
        console.log(constVar);
        //constVar = "Const-2";//constVar is const cannot be edited
    }
    //console.log(constVar); constVar is const  so its a block level variable
    //console.log(i); i is let so its a block level variable
}

demoScopeES6();

console.log("========== Hoisting ============");
function demoVariableHoisting() {
    console.log(hoistDemo); //undefined
    var hoistDemo = "Hoisting";
    
    //As code above translates to
    //var hoistDemo;
    //console.log(hoistDemo);
    //hoistDemo = "Hoisting";
    //Hoisting is performed as per the scope
}

demoVariableHoisting();
demoFunctionHoisting();

function demoFunctionHoisting() {
    console.log("Function hoisting is working");
}

console.log("========== IIFE ============");
//Global namespace is overriden by different files, hence global var are less reliable.

(function(){
    console.log("This is IIFE");
})();

console.log("=========== Closures ===========");
function closureDemo(name) {
    var retval = "Hello " + name;
    return function() {
        console.log(retval); //keeps the reference of retval.
    }
}
closureDemo("Christo")();
var sayChris = closureDemo("Abhinav");
sayChris();

abc=1;
console.log(abc);

