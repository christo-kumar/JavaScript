//Pass By value
var a = 3;
function newCode(a) {
    a = 1;

}
console.log(a);

//Pass By Reference
var obj = {};
function someCode(param) {
    param.name = "Christo";
}
someCode(obj);
console.log(obj.name);

//Arguments passing
function sum(a,b) {
    console.log(arguments);
}

sum(1,2,3,4);

//Rest Operator
function arthemathic(operation, ...numbers) {
    console.log(operation);
    console.log(numbers);
}
arthemathic("sum",1,2,3,4);

//Spread Operator
function coupleArray() {
    var ar1 = [4,5,6];
    var ar2 = [1,2,3, ...ar1];
    console.log(ar2);
}
coupleArray();

//Templated Strings
function demoTempStrings() {
    var isChild = true;
    var helloApra = `Hello
     World"s`; //Best Approach embeds \n automatically
    var helloChris = "Hello World My name\"s Chris"; //better approach
    var helloAyaan = 'Hello World My name\'s Ayaan';

    var name = "Ayaan";
    var place = "Chhindwara"
    var intro = `Hi my name is ${name} I am from ${place} age is ${ isChild ? 2+2 : 20 } `;

    
    console.log(helloChris);
    console.log(helloAyaan);
    console.log(helloApra); 
    console.log(intro);
    console.log(h1`Hi my name is ${name} I am from ${place} age is ${ isChild ? 2+2 : 20 } `);
}
demoTempStrings();

//Tagged Function
function h1(strings, ...values) {
    var body = "";
    for (var i=0; i<strings.length; i++) {
        body += strings[i] + (values[i] || "");
    }
    return "<h1>" + body + "<h1>"
}