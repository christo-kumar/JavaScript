//Destructuring
//ES-6 Objects to Variable
function demoObjectDestructuring() {
    const obj = { first: "Christo", last: "Kumar", age: 42 };

    //classical way
    const firstName = obj.first;
    console.log(firstName);

    //Destructuring
    const {first: fVal, last: lval }  = obj;
    console.log(lval);

    //Destructuring shorter form
    const {first, last} = obj;
    console.log(first);

}

demoObjectDestructuring();

function demoArrayDestructuring() {
    const arr = ['a', 'b'];
    const [x, y] = arr;
    console.log(x);
    console.log(y);

}

demoArrayDestructuring();

function funcDestructuion({x=0}){
    console.log(x);
}

funcDestructuion({x:2});

//Iteration in JS
function iterationWay1() {
    //break and continue can be used
    let array = [1,2,3];
    for (let i = 0; i< array.length; i++) {
        console.log(array[i]);
    }

}
//iterationWay1();

function iterationWay2() {
    //break and continue cannot be used
    let array = [1,2,3];
    array.forEach(element => {
        console.log(element);
    })
}
//iterationWay2();


function iterationWay3() {
    //Continue and Break and return works
    let array = [1,2,3];
    for (let index in array) {
        console.log(index);  //prints index
    }

    for (let value of array) {
        console.log(value);  //prints value
    }
}
iterationWay3();

